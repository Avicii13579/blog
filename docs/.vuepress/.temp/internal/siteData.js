export const siteData = JSON.parse("{\"base\":\"/blog/\",\"lang\":\"zh-CN\",\"title\":\"吾园小记\",\"description\":\"随笔与生活分享\",\"head\":[[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/blog/custom.css\"}],[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"href\":\"/blog/logo3.png\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
