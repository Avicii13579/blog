export const sidebar = {"/":{"/technology/":{"items":[{"text":"技术文章","items":[{"text":"VuePress 入门指南","link":"/technology/getting-started/"},{"text":"Vue3 开发技巧总结","link":"/technology/vue3-tips/"},{"text":"CSS Grid 布局完全指南","link":"/technology/css-grid-layout/"}]}],"prefix":"/docs/technology/"},"/wealth/":{"items":[{"text":"财富管理","items":[{"text":"投资基础知识入门","link":"/wealth/investment-basics/"},{"text":"被动收入：实现财务自由的关键","link":"/wealth/passive-income/"}]}],"prefix":"/docs/wealth/"},"/jottings/":{"items":[{"text":"生活随笔","items":[{"text":"日常反思：记录生活的点滴感悟","link":"/jottings/daily-reflection/"}]}],"prefix":"/docs/jottings/"}},"__auto__":{},"__home__":{}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
