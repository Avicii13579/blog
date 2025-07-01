---
title: CSS Grid 布局完全指南
date: 2024-01-25T00:00:00.000Z
tags:
  - CSS
  - Grid
  - 布局
  - technology
categories:
  - 前端开发
description: 深入理解 CSS Grid 布局系统，掌握现代网页布局技术
createTime: 2025/06/30 23:37:18
permalink: /technology/css-grid-layout/
---

<ArticleNavigation 
  :showBreadcrumb="true"
  :showRelatedArticles="false"
/>

# CSS Grid 布局完全指南

CSS Grid 是一个强大的二维布局系统，它彻底改变了我们构建网页布局的方式。本文将深入介绍 Grid 布局的核心概念和实用技巧。

## 1. Grid 基础概念

### 容器和项目

```css
/* 容器 */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
  gap: 20px;
}

/* 项目 */
.grid-item {
  background: #f0f0f0;
  padding: 20px;
}
```

### 网格线 (Grid Lines)

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 200px 100px;
  grid-template-rows: 100px 200px;
}

/* 使用网格线定位 */
.item {
  grid-column: 1 / 3; /* 从第1条线到第3条线 */
  grid-row: 1 / 2;    /* 从第1条线到第2条线 */
}
```

## 2. 网格模板

### grid-template-columns

```css
.grid {
  display: grid;
  
  /* 固定宽度 */
  grid-template-columns: 200px 200px 200px;
  
  /* 百分比 */
  grid-template-columns: 33.33% 33.33% 33.33%;
  
  /* 分数单位 */
  grid-template-columns: 1fr 1fr 1fr;
  
  /* 混合使用 */
  grid-template-columns: 200px 1fr 2fr;
  
  /* 重复函数 */
  grid-template-columns: repeat(3, 1fr);
  
  /* 自动适应 */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

### grid-template-rows

```css
.grid {
  display: grid;
  grid-template-rows: 100px 200px 100px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-rows: minmax(100px, auto);
}
```

## 3. 网格区域 (Grid Areas)

```css
.grid-container {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 80px 1fr 60px;
}

.header {
  grid-area: header;
  background: #333;
  color: white;
}

.sidebar {
  grid-area: sidebar;
  background: #f0f0f0;
}

.main {
  grid-area: main;
  background: white;
}

.footer {
  grid-area: footer;
  background: #333;
  color: white;
}
```

## 4. 响应式布局

### 使用 auto-fit 和 minmax

```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### 媒体查询结合

```css
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## 5. 实用布局示例

### 圣杯布局

```css
.holy-grail {
  display: grid;
  grid-template-areas: 
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 60px 1fr 60px;
  min-height: 100vh;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
```

### 瀑布流布局

```css
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 0;
  grid-auto-flow: dense;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 20px;
}

.masonry-item:nth-child(3n) {
  grid-row: span 2;
}
```

## 6. 对齐和分布

### 容器对齐

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  
  /* 水平对齐 */
  justify-content: center; /* start | end | center | stretch | space-around | space-between | space-evenly */
  
  /* 垂直对齐 */
  align-content: center; /* start | end | center | stretch | space-around | space-between | space-evenly */
  
  /* 简写 */
  place-content: center;
}
```

### 项目对齐

```css
.grid-item {
  /* 水平对齐 */
  justify-self: center; /* start | end | center | stretch */
  
  /* 垂直对齐 */
  align-self: center; /* start | end | center | stretch */
  
  /* 简写 */
  place-self: center;
}
```

## 7. 浏览器支持

CSS Grid 现在得到了所有现代浏览器的支持：

- Chrome 57+
- Firefox 52+
- Safari 10.1+
- Edge 16+

## 总结

CSS Grid 是一个强大而灵活的布局系统，特别适合构建复杂的二维布局。通过掌握 Grid 的核心概念和实用技巧，你可以创建出响应式、可维护的现代网页布局。

记住，Grid 和 Flexbox 是互补的：Grid 适合二维布局，Flexbox 适合一维布局。在实际项目中，经常需要结合使用这两种布局方式。 