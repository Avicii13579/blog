---
title: 文章列表
pageLayout: page
createTime: 2025/07/01 00:10:46
permalink: /article/zwtzgo6o/
---

# 文章列表

<ArticleDataProvider v-slot="{ categories }">
  <div class="articles-page">
    <div class="sidebar">
      <SidebarFilter :categories="categories" />
    </div>
    <div class="main-content">
      <h2>所有文章</h2>
      <div class="articles-grid">
        <div v-for="category in categories" :key="category.name" class="category-section">
          <h3>{{ category.name }}</h3>
          <div class="articles-list">
            <div v-for="article in category.articles" :key="article.link" class="article-card">
              <h4>
                <a :href="article.link">{{ article.title }}</a>
              </h4>
              <p class="article-description">{{ article.description }}</p>
              <div class="article-meta">
                <span class="article-date">{{ article.date }}</span>
                <div class="article-tags">
                  <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</ArticleDataProvider>

<style scoped>
.articles-page {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.sidebar {
  position: sticky;
  top: 2rem;
  height: fit-content;
}

.main-content h2 {
  margin-bottom: 2rem;
  color: var(--vp-c-text-1);
}

.category-section {
  margin-bottom: 3rem;
}

.category-section h3 {
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--vp-c-brand);
  color: var(--vp-c-text-1);
}

.articles-list {
  display: grid;
  gap: 1rem;
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

.article-card h4 {
  margin: 0 0 0.5rem 0;
}

.article-card h4 a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: 600;
}

.article-card h4 a:hover {
  color: var(--vp-c-brand);
}

.article-description {
  margin: 0.5rem 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.5;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 0.8rem;
}

.article-date {
  color: var(--vp-c-text-3);
}

.article-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.2rem 0.5rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  border-radius: 4px;
  font-size: 0.75rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .articles-page {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
  
  .sidebar {
    position: static;
  }
  
  .article-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

/* 深色模式适配 */
[data-theme="dark"] .article-card {
  background: var(--vp-c-bg-elv);
}

[data-theme="dark"] .article-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
</style> 
title: articles
createTime: 2025/07/01 00:10:46
permalink: /article/qt12bs8t/
---
 