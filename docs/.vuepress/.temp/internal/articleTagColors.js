import './articleTagColors.css'
export const articleTagColors = {"生活感悟":"h7rs","预览":"h7rs","组件":"1jrk","markdown":"w880","CSS":"nh87","Grid":"35aa","VuePress 教程":"bevd","Vue3 技巧":"h7rs","Vue3":"bevd","Giscus":"3ury","VuePress":"1d2c","technology":"4fqv","投资":"w880","理财":"3ury","财富管理":"w880","被动收入":"3ury","财务自由":"bp1i","财富理解":"zif1"}

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
