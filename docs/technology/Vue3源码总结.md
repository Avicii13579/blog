# Vue3 源码总结

## 概述

Vue3 是一个现代化的 JavaScript 前端框架，采用了全新的响应式系统设计。本文档详细分析了 Vue3 源码的核心实现，主要包含响应式系统、编译器系统、运行时系统等关键模块。

## 架构概览

Vue3 源码采用 monorepo 架构，主要包含以下核心包：

- **@vue/reactivity**: 响应式系统核心
- **@vue/runtime-core**: 运行时核心
- **@vue/runtime-dom**: DOM 相关运行时
- **@vue/compiler-core**: 编译器核心
- **@vue/compiler-dom**: DOM 编译器
- **@vue/shared**: 共享工具函数

---

## 一、响应式系统实现逻辑

### 1.1 总体架构

Vue3 的响应式系统基于 **Proxy** 和 **Effect** 系统构建，核心理念是：
- **数据劫持**：通过 Proxy 劫持对象的读写操作
- **依赖收集**：在数据读取时收集依赖
- **依赖触发**：在数据修改时触发相关依赖更新

### 1.2 核心数据结构

#### 依赖收集映射关系
```typescript
// 三层映射结构
WeakMap<target, Map<key, Set<effect>>>
```

- **第一层 WeakMap**: `target` → `Map`，存储被代理的对象
- **第二层 Map**: `key` → `Set`，存储对象的每个属性
- **第三层 Set**: 存储依赖该属性的所有 effect 函数

### 1.3 reactive() 实现原理

```typescript
/**
 * 创建响应式对象的核心流程
 */
export function reactive(target: object) {
    return createReactiveObject(target, mutableHandlers, reactiveMap)
}

function createReactiveObject(target, baseHandlers, proxyMap) {
    // 1. 缓存检查：避免重复代理
    const existingProxy = proxyMap.get(target)
    if(existingProxy) {
        return existingProxy
    }

    // 2. 创建 Proxy 代理
    const proxy = new Proxy(target, baseHandlers)
    
    // 3. 添加响应式标记
    proxy[ReactiveFlags.IS_REACTIVE] = true
    
    // 4. 缓存代理对象
    proxyMap.set(target, proxy)
    return proxy
}
```

#### 关键特点：
- 使用 **WeakMap** 作为缓存，避免内存泄露
- **单例模式**：同一对象只会被代理一次
- **标记机制**：通过 `__v_isReactive` 标识响应式对象

### 1.4 Proxy Handler 实现

```typescript
export const mutableHandlers: ProxyHandler<object> = {
    get: createGetter(),
    set: createSetter()
}

function createGetter() {
    return function get(target, key, receiver) {
        const res = Reflect.get(target, key, receiver)
        
        // 依赖收集
        track(target, key)
        
        return res
    }
}

function createSetter() {
    return function set(target, key, value, receiver) {
        const result = Reflect.set(target, key, value, receiver)
        
        // 触发依赖
        trigger(target, key, value)
        
        return result
    }
}
```

### 1.5 依赖收集机制 (track)

```typescript
export function track(target: object, key: unknown) {
    if(!activeEffect) return
    
    // 获取 target 对应的 depsMap
    let depsMap = targetMap.get(target)
    if(!depsMap) {
        targetMap.set(target, (depsMap = new Map()))
    }
    
    // 获取 key 对应的 dep
    let dep = depsMap.get(key)
    if(!dep) {
        depsMap.set(key, (dep = createDep()))
    }
    
    // 将当前 activeEffect 添加到依赖集合
    trackEffects(dep)
}
```

### 1.6 依赖触发机制 (trigger)

```typescript
export function trigger(target: object, key?: unknown, newValue?: unknown) {
    const depsMap = targetMap.get(target)
    if (!depsMap) return 
    
    let dep: Dep | undefined = depsMap.get(key)
    if(!dep) return
    
    // 执行所有相关的 effect
    triggerEffects(dep)
}

export function triggerEffects(dep: Dep) {
    const effects = isArray(dep) ? dep : [...dep]
    
    // 先执行计算属性的 effect，再执行普通 effect
    // 避免无限循环
    for(const effect of effects) {
       if(effect.computed) {
        triggerEffect(effect)
       }
    }
    for(const effect of effects) {
       if(!effect.computed) {
        triggerEffect(effect)
       }
    }
}
```

---

## 二、ref 系统实现

### 2.1 ref 实现原理

```typescript
class RefImpl<T> {
    private _value: T
    private _rawValue: T
    public dep?: Dep | undefined
    public readonly __v_isRef = true

    constructor(value: T, public readonly __v_isShallow: boolean) {
        // 复杂对象转换为 reactive
        this._value = __v_isShallow ? value : toReactive(value)
        this._rawValue = value
    }

    get value() {
        // 收集依赖
        trackRefValue(this)
        return this._value
    }

    set value(newVal) {
        if(hasChanged(newVal, this._rawValue)) {
            this._rawValue = newVal
            this._value = toReactive(newVal)
            // 触发依赖
            triggerRefValue(this)
        }
    }
}
```

### 2.2 ref 与 reactive 的关系

- **ref** 用于基本类型数据的响应式包装
- **reactive** 用于复杂对象的响应式代理
- ref 内部对复杂对象调用 `toReactive()` 转换为 reactive

---

## 三、computed 计算属性实现

### 3.1 computed 实现原理

```typescript
export class ComputedRefImpl<T> {
    public dep?: Dep = undefined
    public _dirty = true  // 脏标记：控制缓存
    private _value!: T
    public readonly effect: ReactiveEffect<T>

    constructor(getter) {
        this.effect = new ReactiveEffect(getter, () => {
            // 调度器：当依赖变化时设置脏标记
            if(!this._dirty) {
                this._dirty = true
                triggerRefValue(this)
            }
        })
        this.effect.computed = this
    }

    get value() {
        trackRefValue(this as any)
        
        if(this._dirty) {
            this._dirty = false
            // 重新计算值
            this._value = this.effect.run()!
        }
        return this._value
    }
}
```

### 3.2 缓存机制

- **惰性求值**：只有在需要时才计算
- **脏标记 (_dirty)**：控制何时重新计算
- **调度器模式**：依赖变化时通过调度器设置脏标记

---

## 四、Effect 系统实现

### 4.1 ReactiveEffect 类

```typescript
export class ReactiveEffect<T = any> {
    computed?: ComputedRefImpl<T>

    constructor(
        public fn: () => T, 
        public scheduler: EffectScheduler | null = null
    ) {}

    run() {
        // 设置全局 activeEffect
        activeEffect = this
        // 执行副作用函数，触发依赖收集
        return this.fn()
    }

    stop() {}
}
```

### 4.2 全局 activeEffect

```typescript
export let activeEffect: ReactiveEffect | undefined
```

- **作用**：标识当前正在执行的 effect
- **时机**：在 effect.run() 时设置，依赖收集时使用
- **生命周期**：effect 执行期间有效

---

## 五、编译器系统

### 5.1 编译流程

```typescript
export function baseCompile(template: string, options = {}) {
    // 1. 解析模板为 AST
    const ast = baseParse(template)
    
    // 2. 转换 AST
    transform(ast, extend(options, {
        nodeTransforms: [
            transformElement,
            transformText,
            transformIf
        ]
    }))
    
    // 3. 生成代码
    return generate(ast)
}
```

### 5.2 AST 转换系统

#### 深度优先遍历
```typescript
export function traverseNode(node, context) {
    context.currentNode = node
    const { nodeTransforms } = context
    const exitFns = []
    
    // 进入阶段：收集转换函数
    for(let i = 0; i < nodeTransforms.length; i++) {
        const onExit = nodeTransforms[i](node, context)
        if(onExit) {
            exitFns.push(onExit)
        }
    }
    
    // 递归处理子节点
    traverseChildren(node, context)
    
    // 退出阶段：倒序执行转换函数
    let i = exitFns.length
    while(i--) {
        exitFns[i]()
    }
}
```

---

## 六、运行时系统

### 6.1 虚拟 DOM 与 Patch 算法

```typescript
const patch = (oldVNode, newVNode, container, anchor = null) => {
    if (oldVNode === newVNode) return

    // 类型不同时卸载旧节点
    if (oldVNode && !isSameVNodeType(oldVNode, newVNode)) {
        unmount(oldVNode)
        oldVNode = null
    }

    const { shapeFlag, type } = newVNode
    switch (type) {
        case Text:
            processText(oldVNode, newVNode, container, anchor)
            break
        case Comment:
            processCommentNode(oldVNode, newVNode, container, anchor)
            break
        case Fragment:
            processFragment(oldVNode, newVNode, container, anchor)
            break
        default:
            if (shapeFlag & ShapeFlags.ELEMENT) {
                processElement(oldVNode, newVNode, container, anchor)
            } else if (shapeFlag & ShapeFlags.COMPONENT) {
                processComponent(oldVNode, newVNode, container, anchor)
            }
    }
}
```

### 6.2 渲染器架构

- **跨平台设计**：通过 `RendererOptions` 接口抽象平台相关操作
- **优化策略**：静态提升、内联组件 props 等编译时优化
- **调度系统**：异步更新队列，批量处理更新

---

## 七、核心函数详解

### 7.1 响应式核心函数

#### `reactive(target)`
- **作用**：将对象转换为响应式代理
- **实现**：基于 Proxy + Reflect
- **特点**：深度响应式、缓存机制

#### `ref(value)`
- **作用**：为基本类型创建响应式引用
- **实现**：通过 get/set 访问器属性
- **特点**：`.value` 访问、自动解包

#### `computed(getter)`
- **作用**：创建计算属性
- **实现**：基于 effect + 缓存机制
- **特点**：惰性求值、依赖跟踪

#### `effect(fn, options)`
- **作用**：创建副作用函数
- **实现**：ReactiveEffect 类
- **特点**：自动依赖收集、调度执行

### 7.2 编译相关函数

#### `baseParse(template)`
- **作用**：将模板字符串解析为 AST
- **特点**：递归下降解析器

#### `transform(ast, options)`
- **作用**：转换和优化 AST
- **特点**：插件化转换、深度优先遍历

#### `generate(ast)`
- **作用**：生成渲染函数代码
- **特点**：代码字符串拼接、优化输出

### 7.3 运行时核心函数

#### `h(type, props, children)`
- **作用**：创建虚拟 DOM 节点
- **特点**：参数灵活、类型推断

#### `render(vnode, container)`
- **作用**：将 vnode 渲染到容器
- **特点**：diff 算法、增量更新

---

## 八、设计模式与架构特点

### 8.1 核心设计模式

1. **观察者模式**：响应式系统的依赖收集与通知
2. **代理模式**：Proxy 对象属性访问的拦截
3. **单例模式**：全局 activeEffect、对象缓存
4. **策略模式**：不同节点类型的处理策略
5. **模板方法模式**：编译流程的标准化步骤

### 8.2 架构优势

1. **性能优化**：
   - 编译时优化（静态提升、内联等）
   - 运行时优化（Proxy 劫持、diff 算法）
   - 缓存机制（computed、组件实例等）

2. **可维护性**：
   - 模块化设计
   - 职责分离
   - 类型安全（TypeScript）

3. **扩展性**：
   - 插件化架构
   - 平台无关设计
   - 渐进式框架理念

---

## 九、总结

Vue3 源码体现了现代前端框架的设计精髓：

1. **响应式系统**：基于 Proxy 的精确依赖追踪
2. **编译优化**：编译时静态分析与运行时性能平衡
3. **架构设计**：模块化、可扩展、类型安全
4. **性能表现**：多层次优化策略

这些设计使得 Vue3 在保持易用性的同时，获得了出色的性能表现和开发体验。

---

*本文档基于 Vue3 源码分析整理，涵盖了响应式系统、编译器、运行时等核心模块的实现原理。*