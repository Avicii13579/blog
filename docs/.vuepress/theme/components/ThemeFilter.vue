<script setup lang="ts">
import { ref, computed, watch } from 'vue'

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
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:filteredArticles': [articles: Article[]]
}>()

// 根据主题获取文章数据
const getArticlesByTheme = (theme: string): Article[] => {
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
        title: '日常反思：如何提升工作效率',
        link: '/blog/jottings/daily-reflection/',
        tags: ['反思', '效率', 'jottings'],
        categories: ['生活感悟'],
        date: '2024-01-12',
        description: '分享一些关于时间管理和工作效率的个人思考和实践经验'
      }
    ]
  }
  
  return articlesMap[theme as keyof typeof articlesMap] || []
}

const articles = ref<Article[]>(getArticlesByTheme(props.theme))

// 获取所有唯一标签
const allTags = computed(() => {
  const tags = new Set<string>()
  articles.value.forEach(article => {
    article.tags.forEach(tag => {
      if (tag !== props.theme) { // 排除主题标签
        tags.add(tag)
      }
    })
  })
  return Array.from(tags).sort()
})

// 获取所有唯一分类
const allCategories = computed(() => {
  const categories = new Set<string>()
  articles.value.forEach(article => {
    article.categories.forEach(category => {
      categories.add(category)
    })
  })
  return Array.from(categories).sort()
})

// 选中的标签和分类
const selectedTags = ref<string[]>([])
const selectedCategories = ref<string[]>([])

// 筛选后的文章
const filteredArticles = computed(() => {
  let filtered = articles.value

  // 按标签筛选
  if (selectedTags.value.length > 0) {
    filtered = filtered.filter(article => 
      article.tags.some(tag => selectedTags.value.includes(tag))
    )
  }

  // 按分类筛选
  if (selectedCategories.value.length > 0) {
    filtered = filtered.filter(article => 
      article.categories.some(category => selectedCategories.value.includes(category))
    )
  }

  return filtered
})

// 清除筛选
const clearFilters = () => {
  selectedTags.value = []
  selectedCategories.value = []
}

// 获取主题名称
const getThemeName = (theme: string) => {
  const themeNames = {
    technology: '技术文章',
    wealth: '理财文章',
    jottings: '随笔文章'
  }
  return themeNames[theme as keyof typeof themeNames] || theme
}

// 监听筛选结果变化并发射事件
watch(filteredArticles, (newArticles) => {
  emit('update:filteredArticles', newArticles)
}, { immediate: true })
</script>

<template>
  <div class="theme-filter">
    <!-- 筛选区域 -->
    <div class="filter-section">
      <h3>{{ getThemeName(props.theme) }}筛选</h3>
      
      <!-- 分类筛选 -->
      <div class="filter-group" v-if="allCategories.length > 0">
        <h4>按分类筛选</h4>
        <div class="checkbox-group">
          <label 
            class="checkbox-item" 
            v-for="category in allCategories" 
            :key="category"
          >
            <input 
              type="checkbox" 
              :value="category" 
              v-model="selectedCategories"
            >
            <span class="checkbox-label">{{ category }}</span>
          </label>
        </div>
      </div>

      <!-- 标签筛选 -->
      <div class="filter-group" v-if="allTags.length > 0">
        <h4>按标签筛选</h4>
        <div class="checkbox-group">
          <label 
            class="checkbox-item" 
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
      </div>

      <!-- 操作按钮 -->
      <div class="filter-actions">
        <button @click="clearFilters" class="clear-btn">清除筛选</button>
        <span class="result-count">找到 {{ filteredArticles.length }} 篇</span>
      </div>
    </div>


  </div>
</template>

<style scoped>
.theme-filter {
  width: 100%;
}

/* 筛选区域样式 */
.filter-section {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid var(--vp-c-divider);
}

.filter-section h3 {
  margin: 0 0 1.5rem 0;
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
}

.filter-group {
  margin-bottom: 1.5rem;
}

.filter-group h4 {
  margin: 0 0 0.8rem 0;
  color: var(--vp-c-text-1);
  font-size: 0.95rem;
  font-weight: 600;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.checkbox-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.checkbox-item input[type="checkbox"] {
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
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background-color 0.2s;
}

.clear-btn:hover {
  background: var(--vp-c-brand-dark);
}

.result-count {
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
}



/* 响应式设计 */
@media (max-width: 768px) {
  .filter-actions {
    flex-direction: column;
    gap: 0.8rem;
    align-items: flex-start;
  }
}

/* 深色模式适配 */
[data-theme="dark"] .filter-section {
  background: var(--vp-c-bg-elv);
}
</style> 