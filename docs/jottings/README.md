---
title: 随笔文章
pageLayout: page
---

<div class="theme-page">
  <div class="sidebar">
    <ThemeFilter theme="jottings" />
  </div>
  <div class="main-content">
    <h1>随笔文章</h1>
    <p>这里收录了日常的思考、感悟和随笔，包括生活感悟、读书笔记、个人反思等内容。</p>
    <h2>随笔分类</h2>
    <ul>
      <li><strong>生活感悟</strong>: 日常观察、人生思考、情感体验</li>
      <li><strong>读书笔记</strong>: 书籍读后感、知识总结、观点分享</li>
      <li><strong>个人反思</strong>: 自我反省、成长记录、经验总结</li>
      <li><strong>旅行见闻</strong>: 旅行记录、文化体验、风景分享</li>
      <li><strong>兴趣爱好</strong>: 摄影、音乐、运动等个人爱好</li>
      <li><strong>其他</strong>: 杂谈、随想、灵感记录</li>
    </ul>
    <h2>写作理念</h2>
    <ul>
      <li>记录真实感受，保持真诚态度</li>
      <li>深入思考，提炼有价值的内容</li>
      <li>持续输出，培养写作习惯</li>
      <li>分享交流，促进思想碰撞</li>
      <li>保持开放，接受不同观点</li>
    </ul>

    <p><em>生活处处有文章，记录让思考更有价值！</em></p>
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