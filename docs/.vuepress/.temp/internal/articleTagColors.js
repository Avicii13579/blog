import './articleTagColors.css'
export const articleTagColors = {"生活感悟":"ydjq","个人成长":"zrtm","随笔":"om9w","jottings":"y2o8","预览":"ydjq","组件":"mw1m","markdown":"zrtm","CSS":"z6r5","Grid":"ss63","布局":"tvdy","technology":"tmn4","VuePress":"c0iw","教程":"dxm3","Vue3":"tob6","前端":"mw1m","技巧":"y6ii","投资":"zrtm","理财":"y6mq","财富管理":"zrtm","wealth":"2n6o","被动收入":"y6mq","财务自由":"mt13"}

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
