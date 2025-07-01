<script setup lang="ts">
import { ref, computed } from 'vue'

interface Article {
  title: string
  link: string
  tags: string[]
  categories: string[]
  date?: string
  description?: string
}

interface Props {
  currentPath?: string
  maxItems?: number
}

const props = withDefaults(defineProps<Props>(), {
  currentPath: '',
  maxItems: 5
})

// 根据当前路径获取文章数据
const getArticlesByPath = (path: string): Article[] => {
  const articlesMap = {
    technology: [
      {
        title: 'VuePress 入门指南',
        link: '/blog/technology/getting-started/',
        tags: ['VuePress', '教程', 'technology'],
        categories: ['前端开发'],
        date: '2024-01-15',
        description: '学习如何使用 VuePress 搭建个人博客和文档网站'
      },
      {
        title: 'Vue3 开发技巧总结',
        link: '/blog/technology/vue3-tips/',
        tags: ['Vue3', '前端', '技巧', 'technology'],
        categories: ['前端开发'],
        date: '2024-01-20',
        description: '分享一些 Vue3 开发中的实用技巧和最佳实践'
      },
      {
        title: 'CSS Grid 布局完全指南',
        link: '/blog/technology/css-grid-layout/',
        tags: ['CSS', 'Grid', '布局', 'technology'],
        categories: ['前端开发'],
        date: '2024-01-25',
        description: '深入理解 CSS Grid 布局系统，掌握现代网页布局技术'
      }
    ],
    wealth: [
      {
        title: '投资基础知识',
        link: '/blog/wealth/investment-basics/',
        tags: ['投资', '基础', 'wealth'],
        categories: ['投资理财'],
        date: '2024-01-10',
        description: '从零开始学习投资理财，建立正确的投资观念'
      },
      {
        title: '被动收入构建指南',
        link: '/blog/wealth/passive-income/',
        tags: ['被动收入', '财务自由', 'wealth'],
        categories: ['被动收入'],
        date: '2024-01-18',
        description: '学习如何构建多元化的被动收入来源，实现财务自由'
      }
    ],
    jottings: [
      {
        title: '日常反思：记录生活的点滴感悟',
        link: '/blog/jottings/daily-reflection/',
        tags: ['反思', '效率', 'jottings'],
        categories: ['生活感悟'],
        date: '2024-01-12',
        description: '分享一些关于时间管理和工作效率的个人思考和实践经验'
      }
    ]
  }
  
  if (path.includes('/technology/')) {
    return articlesMap.technology
  } else if (path.includes('/wealth/')) {
    return articlesMap.wealth
  } else if (path.includes('/jottings/')) {
    return articlesMap.jottings
  }
  
  return []
}

const articles = ref<Article[]>(getArticlesByPath(props.currentPath))

// 过滤掉当前文章，并限制显示数量
const filteredArticles = computed(() => {
  return articles.value
    .filter(article => article.link !== props.currentPath)
    .slice(0, props.maxItems)
})

// 获取分类名称
const getCategoryName = (path: string) => {
  if (path.includes('/technology/')) {
    return '技术文章'
  } else if (path.includes('/wealth/')) {
    return '理财文章'
  } else if (path.includes('/jottings/')) {
    return '随笔文章'
  }
  return '相关文章'
}
</script>

<template>
  <div class="article-list-inline" v-if="filteredArticles.length > 0">
    <h3 class="list-title">{{ getCategoryName(props.currentPath) }}</h3>
    <div class="articles-grid">
      <div 
        class="article-card" 
        v-for="article in filteredArticles" 
        :key="article.link"
      >
        <h4 class="article-title">
          <a :href="article.link">{{ article.title }}</a>
        </h4>
        <p class="article-desc">{{ article.description }}</p>
        <div class="article-meta">
          <span class="date">{{ article.date }}</span>
          <div class="tags">
            <span 
              class="tag" 
              v-for="tag in article.tags.slice(0, 2)" 
              :key="tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-list-inline {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.list-title {
  margin: 0 0 1.5rem 0;
  color: var(--vp-c-text-1);
  font-size: 1.2rem;
  font-weight: 600;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.article-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.2s ease;
}

.article-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
}

.article-title {
  margin: 0 0 0.8rem 0;
  font-size: 1.1rem;
  line-height: 1.4;
}

.article-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: 600;
}

.article-title a:hover {
  color: var(--vp-c-brand);
}

.article-desc {
  margin: 0.8rem 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  font-size: 0.9rem;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 0.8rem;
}

.date {
  color: var(--vp-c-text-3);
}

.tags {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.2rem 0.5rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  border-radius: 4px;
  font-size: 0.75rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .article-card {
    padding: 1rem;
  }
  
  .article-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

/* 深色模式适配 */
[data-theme="dark"] .article-card {
  background: var(--vp-c-bg-elv);
}

[data-theme="dark"] .article-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
</style> 