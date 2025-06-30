<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSiteData } from 'vuepress/client'

interface Article {
  title: string
  link: string
  tags: string[]
  categories: string[]
  date?: string
  description?: string
}

interface Category {
  name: string
  articles: Article[]
}

const siteData = useSiteData()
const categories = ref<Category[]>([])

onMounted(async () => {
  // 这里我们需要从 VuePress 的数据中获取文章信息
  // 由于 VuePress 的数据结构，我们需要通过其他方式获取
  // 暂时使用模拟数据，实际项目中需要根据 VuePress 的数据结构调整
  
  categories.value = [
    {
      name: '技术文章',
      articles: [
        {
          title: 'VuePress 入门指南',
          link: '/technology/getting-started/',
          tags: ['VuePress', '教程', 'technology'],
          categories: ['前端开发'],
          date: '2024-01-15',
          description: '学习如何使用 VuePress 搭建个人博客和文档网站'
        },
        {
          title: 'Vue3 开发技巧总结',
          link: '/technology/vue3-tips/',
          tags: ['Vue3', '前端', '技巧', 'technology'],
          categories: ['前端开发'],
          date: '2024-01-20',
          description: '分享一些 Vue3 开发中的实用技巧和最佳实践'
        },
        {
          title: 'CSS Grid 布局完全指南',
          link: '/technology/css-grid-layout/',
          tags: ['CSS', 'Grid', '布局', 'technology'],
          categories: ['前端开发'],
          date: '2024-01-25',
          description: '深入理解 CSS Grid 布局系统，掌握现代网页布局技术'
        }
      ]
    },
    {
      name: '财富管理',
      articles: [
        {
          title: '投资基础知识入门',
          link: '/wealth/investment-basics/',
          tags: ['投资', '理财', '财富管理', 'wealth'],
          categories: ['财富管理'],
          date: '2024-02-01',
          description: '学习投资的基础知识，了解不同类型的投资工具和风险管理'
        },
        {
          title: '被动收入：实现财务自由的关键',
          link: '/wealth/passive-income/',
          tags: ['被动收入', '财务自由', '财富管理', 'wealth'],
          categories: ['财富管理'],
          date: '2024-02-05',
          description: '探讨被动收入的概念、类型和实现方法，帮助你构建多元化的收入来源'
        }
      ]
    },
    {
      name: '生活随笔',
      articles: [
        {
          title: '日常反思：记录生活的点滴感悟',
          link: '/jottings/daily-reflection/',
          tags: ['生活感悟', '个人成长', '随笔', 'jottings'],
          categories: ['生活随笔'],
          date: '2024-02-10',
          description: '记录日常生活中的思考和感悟，分享对生活的理解和体会'
        }
      ]
    }
  ]
})

// 暴露数据给父组件
defineExpose({
  categories
})
</script>

<template>
  <slot :categories="categories"></slot>
</template> 