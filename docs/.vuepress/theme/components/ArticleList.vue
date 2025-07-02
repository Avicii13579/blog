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
  theme: 'technology' | 'wealth' | 'jottings'
  articles?: Article[]
}

const props = withDefaults(defineProps<Props>(), {
  articles: undefined
})

// 根据主题获取文章数据
const getArticlesByTheme = (theme: string): Article[] => {
  const articlesMap = {
    technology: [
      {
        title: 'VuePress 入门指南',
        link: '/technology/getting-started/',
        tags: ['VuePress', '教程', 'technology'],
        categories: ['工具使用', '前端开发'],
        date: '2024-01-15',
        description: '学习如何使用 VuePress 搭建个人博客和文档网站'
      },
      {
        title: 'Vue3 开发技巧总结',
        link: '/technology/vue3-tips/',
        tags: ['Vue3', '前端', '技巧', 'technology'],
        categories: ['前端开发', '框架使用'],
        date: '2024-01-20',
        description: '分享一些 Vue3 开发中的实用技巧和最佳实践'
      },
      {
        title: 'CSS Grid 布局完全指南',
        link: '/technology/css-grid-layout/',
        tags: ['CSS', 'Grid', '布局', 'technology'],
        categories: ['前端开发', 'CSS技术'],
        date: '2024-01-25',
        description: '深入理解 CSS Grid 布局系统，掌握现代网页布局技术'
      },
      {
        title: '在 VuePress 集成 Giscus 评论系统',
        link: '/technology/vuepress-giscus-comment/',
        tags: ['VuePress', 'Giscus', '教程', 'technology'],
        categories: ['前端开发'],
        date: '2024-06-10',
        description: '详细介绍如何在 VuePress 博客中安装和配置 Giscus 评论模块，提升用户互动体验。'
      }
    ],
    wealth: [
      {
        title: '投资基础知识',
        link: '/wealth/investment-basics/',
        tags: ['投资', '基础', 'wealth'],
        categories: ['投资理财'],
        date: '2024-01-10',
        description: '从零开始学习投资理财，建立正确的投资观念'
      },
      {
        title: '被动收入构建指南',
        link: '/wealth/passive-income/',
        tags: ['被动收入', '财务自由', 'wealth'],
        categories: ['被动收入'],
        date: '2024-01-18',
        description: '学习如何构建多元化的被动收入来源，实现财务自由'
      }
    ],
    jottings: [
      {
        title: '日常反思：如何提升工作效率',
        link: '/jottings/daily-reflection/',
        tags: ['反思', '效率', 'jottings'],
        categories: ['生活感悟'],
        date: '2024-01-12',
        description: '分享一些关于时间管理和工作效率的个人思考和实践经验'
      }
    ]
  }
  
  return articlesMap[theme as keyof typeof articlesMap] || []
}

// 使用计算属性来决定显示的文章：优先使用外部传入的数据，否则使用默认数据
const articles = computed(() => {
  return props.articles || getArticlesByTheme(props.theme)
})

// 获取主题名称
const getThemeName = (theme: string) => {
  const themeNames = {
    technology: '技术文章',
    wealth: '理财文章',
    jottings: '随笔文章'
  }
  return themeNames[theme as keyof typeof themeNames] || theme
}
</script>

<template>
  <div class="article-list">
    <!-- <h3>{{ getThemeName(props.theme) }}列表</h3> -->
    <h2>文章列表</h2>

    <div class="articles-container" v-if="articles.length > 0">
      <div 
        class="article-item" 
        v-for="article in articles" 
        :key="article.link"
      >
        <h4><a :href="article.link">{{ article.title }}</a></h4>
        <p class="article-desc">{{ article.description }}</p>
        <div class="article-meta">
          <span class="date">{{ article.date }}</span>
          <div class="tags">
            <span 
              class="tag" 
              v-for="tag in article.tags.filter(t => t !== props.theme)" 
              :key="tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="no-results" v-else>
      <p>没有找到符合条件的文章</p>
    </div>
  </div>
</template>

<style scoped>
.article-list {
  width: 100%;
}

.article-list h3 {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
}

.articles-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.article-item {
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.2s;
}

.article-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
}

.article-item h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
}

.article-item h4 a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: 600;
}

.article-item h4 a:hover {
  color: var(--vp-c-brand);
}

.article-desc {
  margin: 0.5rem 0;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  font-size: 0.9rem;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.8rem;
  font-size: 0.8rem;
}

.date {
  color: var(--vp-c-text-3);
}

.tags {
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.1rem 0.4rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  border-radius: 3px;
  font-size: 0.75rem;
}

.no-results {
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .article-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

/* 深色模式适配 */
[data-theme="dark"] .article-item {
  background: var(--vp-c-bg-elv);
}

[data-theme="dark"] .article-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
</style> 