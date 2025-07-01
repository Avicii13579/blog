export const redirects = JSON.parse("{\"/about.html\":\"/about/\",\"/preview/custom-component.example.html\":\"/article/rb1tg6nv/\",\"/preview/markdown.html\":\"/article/0p1ghmr3/\",\"/jottings/daily-reflection.html\":\"/jottings/daily-reflection/\",\"/technology/css-grid-layout.html\":\"/technology/css-grid-layout/\",\"/technology/getting-started.html\":\"/technology/getting-started/\",\"/technology/vue3-tips.html\":\"/technology/vue3-tips/\",\"/wealth/investment-basics.html\":\"/wealth/investment-basics/\",\"/wealth/passive-income.html\":\"/wealth/passive-income/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"关于我"} }],
  ["/article/rb1tg6nv/", { loader: () => import(/* webpackChunkName: "article_rb1tg6nv_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/article/rb1tg6nv/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/0p1ghmr3/", { loader: () => import(/* webpackChunkName: "article_0p1ghmr3_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/article/0p1ghmr3/index.html.js"), meta: {"title":"Markdown"} }],
  ["/jottings/", { loader: () => import(/* webpackChunkName: "jottings_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/jottings/index.html.js"), meta: {"title":"随笔文章"} }],
  ["/jottings/daily-reflection/", { loader: () => import(/* webpackChunkName: "jottings_daily-reflection_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/jottings/daily-reflection/index.html.js"), meta: {"title":"日常反思：记录生活的点滴感悟"} }],
  ["/technology/", { loader: () => import(/* webpackChunkName: "technology_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/technology/index.html.js"), meta: {"title":"技术文章"} }],
  ["/technology/css-grid-layout/", { loader: () => import(/* webpackChunkName: "technology_css-grid-layout_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/technology/css-grid-layout/index.html.js"), meta: {"title":"CSS Grid 布局完全指南"} }],
  ["/technology/getting-started/", { loader: () => import(/* webpackChunkName: "technology_getting-started_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/technology/getting-started/index.html.js"), meta: {"title":"VuePress 入门指南"} }],
  ["/technology/vue3-tips/", { loader: () => import(/* webpackChunkName: "technology_vue3-tips_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/technology/vue3-tips/index.html.js"), meta: {"title":"Vue3 开发技巧总结"} }],
  ["/wealth/", { loader: () => import(/* webpackChunkName: "wealth_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/wealth/index.html.js"), meta: {"title":"理财文章"} }],
  ["/wealth/investment-basics/", { loader: () => import(/* webpackChunkName: "wealth_investment-basics_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/wealth/investment-basics/index.html.js"), meta: {"title":"投资基础知识入门"} }],
  ["/wealth/passive-income/", { loader: () => import(/* webpackChunkName: "wealth_passive-income_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/wealth/passive-income/index.html.js"), meta: {"title":"被动收入：实现财务自由的关键"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
