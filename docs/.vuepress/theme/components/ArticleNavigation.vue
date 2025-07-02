<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted, computed } from 'vue'

interface Props {
  showBreadcrumb?: boolean
  showRelatedArticles?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showBreadcrumb: true,
  showRelatedArticles: true
})

const router = useRouter()
const route = useRoute()
const canGoBack = ref(false)

onMounted(() => {
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
    '/technology/vuepress-giscus-comment/': '在 VuePress 集成 Giscus 评论系统',
    '/wealth/investment-basics/': '投资基础知识',
    '/wealth/passive-income/': '被动收入构建指南',
    '/jottings/daily-reflection/': '日常反思：如何提升工作效率'
  }
  
  return titleMap[path] || '文章详情'
}

/**
 * 获取返回路径
 */
const getBackPath = computed(() => {
  const path = route.path
  
  if (path.startsWith('/technology/')) {
    return '/technology/'
  } else if (path.startsWith('/wealth/')) {
    return '/wealth/'
  } else if (path.startsWith('/jottings/')) {
    return '/jottings/'
  }
  
  return '/'
})

/**
 * 获取返回按钮文本
 */
const getBackText = computed(() => {
  const path = route.path
  
  if (path.startsWith('/technology/')) {
    return '返回技术文章'
  } else if (path.startsWith('/wealth/')) {
    return '返回理财文章'
  } else if (path.startsWith('/jottings/')) {
    return '返回随笔文章'
  }
  
  return '返回首页'
})

/**
 * 返回上一页或指定路径
 */
const goBack = () => {
  if (canGoBack.value) {
    router.back()
  } else {
    router.push(getBackPath.value)
  }
}

/**
 * 导航到指定路径
 */
const navigateTo = (path: string) => {
  router.push(path)
}

/**
 * 相关文章类型定义
 */
interface RelatedArticle {
  title: string
  link: string
  description: string
}

/**
 * 获取相关文章
 */
const relatedArticles = computed((): RelatedArticle[] => {
  const path = route.path
  const articlesMap: Record<string, RelatedArticle[]> = {
    technology: [
      {
        title: 'Vue3 开发技巧总结',
        link: '/technology/vue3-tips/',
        description: '分享一些 Vue3 开发中的实用技巧和最佳实践'
      },
      {
        title: 'CSS Grid 布局完全指南',
        link: '/technology/css-grid-layout/',
        description: '深入理解 CSS Grid 布局系统，掌握现代网页布局技术'
      }
    ],
    wealth: [
      {
        title: '被动收入构建指南',
        link: '/wealth/passive-income/',
        description: '学习如何构建多元化的被动收入来源，实现财务自由'
      }
    ],
    jottings: []
  }
  
  if (path.startsWith('/technology/')) {
    return articlesMap.technology.filter(article => article.link !== path)
  } else if (path.startsWith('/wealth/')) {
    return articlesMap.wealth.filter(article => article.link !== path)
  } else if (path.startsWith('/jottings/')) {
    return articlesMap.jottings.filter(article => article.link !== path)
  }
  
  return []
})
</script>

<template>
  <div class="article-navigation">
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


    <!-- 相关文章推荐 -->
    <div v-if="showRelatedArticles && relatedArticles.length > 0" class="related-articles">
      <h3 class="related-title">相关文章</h3>
      <div class="related-list">
        <div 
          v-for="article in relatedArticles" 
          :key="article.link"
          class="related-item"
        >
          <h4 class="related-item-title">
            <a :href="article.link" @click.prevent="navigateTo(article.link)">
              {{ article.title }}
            </a>
          </h4>
          <p class="related-item-desc">{{ article.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-navigation {
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
  margin-top: 0rem;
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
  text-decoration: underline;
}

.breadcrumb-current {
  color: var(--vp-c-text-2);
  font-weight: 500;
}

/* 返回按钮样式 */
.back-button-container {
  margin: 1rem 0;
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

/* 相关文章样式 */
.related-articles {
  margin-top: 2rem;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.related-title {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
  font-weight: 600;
}

.related-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.related-item {
  padding: 1rem;
  background: var(--vp-c-bg-elv);
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.2s ease;
}

.related-item:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.related-item-title {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
}

.related-item-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: 600;
}

.related-item-title a:hover {
  color: var(--vp-c-brand);
}

.related-item-desc {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.5;
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
  
  .related-articles {
    padding: 1rem;
  }
  
  .related-item {
    padding: 0.8rem;
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

[data-theme="dark"] .related-articles {
  background: var(--vp-c-bg-elv);
}

[data-theme="dark"] .related-item {
  background: var(--vp-c-bg-soft);
}
</style> 