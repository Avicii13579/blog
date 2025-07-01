import { defineClientConfig } from 'vuepress/client'
import CustomComponent from './theme/components/Custom.vue'
import ThemeFilter from './theme/components/ThemeFilter.vue'
import ArticleList from './theme/components/ArticleList.vue'
import ArticleNavigation from './theme/components/ArticleNavigation.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('CustomComponent', CustomComponent)
    app.component('ThemeFilter', ThemeFilter)
    app.component('ArticleList', ArticleList)
    app.component('ArticleNavigation', ArticleNavigation)
  },

  setup() {
  }
})
