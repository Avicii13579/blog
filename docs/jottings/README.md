---
title: 随笔文章
pageLayout: page
---

<div class="theme-page">
  <div class="sidebar">
    <ThemeFilter 
      theme="jottings" 
      @update:filteredArticles="handleFilteredArticles"
    />
  </div>
  <div class="main-content">
    <h1>随笔文章</h1>
    <p>这里收录了日常的思考、感悟和随笔，包括生活感悟、读书笔记、个人反思等内容。</p>
    <div class="filtered-articles">
      <ArticleList 
        theme="jottings" 
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
  width: 100%;
  margin: 2rem auto;
  padding: 0 1rem;
}

.sidebar {
  position: sticky;
  top: 2rem;
  height: fit-content;
}

.main-content {
  padding-right: 2rem;
}

.filtered-articles {
  margin-top: 1rem;
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