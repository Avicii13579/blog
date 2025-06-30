import { defineClientConfig } from 'vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

import CustomComponent from './theme/components/Custom.vue'
import SidebarFilter from './theme/components/SidebarFilter.vue'
import ArticleDataProvider from './theme/components/ArticleDataProvider.vue'
import TechnologyFilter from './theme/components/TechnologyFilter.vue'
import ThemeFilter from './theme/components/ThemeFilter.vue'

// import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`

    // your custom components
    app.component('CustomComponent', CustomComponent)
    app.component('SidebarFilter', SidebarFilter)
    app.component('ArticleDataProvider', ArticleDataProvider)
    app.component('TechnologyFilter', TechnologyFilter)
    app.component('ThemeFilter', ThemeFilter)
  },
})
