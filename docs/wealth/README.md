---
title: 理财文章
pageLayout: page
---

<div class="theme-page">
  <div class="sidebar">
    <ThemeFilter 
      theme="wealth" 
      @update:filteredArticles="handleFilteredArticles"
    />
  </div>
  <div class="main-content">
    <h1>理财文章</h1>
    <p>这里收录了所有与理财投资相关的文章，包括投资基础、被动收入、财务规划等内容。</p>
    <div class="filtered-articles">
      <ArticleList 
        theme="wealth" 
        :articles="filteredArticles"
      />
    </div>
  </div>
</div>

<script setup>
import { ref } from 'vue'

// 存储筛选后的文章数据
const filteredArticles = ref([])

// 处理筛选结果
const handleFilteredArticles = (articles) => {
  filteredArticles.value = articles
}
</script>

<style scoped>
.theme-page {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  max-width: calc(1440px - 64px);
  overflow: hidden;
  width: 100%;
  margin: 2rem auto;
  padding: 0 1rem;
  box-sizing:border-box;
}
.filtered-articles {
  margin-top: 1rem;
}

.sidebar {
  position: sticky;
  top: 2rem;
  /* max-height: calc(100vh - 64px - 4rem); 
  overflow-y: auto; */
}

.main-content {
  padding-right: 2rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .theme-page {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }
  
  .sidebar {
    position: static;
  }
  
  .main-content {
    padding-right: 0;
  }
}
</style>
