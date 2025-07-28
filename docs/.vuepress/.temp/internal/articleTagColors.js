import './articleTagColors.css'
export const articleTagColors = {"生活感悟":"r64o","预览":"r64o","组件":"p1bc","CSS":"4ds1","Grid":"0rny","VuePress 教程":"o04r","markdown":"qerk","nextjs":"f108","Vue3 技巧":"r64o","Vue3":"o04r","Giscus":"5msw","VuePress":"wp07","technology":"lqs1","投资":"qerk","理财":"5msw","财富管理":"qerk","被动收入":"5msw","财务自由":"jpeb","财富理解":"73ci"}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateArticleTagColors) {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ articleTagColors }) => {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  })
}
