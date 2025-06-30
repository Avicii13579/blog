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
    <h2>技术栈</h2>
    <ul>
      <li><strong>前端框架</strong>: Vue.js, React, Angular</li>
      <li><strong>构建工具</strong>: Vite, Webpack, Rollup</li>
      <li><strong>样式方案</strong>: CSS3, Sass, Tailwind CSS</li>
      <li><strong>后端技术</strong>: Node.js, Express, Koa</li>
      <li><strong>数据库</strong>: MongoDB, MySQL, Redis</li>
      <li><strong>其他</strong>: TypeScript, Git, Docker</li>
    </ul>
    <p><em>持续更新中，欢迎关注！</em></p>
  </div>
</div>

<style scoped>
.theme-page {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
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