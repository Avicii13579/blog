import comp from "/Users/jiuan/Desktop/my-blog/docs/.vuepress/.temp/pages/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/\",\"title\":\"Demo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Demo\",\"createTime\":\"2025/06/28 23:58:57\",\"permalink\":\"/demo/\"},\"readingTime\":{\"minutes\":0.04,\"words\":13},\"git\":{},\"filePathRelative\":\"notes/demo/README.md\",\"headers\":[],\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10001,\"name\":\"notes\"},{\"id\":\"c19f38\",\"sort\":10002,\"name\":\"demo\"}]}")
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
