<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted, computed } from 'vue'

interface Props {
  fallbackPath?: string
  text?: string
  showBreadcrumb?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  fallbackPath: '/',
  text: '返回',
  showBreadcrumb: true
})

const router = useRouter()
const route = useRoute()
const canGoBack = ref(false)

onMounted(() => {
  // 检查浏览器历史记录
  canGoBack.value = window.history.length > 1
})

/**
 * 面包屑项类型定义
 */
interface BreadcrumbItem {
  name: string
  path: string
  isActive: boolean
}

/**
 * 根据当前路径生成面包屑导航
 */
const breadcrumbs = computed((): BreadcrumbItem[] => {
  const path = route.path
  const result: BreadcrumbItem[] = []
  
  // 添加首页
  result.push({
    name: '首页',
    path: '/',
    isActive: false
  })
  
  // 根据路径生成面包屑
  if (path.startsWith('/technology/')) {
    result.push({
      name: '技术文章',
      path: '/technology/',
      isActive: path === '/technology/'
    })
    
    if (path !== '/technology/') {
      // 获取文章标题
      const articleTitle = getArticleTitle(path)
      result.push({
        name: articleTitle,
        path: path,
        isActive: true
      })
    }
  } else if (path.startsWith('/wealth/')) {
    result.push({
      name: '理财文章',
      path: '/wealth/',
      isActive: path === '/wealth/'
    })
    
    if (path !== '/wealth/') {
      const articleTitle = getArticleTitle(path)
      result.push({
        name: articleTitle,
        path: path,
        isActive: true
      })
    }
  } else if (path.startsWith('/jottings/')) {
    result.push({
      name: '随笔文章',
      path: '/jottings/',
      isActive: path === '/jottings/'
    })
    
    if (path !== '/jottings/') {
      const articleTitle = getArticleTitle(path)
      result.push({
        name: articleTitle,
        path: path,
        isActive: true
      })
    }
  }
  
  return result
})

/**
 * 根据路径获取文章标题
 */
const getArticleTitle = (path: string): string => {
  const titleMap: Record<string, string> = {
    '/technology/getting-started/': 'VuePress 入门指南',
    '/technology/vue3-tips/': 'Vue3 开发技巧总结',
    '/technology/css-grid-layout/': 'CSS Grid 布局完全指南',
    '/wealth/investment-basics/': '投资基础知识',
    '/wealth/passive-income/': '被动收入构建指南',
    '/jottings/daily-reflection/': '日常反思：记录生活的点滴感悟'
  }
  
  return titleMap[path] || '文章详情'
}

/**
 * 返回上一页或指定路径
 */
const goBack = () => {
  if (canGoBack.value) {
    router.back()
  } else {
    router.push(props.fallbackPath)
  }
}

/**
 * 导航到指定路径
 */
const navigateTo = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div class="back-navigation">
    <!-- 面包屑导航 -->
    <nav v-if="showBreadcrumb && breadcrumbs.length > 1" class="breadcrumb-nav">
      <ol class="breadcrumb-list">
        <li 
          v-for="(crumb, index) in breadcrumbs" 
          :key="crumb.path"
          class="breadcrumb-item"
        >
          <span v-if="index > 0" class="breadcrumb-separator">/</span>
          <a 
            v-if="!crumb.isActive" 
            :href="crumb.path"
            @click.prevent="navigateTo(crumb.path)"
            class="breadcrumb-link"
          >
            {{ crumb.name }}
          </a>
          <span v-else class="breadcrumb-current">
            {{ crumb.name }}
          </span>
        </li>
      </ol>
    </nav>

    <!-- 返回按钮 -->
    <div class="back-button-container">
      <button @click="goBack" class="back-button" :title="text">
        <svg class="back-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="back-text">{{ text }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.back-navigation {
  margin-bottom: 2rem;
}

/* 面包屑导航样式 */
.breadcrumb-nav {
  margin-bottom: 1rem;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-separator {
  margin: 0 0.5rem;
  color: var(--vp-c-text-3);
  font-weight: 300;
}

.breadcrumb-link {
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb-link:hover {
  color: var(--vp-c-brand-dark);
  text-decoration: underline;
}

.breadcrumb-current {
  color: var(--vp-c-text-2);
  font-weight: 500;
}

/* 返回按钮样式 */
.back-button-container {
  margin-top: 0.5rem;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  user-select: none;
}

.back-button:hover {
  background: var(--vp-c-bg-elv);
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.back-button:active {
  transform: translateY(0);
}

.back-icon {
  width: 1.2rem;
  height: 1.2rem;
  transition: transform 0.2s ease;
}

.back-button:hover .back-icon {
  transform: translateX(-2px);
}

.back-text {
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .breadcrumb-list {
    font-size: 0.85rem;
    flex-wrap: wrap;
  }
  
  .breadcrumb-separator {
    margin: 0 0.3rem;
  }
  
  .back-button {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
  
  .back-icon {
    width: 1rem;
    height: 1rem;
  }
}

/* 深色模式适配 */
[data-theme="dark"] .back-button {
  background: var(--vp-c-bg-elv);
}

[data-theme="dark"] .back-button:hover {
  background: var(--vp-c-bg-soft);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

[data-theme="dark"] .breadcrumb-current {
  color: var(--vp-c-text-1);
}
</style> 