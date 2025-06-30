import './articleTagColors.css'
export const articleTagColors = {"生活感悟":"77kz","个人成长":"8mes","随笔":"l98n","jottings":"fjku","预览":"77kz","组件":"qwvk","markdown":"8mes","CSS":"vmju","Grid":"hyef","布局":"j2xp","technology":"4y5i","VuePress":"dj5v","教程":"i9yw","Vue3":"az6r","前端":"qwvk","技巧":"cwse","投资":"8mes","理财":"8ftn","财富管理":"8mes","wealth":"53pg","被动收入":"8ftn","财务自由":"z9l7"}

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
