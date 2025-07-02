import './articleTagColors.css'
export const articleTagColors = {"生活感悟":"mq2n","个人成长":"lks1","随笔":"obid","jottings":"6rez","预览":"mq2n","组件":"a25g","markdown":"lks1","CSS":"sen0","Grid":"txmr","布局":"jpxk","technology":"35mm","VuePress":"e56g","教程":"z1sq","Vue3":"01aa","前端":"a25g","技巧":"jcx8","Giscus":"h9dk","投资":"lks1","理财":"h9dk","财富管理":"lks1","wealth":"ltv9","被动收入":"h9dk","财务自由":"jwcq"}

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
