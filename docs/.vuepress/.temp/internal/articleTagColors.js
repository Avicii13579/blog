import './articleTagColors.css'
export const articleTagColors = {"生活感悟":"sh6t","预览":"sh6t","组件":"w0ut","CSS":"i4pq","Grid":"k8lt","VuePress 教程":"2tiw","markdown":"z0b6","Vue3 技巧":"sh6t","Vue3":"2tiw","Giscus":"vnw5","VuePress":"r1nn","technology":"jbcd","投资":"z0b6","理财":"vnw5","财富管理":"z0b6","被动收入":"vnw5","财务自由":"jd1g","财富理解":"5rry"}

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
