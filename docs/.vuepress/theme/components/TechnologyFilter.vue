<script setup lang="ts">
import { ref, computed } from 'vue'

// 文章数据
const articles = ref([
  {
    title: 'VuePress 入门指南',
    link: '/technology/getting-started/',
    tags: ['VuePress', '教程', 'technology'],
    date: '2024-01-15',
    description: '学习如何使用 VuePress 搭建个人博客和文档网站'
  },
  {
    title: 'Vue3 开发技巧总结',
    link: '/technology/vue3-tips/',
    tags: ['Vue3', '前端', '技巧', 'technology'],
    date: '2024-01-20',
    description: '分享一些 Vue3 开发中的实用技巧和最佳实践'
  },
  {
    title: 'CSS Grid 布局完全指南',
    link: '/technology/css-grid-layout/',
    tags: ['CSS', 'Grid', '布局', 'technology'],
    date: '2024-01-25',
    description: '深入理解 CSS Grid 布局系统，掌握现代网页布局技术'
  }
])

// 获取所有唯一标签
const allTags = computed(() => {
  const tags = new Set<string>()
  articles.value.forEach(article => {
    article.tags.forEach(tag => {
      if (tag !== 'technology') { // 排除主题标签
        tags.add(tag)
      }
    })
  })
  return Array.from(tags).sort()
})

// 选中的标签
const selectedTags = ref<string[]>([])

// 筛选后的文章
const filteredArticles = computed(() => {
  if (selectedTags.value.length === 0) {
    return articles.value
  }
  return articles.value.filter(article => 
    article.tags.some(tag => selectedTags.value.includes(tag))
  )
})

// 清除筛选
const clearFilters = () => {
  selectedTags.value = []
}
</script>

<template>
  <div class="technology-filter">
    <!-- 标签筛选区域 -->
    <div class="filter-section">
      <h3>按标签筛选</h3>
      <div class="tags-filter">
        <label 
          class="tag-checkbox" 
          v-for="tag in allTags" 
          :key="tag"
        >
          <input 
            type="checkbox" 
            :value="tag" 
            v-model="selectedTags"
          >
          <span class="checkbox-label">{{ tag }}</span>
        </label>
      </div>
      <div class="filter-actions">
        <button @click="clearFilters" class="clear-btn">清除筛选</button>
        <span class="result-count">共找到 {{ filteredArticles.length }} 篇文章</span>
      </div>
    </div>

    <!-- 文章列表 -->
    <div class="articles-section">
      <h2>文章列表</h2>
      <div class="articles-list" v-if="filteredArticles.length > 0">
        <div 
          class="article-card" 
          v-for="article in filteredArticles" 
          :key="article.link"
        >
          <h3><a :href="article.link">{{ article.title }}</a></h3>
          <p>{{ article.description }}</p>
          <div class="article-meta">
            <span class="date">{{ article.date }}</span>
            <div class="tags">
              <span 
                class="tag" 
                v-for="tag in article.tags" 
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
  </div>
</template>

<style scoped>
.technology-filter {
  width: 100%;
}

/* 筛选区域样式 */
.filter-section {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  border: 1px solid var(--vp-c-divider);
}

.filter-section h3 {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-1);
}

.tags-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.tag-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.tag-checkbox input[type="checkbox"] {
  margin-right: 0.5rem;
  cursor: pointer;
}

.checkbox-label {
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
}

.filter-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.clear-btn {
  background: var(--vp-c-brand);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;
}

.clear-btn:hover {
  background: var(--vp-c-brand-dark);
}

.result-count {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

/* 文章区域样式 */
.articles-section {
  margin: 2rem 0;
}

.articles-section h2 {
  margin-bottom: 1.5rem;
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.article-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.2s;
}

.article-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
}

.article-card h3 {
  margin: 0 0 0.5rem 0;
}

.article-card h3 a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: 600;
}

.article-card h3 a:hover {
  color: var(--vp-c-brand);
}

.article-card p {
  margin: 0.5rem 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 0.9rem;
}

.date {
  color: var(--vp-c-text-3);
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.2rem 0.5rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  border-radius: 4px;
  font-size: 0.8rem;
}

.no-results {
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-2);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .tags-filter {
    gap: 0.6rem;
  }
  
  .filter-actions {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .article-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

/* 深色模式适配 */
[data-theme="dark"] .article-card,
[data-theme="dark"] .filter-section {
  background: var(--vp-c-bg-elv);
}

[data-theme="dark"] .article-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
</style> 