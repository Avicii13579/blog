import './articleTagColors.css'
export const articleTagColors = {"生活感悟":"6a3o","预览":"6a3o","组件":"jkz8","markdown":"hcd9","CSS":"87d2","Grid":"1vfm","VuePress 教程":"3txt","Vue3 技巧":"6a3o","Vue3":"3txt","Giscus":"ogv4","VuePress":"7o24","technology":"q3hr","投资":"hcd9","理财":"ogv4","财富管理":"hcd9","被动收入":"ogv4","财务自由":"k2yl","财富理解":"4cd4"}

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
