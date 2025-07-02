<script setup lang="ts">
import { ref, computed } from 'vue'
import { getArticlesByTheme, Article } from './common/articleData'

interface Props {
  theme: 'technology' | 'wealth' | 'jottings'
  articles?: Article[]
}

const props = withDefaults(defineProps<Props>(), {
  articles: undefined
})

// 使用计算属性来决定显示的文章：优先使用外部传入的数据，否则使用默认数据
const articles = computed(() => {
  return props.articles || getArticlesByTheme(props.theme)
})

// 获取主题名称
// const getThemeName = (theme: string) => {
//   const themeNames = {
//     technology: '技术文章',
//     wealth: '理财文章',
//     jottings: '随笔文章'
//   }
//   return themeNames[theme as keyof typeof themeNames] || theme
// }
</script>

<template>
  <div class="article-list">
    <!-- <h3>{{ getThemeName(props.theme) }}列表</h3> -->
    <h2>文章列表</h2>

    <div class="articles-container" v-if="articles.length > 0">
      <a 
        class="article-item" 
        v-for="article in articles" 
        :key="article.link"
        :href="article.link"
        target="_blank"
        rel="noopener noreferrer"
        tabindex="0"
        aria-label="查看文章：{{ article.title }}"
      >
        <h4>{{ article.title }}</h4>
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
      </a>
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
  display: block;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.2s;
  text-decoration: none;
  color: var(--vp-c-text-1);
  cursor: pointer;
}

.article-item:hover, .article-item:focus {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
  background: var(--vp-c-bg);
  outline: none;
  
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

.article-item:hover  h4 , .article-item:focus h4  {
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