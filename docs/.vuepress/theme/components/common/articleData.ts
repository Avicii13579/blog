/**
 * 公共文章数据与工具方法
 * @module common/articleData
 */

export interface Article {
  title: string
  link: string
  tags: string[]
  categories: string[]
  date?: string
  description?: string
}

/**
 * 根据主题获取文章数据
 * @param theme 主题名称
 * @returns 文章数组
 */
export const getArticlesByTheme = (theme: string): Article[] => {
  const articlesMap: Record<string, Article[]> = {
    technology: [
      {
        title: 'VuePress 入门指南',
        link: '/blog/technology/getting-started/',
        tags: ['VuePress', '教程', 'technology'],
        categories: ['工具使用', '前端开发'],
        date: '2024-01-15',
        description: '学习如何使用 VuePress 搭建个人博客和文档网站'
      },
      {
        title: 'Vue3 开发技巧总结',
        link: '/blog/technology/vue3-tips/',
        tags: ['Vue3', '前端', '技巧', 'technology'],
        categories: ['前端开发', '框架使用'],
        date: '2024-01-20',
        description: '分享一些 Vue3 开发中的实用技巧和最佳实践'
      },
      {
        title: 'CSS Grid 布局完全指南',
        link: '/blog/technology/css-grid-layout/',
        tags: ['CSS', 'Grid', '布局', 'technology'],
        categories: ['前端开发', 'CSS技术'],
        date: '2024-01-25',
        description: '深入理解 CSS Grid 布局系统，掌握现代网页布局技术'
      },
      {
        title: '在 VuePress 集成 Giscus 评论系统',
        link: '/blog/technology/vuepress-giscus-comment/',
        tags: ['VuePress', 'Giscus', '教程', 'technology'],
        categories: ['前端开发'],
        date: '2024-06-10',
        description: '详细介绍如何在 VuePress 博客中安装和配置 Giscus 评论模块，提升用户互动体验。'
      }
    ],
    wealth: [
      {
        title: '投资基础知识',
        link: '/blog/wealth/investment-basics/',
        tags: ['投资', '基础', 'wealth'],
        categories: ['投资理财'],
        date: '2024-01-10',
        description: '从零开始学习投资理财，建立正确的投资观念'
      },
      {
        title: '被动收入构建指南',
        link: '/blog/wealth/passive-income/',
        tags: ['被动收入', '财务自由', 'wealth'],
        categories: ['被动收入'],
        date: '2024-01-18',
        description: '学习如何构建多元化的被动收入来源，实现财务自由'
      }
    ],
    jottings: [
      {
        title: '日常反思：如何提升工作效率',
        link: '/blog/jottings/daily-reflection/',
        tags: ['反思', '效率', 'jottings'],
        categories: ['生活感悟'],
        date: '2024-01-12',
        description: '分享一些关于时间管理和工作效率的个人思考和实践经验'
      }
    ]
  }
  return articlesMap[theme] || []
}
