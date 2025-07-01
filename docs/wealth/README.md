---
title: 理财文章
pageLayout: page
---

<div class="theme-page">
  <div class="sidebar">
    <ThemeFilter theme="wealth" />
  </div>
  <div class="main-content">
    <h1>理财文章</h1>
    <p>这里收录了所有与理财投资相关的文章，包括投资基础、被动收入、财务规划等内容。</p>
    <h2>投资领域</h2>
    <ul>
      <li><strong>股票投资</strong>: 价值投资、成长投资、技术分析</li>
      <li><strong>基金投资</strong>: 指数基金、主动基金、ETF</li>
      <li><strong>债券投资</strong>: 国债、企业债、可转债</li>
      <li><strong>房地产</strong>: 房产投资、REITs</li>
      <li><strong>数字货币</strong>: 比特币、以太坊、DeFi</li>
      <li><strong>其他</strong>: 黄金、外汇、期货</li>
    </ul>
    <h2>理财原则</h2>
    <ul>
      <li>分散投资，降低风险</li>
      <li>长期投资，复利效应</li>
      <li>定期定额，平滑成本</li>
      <li>持续学习，提升认知</li>
      <li>控制情绪，理性决策</li>
    </ul>

    <p><em>投资有风险，入市需谨慎！</em></p>
  </div>
</div>

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

持续更新中，欢迎关注！