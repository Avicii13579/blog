import './articleTagColors.css'
export const articleTagColors = {"生活感悟":"in8i","预览":"in8i","组件":"ghti","CSS":"f8lh","Grid":"gmq9","VuePress 教程":"9gt9","markdown":"gwqk","Vue3 技巧":"in8i","Vue3":"9gt9","Giscus":"qre7","VuePress":"hbjz","technology":"ii3s","投资":"gwqk","理财":"qre7","财富管理":"gwqk","被动收入":"qre7","财务自由":"cp8k","财富理解":"23vv"}

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
