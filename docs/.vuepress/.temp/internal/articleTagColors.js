import './articleTagColors.css'
export const articleTagColors = {"生活感悟":"dx2h","个人成长":"9eri","随笔":"zagv","jottings":"5jge","预览":"dx2h","组件":"ctw1","markdown":"9eri","CSS":"g6p8","Grid":"uq9d","布局":"zwk5","technology":"jzgy","VuePress":"n4bh","教程":"joqq","Vue3":"3j8z","前端":"ctw1","技巧":"q9ja","Giscus":"jy39","投资":"9eri","理财":"jy39","财富管理":"9eri","wealth":"oi8s","被动收入":"jy39","财务自由":"2acr"}

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
