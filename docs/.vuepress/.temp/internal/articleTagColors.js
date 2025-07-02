import './articleTagColors.css'
export const articleTagColors = {"预览":"m1f8","组件":"1d92","markdown":"svpv","生活感悟":"m1f8","个人成长":"svpv","随笔":"mxw1","jottings":"dvhl","CSS":"0w25","Grid":"a8ce","布局":"5l4n","technology":"2vyy","VuePress":"lks8","教程":"6554","Vue3":"77m5","前端":"1d92","技巧":"yulp","Giscus":"8fyv","投资":"svpv","理财":"8fyv","财富管理":"svpv","wealth":"iciy","被动收入":"8fyv","财务自由":"z1eb"}

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
