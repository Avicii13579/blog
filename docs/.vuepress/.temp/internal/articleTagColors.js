import './articleTagColors.css'
export const articleTagColors = {"生活感悟":"keby","个人成长":"biyn","随笔":"lxch","jottings":"1j4l","预览":"keby","组件":"cdew","markdown":"biyn","CSS":"9aef","Grid":"3wh9","布局":"h5i0","technology":"v5vc","VuePress":"zgeh","教程":"5ohx","Vue3":"lhl8","前端":"cdew","技巧":"ikpj","Giscus":"6wj5","投资":"biyn","理财":"6wj5","财富管理":"biyn","被动收入":"6wj5","财务自由":"d2vb","财富理解":"1eal"}

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
