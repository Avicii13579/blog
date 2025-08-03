import './articleTagColors.css'
export const articleTagColors = {"生活感悟":"8bi5","预览":"8bi5","组件":"l5ue","Vue3":"dc9n","technology":"ahp9","CSS":"i1v9","Grid":"xcp9","VuePress 教程":"dc9n","markdown":"4936","nextjs":"u9cr","Vue3 技巧":"8bi5","Giscus":"t1ux","VuePress":"wl3m","投资":"4936","理财":"t1ux","财富管理":"4936","被动收入":"t1ux","财务自由":"rn7l","财富理解":"8dcn"}

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
