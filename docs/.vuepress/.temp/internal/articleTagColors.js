import './articleTagColors.css'
export const articleTagColors = {"生活感悟":"6a3o","个人成长":"hcd9","随笔":"vel3","jottings":"a6af","预览":"6a3o","组件":"jkz8","markdown":"hcd9","CSS":"87d2","Grid":"1vfm","布局":"hmhs","technology":"q3hr","VuePress":"7o24","教程":"imip","Vue3":"3txt","前端":"jkz8","技巧":"adab","投资":"hcd9","理财":"ogv4","财富管理":"hcd9","wealth":"zgnb","被动收入":"ogv4","财务自由":"k2yl"}

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
