<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { getArticlesByTheme, Article } from './common/articleData'

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
 * 根据路径获取文章信息
 * @param path 路径
 * @returns 文章对象或 undefined
 */
const getArticleByPath = (path: string): Article | undefined => {
  // 统一去除路径前缀，保证匹配
  const themes = ['technology', 'wealth', 'jottings']
  for (const theme of themes) {
    const articles = getArticlesByTheme(theme)
    // 兼容 /blog/xxx/ 和 /xxx/ 两种路径
    const found = articles.find(
      a => a.link === path || a.link.replace('/blog', '') === path
    )
    if (found) return found
  }
  return undefined
}

/**
 * 根据路径获取文章标题
 * @param path 路径
 * @returns 文章标题
 */
const getArticleTitle = (path: string): string => {
  const article = getArticleByPath(path)
  return article?.title || '文章详情'
}

/**
 * 导航到指定路径
 */
const navigateTo = (path: string) => {
  router.push(path)
}

/**
 * 获取相关文章
 * @returns 相关文章数组
 */
const relatedArticles = computed((): Article[] => {
  const path = route.path
  let theme = ''
  if (path.startsWith('/technology/')) theme = 'technology'
  else if (path.startsWith('/wealth/')) theme = 'wealth'
  else if (path.startsWith('/jottings/')) theme = 'jottings'
  if (!theme) return []
  // 过滤掉当前文章
  return getArticlesByTheme(theme).filter(
    article => article.link.replace('/blog', '') !== path
  )
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
            <a :href="article.link.replace('/blog', '')" @click.prevent="navigateTo(article.link.replace('/blog', ''))">
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