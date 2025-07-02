import './articleTagColors.css'
export const articleTagColors = {"生活感悟":"nckb","个人成长":"v895","随笔":"cgfd","jottings":"0j1i","预览":"nckb","组件":"hohf","markdown":"v895","CSS":"at2o","Grid":"y5ad","布局":"iiis","technology":"d9pd","VuePress":"gln9","教程":"ygl7","Vue3":"3u91","前端":"hohf","技巧":"2664","Giscus":"dhsk","投资":"v895","理财":"dhsk","财富管理":"v895","wealth":"tuy5","被动收入":"dhsk","财务自由":"4pn7"}

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
