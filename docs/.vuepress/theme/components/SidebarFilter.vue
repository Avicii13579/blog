<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vuepress/client'

interface Article {
  title: string
  link: string
  tags: string[]
  categories: string[]
}

interface Category {
  name: string
  articles: Article[]
}

const props = defineProps<{
  categories: Category[]
}>()

const route = useRoute()
const router = useRouter()

// 选中的标签和分类
const selectedTags = ref<string[]>([])
const selectedCategories = ref<string[]>([])

// 获取所有可用的标签和分类
const allTags = computed(() => {
  const tags = new Set<string>()
  props.categories.forEach(category => {
    category.articles.forEach(article => {
      article.tags?.forEach(tag => tags.add(tag))
    })
  })
  return Array.from(tags).sort()
})

const allCategories = computed(() => {
  const categories = new Set<string>()
  props.categories.forEach(category => {
    category.articles.forEach(article => {
      article.categories?.forEach(cat => categories.add(cat))
    })
  })
  return Array.from(categories).sort()
})

// 根据筛选条件过滤文章
const filteredArticles = computed(() => {
  let articles: Article[] = []
  
  props.categories.forEach(category => {
    articles = articles.concat(category.articles)
  })
  
  if (selectedTags.value.length > 0) {
    articles = articles.filter(article => 
      article.tags?.some(tag => selectedTags.value.includes(tag))
    )
  }
  
  if (selectedCategories.value.length > 0) {
    articles = articles.filter(article => 
      article.categories?.some(cat => selectedCategories.value.includes(cat))
    )
  }
  
  return articles
})

// 切换标签选择
const toggleTag = (tag: string) => {
  const index = selectedTags.value.indexOf(tag)
  if (index > -1) {
    selectedTags.value.splice(index, 1)
  } else {
    selectedTags.value.push(tag)
  }
}

// 切换分类选择
const toggleCategory = (category: string) => {
  const index = selectedCategories.value.indexOf(category)
  if (index > -1) {
    selectedCategories.value.splice(index, 1)
  } else {
    selectedCategories.value.push(category)
  }
}

// 清除所有筛选
const clearFilters = () => {
  selectedTags.value = []
  selectedCategories.value = []
}

// 获取标签的文章数量
const getTagCount = (tag: string) => {
  let count = 0
  props.categories.forEach(category => {
    category.articles.forEach(article => {
      if (article.tags?.includes(tag)) {
        count++
      }
    })
  })
  return count
}

// 获取分类的文章数量
const getCategoryCount = (category: string) => {
  let count = 0
  props.categories.forEach(cat => {
    cat.articles.forEach(article => {
      if (article.categories?.includes(category)) {
        count++
      }
    })
  })
  return count
}
</script>

<template>
  <div class="sidebar-filter">
    <!-- 筛选标题 -->
    <div class="filter-header">
      <h3>文章筛选</h3>
      <button 
        v-if="selectedTags.length > 0 || selectedCategories.length > 0"
        @click="clearFilters"
        class="clear-btn"
      >
        清除筛选
      </button>
    </div>

    <!-- 标签筛选 -->
    <div class="filter-section">
      <h4>标签</h4>
      <div class="filter-items">
        <label 
          v-for="tag in allTags" 
          :key="tag"
          class="filter-item"
        >
          <input
            type="checkbox"
            :checked="selectedTags.includes(tag)"
            @change="toggleTag(tag)"
          />
          <span class="filter-text">{{ tag }}</span>
          <span class="filter-count">({{ getTagCount(tag) }})</span>
        </label>
      </div>
    </div>

    <!-- 分类筛选 -->
    <div class="filter-section">
      <h4>分类</h4>
      <div class="filter-items">
        <label 
          v-for="category in allCategories" 
          :key="category"
          class="filter-item"
        >
          <input
            type="checkbox"
            :checked="selectedCategories.includes(category)"
            @change="toggleCategory(category)"
          />
          <span class="filter-text">{{ category }}</span>
          <span class="filter-count">({{ getCategoryCount(category) }})</span>
        </label>
      </div>
    </div>

    <!-- 筛选结果 -->
    <div class="filter-results">
      <h4>筛选结果 ({{ filteredArticles.length }})</h4>
      <div class="article-list">
        <a
          v-for="article in filteredArticles"
          :key="article.link"
          :href="article.link"
          class="article-item"
        >
          {{ article.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar-filter {
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  margin-bottom: 1rem;
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.filter-header h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.clear-btn {
  background: var(--vp-c-brand);
  color: white;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.clear-btn:hover {
  background: var(--vp-c-brand-dark);
}

.filter-section {
  margin-bottom: 1.5rem;
}

.filter-section h4 {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
}

.filter-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.85rem;
  padding: 0.25rem 0;
}

.filter-item input[type="checkbox"] {
  margin: 0;
}

.filter-text {
  flex: 1;
  color: var(--vp-c-text-1);
}

.filter-count {
  color: var(--vp-c-text-3);
  font-size: 0.8rem;
}

.filter-results {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 1rem;
}

.filter-results h4 {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.article-item {
  display: block;
  padding: 0.5rem;
  background: var(--vp-c-bg);
  border-radius: 4px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  font-size: 0.85rem;
  transition: all 0.2s;
}

.article-item:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  transform: translateX(2px);
}

/* 深色模式适配 */
[data-theme="dark"] .sidebar-filter {
  background: var(--vp-c-bg-elv);
}

[data-theme="dark"] .article-item {
  background: var(--vp-c-bg-soft);
}

[data-theme="dark"] .article-item:hover {
  background: var(--vp-c-brand-soft);
}
</style> 