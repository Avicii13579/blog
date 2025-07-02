import './articleTagColors.css'
export const articleTagColors = {"生活感悟":"tq4r","个人成长":"xtw9","随笔":"zsrp","jottings":"rzsn","预览":"tq4r","组件":"n3gf","markdown":"xtw9","CSS":"sd9j","Grid":"2xk8","布局":"qj0m","technology":"5j1m","VuePress":"9a3x","教程":"igpy","Vue3":"lr05","前端":"n3gf","技巧":"g74x","投资":"xtw9","理财":"mbsx","财富管理":"xtw9","wealth":"5hy3","被动收入":"mbsx","财务自由":"d429"}

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
