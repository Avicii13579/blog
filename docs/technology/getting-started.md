---
title: VuePress 入门指南
date: 2024-01-15T00:00:00.000Z
tags:
  - VuePress
  - 教程
  - technology
categories:
  - 前端开发
description: 学习如何使用 VuePress 搭建个人博客和文档网站
createTime: 2025/06/30 23:34:35
permalink: /technology/getting-started/
---

# VuePress 入门指南

VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。

## 为什么选择 VuePress？

- **简洁至上**：以 Markdown 为中心的项目结构，以最少的配置专注于写作
- **Vue 驱动**：享受 Vue + webpack 的开发体验，可以在 Markdown 中使用 Vue 组件
- **性能优秀**：VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行

## 快速开始

### 1. 安装

```bash
npm install -g vuepress
```

### 2. 创建项目

```bash
mkdir my-blog
cd my-blog
```

### 3. 初始化

```bash
vuepress dev docs
```

## 目录结构

```
my-blog/
├── docs/
│   ├── .vuepress/
│   │   └── config.js
│   ├── README.md
│   └── guide/
│       └── README.md
└── package.json
```

## 配置

在 `.vuepress/config.js` 中进行配置：

```javascript
module.exports = {
  title: '我的博客',
  description: '个人技术博客',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ]
  }
}
```

## 总结

VuePress 是一个优秀的静态网站生成器，特别适合技术博客和文档网站。通过简单的配置和 Markdown 写作，你就能快速搭建一个专业的网站。

希望这篇指南能帮助你快速上手 VuePress！ 