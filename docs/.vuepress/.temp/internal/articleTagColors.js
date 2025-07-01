import './articleTagColors.css'
export const articleTagColors = {"生活感悟":"u201","个人成长":"88xl","随笔":"j3wo","jottings":"wqmr","预览":"u201","组件":"n9pv","markdown":"88xl","投资":"88xl","理财":"zrqw","财富管理":"88xl","wealth":"8mqc","被动收入":"zrqw","财务自由":"551i","CSS":"xuuu","Grid":"di85","布局":"gh80","technology":"80d9","VuePress":"onx2","教程":"eg6o","Vue3":"q3e8","前端":"n9pv","技巧":"f1im"}

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
