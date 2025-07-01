---
title: 技术文章
pageLayout: page
---

<div class="theme-page">
  <div class="sidebar">
    <ThemeFilter theme="technology" />
  </div>
  <div class="main-content">
    <h1>技术文章</h1>
    <p>这里收录了所有与技术相关的文章，包括前端开发、后端技术、工具使用等内容。</p>
    <div class="filtered-articles">
      <ArticleList theme="technology" />
    </div>
  </div>
</div>

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
.filtered-articles {
  margin-top: 1rem;
}

.sidebar {
  position: sticky;
  top: 2rem;
  height: fit-content;
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