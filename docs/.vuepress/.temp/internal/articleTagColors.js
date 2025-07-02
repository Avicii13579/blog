import './articleTagColors.css'
export const articleTagColors = {"生活感悟":"0nf8","个人成长":"soly","随笔":"jf6b","jottings":"brzm","投资":"soly","理财":"b1pu","财富管理":"soly","wealth":"283m","被动收入":"b1pu","财务自由":"d3yk","预览":"0nf8","组件":"k7w4","markdown":"soly","CSS":"7ht8","Grid":"wfmr","布局":"ntkw","technology":"of35","VuePress":"ox7n","教程":"69rs","Vue3":"2p2e","前端":"k7w4","技巧":"fbjo"}

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
