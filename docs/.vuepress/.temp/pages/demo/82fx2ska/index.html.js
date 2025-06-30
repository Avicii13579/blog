import comp from "/Users/daerduo/Desktop/blogs/blog/docs/.vuepress/.temp/pages/demo/82fx2ska/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/82fx2ska/\",\"title\":\"foo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"foo\",\"createTime\":\"2025/06/28 23:58:57\",\"permalink\":\"/demo/82fx2ska/\"},\"readingTime\":{\"minutes\":0.04,\"words\":11},\"git\":{},\"filePathRelative\":\"notes/demo/foo.md\",\"headers\":[]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
