import './articleTagColors.css'
export const articleTagColors = {"生活感悟":"j0zb","预览":"j0zb","组件":"lm0i","CSS":"1b5r","Grid":"mzr5","VuePress 教程":"gmve","markdown":"7tzn","Vue3 技巧":"j0zb","Vue3":"gmve","Giscus":"naj6","VuePress":"ac12","technology":"gxo8","投资":"7tzn","理财":"naj6","财富管理":"7tzn","被动收入":"naj6","财务自由":"s4le","财富理解":"65ty"}

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
