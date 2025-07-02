/**
 * 自动生成的文章数据
 * @description 由 scripts/generate-article-data.js 自动生成
 */

export interface Article {
  title: string
  link: string
  tags: string[]
  categories: string[]
  date?: string
  description?: string
}

export const getArticlesByTheme = (theme: string): Article[] => {
  const articlesMap: Record<string, Article[]> = {
  "technology": [
    {
      "title": "CSS Grid 布局完全指南",
      "link": "/blog/technology/css-grid-layout/",
      "tags": [
        "CSS",
        "Grid",
        "布局",
        "technology"
      ],
      "categories": [
        "前端开发"
      ],
      "date": "Thu Jan 25",
      "description": "深入理解 CSS Grid 布局系统，掌握现代网页布局技术"
    },
    {
      "title": "VuePress 入门指南",
      "link": "/blog/technology/getting-started/",
      "tags": [
        "VuePress",
        "教程",
        "technology"
      ],
      "categories": [
        "前端开发"
      ],
      "date": "Mon Jan 15",
      "description": "学习如何使用 VuePress 搭建个人博客和文档网站"
    },
    {
      "title": "Vue3 开发技巧总结",
      "link": "/blog/technology/vue3-tips/",
      "tags": [
        "Vue3",
        "前端",
        "技巧",
        "technology"
      ],
      "categories": [
        "前端开发"
      ],
      "date": "Sat Jan 20",
      "description": "分享一些 Vue3 开发中的实用技巧和最佳实践"
    },
    {
      "title": "在 VuePress 集成 Giscus 评论系统",
      "link": "/blog/technology/vuepress-giscus-comment/",
      "tags": [
        "Vue3",
        "Giscus",
        "VuePress",
        "technology"
      ],
      "categories": [
        "前端开发"
      ],
      "date": "Mon Jun 10",
      "description": "详细介绍如何在 VuePress 博客中安装和配置 Giscus 评论模块，提升用户互动体验。"
    }
  ],
  "wealth": [
    {
      "title": "投资基础知识入门",
      "link": "/blog/wealth/investment-basics/",
      "tags": [
        "投资",
        "理财",
        "财富管理",
        "wealth"
      ],
      "categories": [
        "财富管理"
      ],
      "date": "Thu Feb 01",
      "description": "学习投资的基础知识，了解不同类型的投资工具和风险管理"
    },
    {
      "title": "被动收入：实现财务自由的关键",
      "link": "/blog/wealth/passive-income/",
      "tags": [
        "被动收入",
        "财务自由",
        "财富管理",
        "wealth"
      ],
      "categories": [
        "财富管理"
      ],
      "date": "Mon Feb 05",
      "description": "探讨被动收入的概念、类型和实现方法，帮助你构建多元化的收入来源"
    }
  ],
  "jottings": [
    {
      "title": "日常反思：记录生活的点滴感悟",
      "link": "/blog/jottings/daily-reflection/",
      "tags": [
        "生活感悟",
        "个人成长",
        "随笔",
        "jottings"
      ],
      "categories": [
        "生活随笔"
      ],
      "date": "Sat Feb 10",
      "description": "记录日常生活中的思考和感悟，分享对生活的理解和体会"
    }
  ]
}
  return articlesMap[theme] || []
}
