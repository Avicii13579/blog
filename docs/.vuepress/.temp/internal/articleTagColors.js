import './articleTagColors.css'
export const articleTagColors = {"生活感悟":"dpgc","个人成长":"lskp","随笔":"c7ei","jottings":"28de","预览":"dpgc","组件":"2511","markdown":"lskp","CSS":"uho1","Grid":"sda2","布局":"mfhu","technology":"n8z9","VuePress":"7ygu","教程":"5nd4","Vue3":"vzs4","前端":"2511","技巧":"xhzc","投资":"lskp","理财":"b1ei","财富管理":"lskp","wealth":"4aeh","被动收入":"b1ei","财务自由":"uud6"}

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
