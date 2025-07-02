---
title: 在 VuePress 集成 Giscus 评论系统
date: 2024-06-10
description: 详细介绍如何在 VuePress 博客中安装和配置 Giscus 评论模块，提升用户互动体验。
tags:
  - Vue3
  - Giscus
  - VuePress
  - technology
categories:
  - 前端开发
createTime: 2025/06/30 23:35:33
permalink: /technology/vuepress-giscus-comment/
---

# 在 VuePress 集成 Giscus 评论系统

Giscus 是一个基于 GitHub Discussions 的免费评论系统，适合静态博客。本文将详细介绍如何在 VuePress 博客中集成 Giscus，实现文章评论功能。

## 一、准备工作

1. 拥有一个 GitHub 账号和仓库（用于存储评论数据）。
2. 已搭建好 VuePress 博客项目。

## 二、Giscus 配置与代码生成

1. 访问 [Giscus 官网](https://giscus.app/)，用 GitHub 登录。
2. 选择你的评论仓库，授权 Giscus。
3. 设置 Discussion 分类（建议新建一个 category）。
4. 配置参数（如 mapping 选择 pathname，language 选择 zh-CN）。
5. 生成一段 `<script ...></script>` 代码。

## 三、在 VuePress 中集成 Giscus

### 1. 插入 Giscus 代码

有两种常见方式：

#### 方式一：全局集成（推荐）

1. 打开或新建 `.vuepress/components/Giscus.vue` 文件，内容如下：

```vue
<template>
  <div class="giscus-wrapper">
    <script src="https://giscus.app/client.js"
      data-repo="你的用户名/你的仓库"
      data-repo-id="仓库ID"
      data-category="评论"
      data-category-id="分类ID"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="bottom"
      data-theme="light"
      data-lang="zh-CN"
      crossorigin="anonymous"
      async>
    </script>
    <noscript>请开启 JavaScript 以查看评论</noscript>
  </div>
</template>
```

2. 在 `.vuepress/theme/Layout.vue` 的合适位置（如 `<Content />` 下方）引入并插入：

```vue
<Giscus />
```

#### 方式二：单页集成

在需要评论的 Markdown 文件末尾添加：

```
<Giscus />
```

> 注意：需在 `.vuepress/config.js` 中配置 `components` 目录自动注册。

### 2. 依赖与配置

无需额外依赖，Giscus 通过 script 标签自动加载。

## 四、常见问题

- **评论区未显示？**
  - 检查仓库、category、ID 等参数是否正确。
  - 仓库需开启 Discussions 功能。
  - 需科学上网访问 GitHub。
- **样式冲突？**
  - 可自定义 `.giscus-wrapper` 样式。

## 五、代码注释与 Commit Message 示例

- JSDoc 注释：
  ```js
  /**
   * Giscus 评论组件
   * @component
   */
  export default {
    // ...
  }
  ```

- Commit message 示例：
  ```
  feat: 在 VuePress 集成 Giscus 评论系统，支持文章评论
  ```

---

通过以上步骤，即可在 VuePress 博客中集成 Giscus，实现高效、现代的评论功能。如有问题欢迎留言交流！ 