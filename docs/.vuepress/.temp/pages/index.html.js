import comp from "/Users/jiuan/Desktop/my-blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"我的技术博客\",\"tagline\":\"分享前端开发技术和学习心得\",\"text\":\"欢迎来到我的个人技术博客，这里记录了我的学习笔记、技术分享和项目经验\",\"actions\":[{\"theme\":\"brand\",\"text\":\"开始阅读\",\"link\":\"/articles/\"},{\"theme\":\"alt\",\"text\":\"关于我 →\",\"link\":\"/about/\"}]}},{\"type\":\"features\",\"features\":[{\"icon\":\"📝\",\"title\":\"技术文章\",\"details\":\"分享前端开发、Vue、React、CSS 等技术文章和最佳实践\",\"link\":\"/technology/\"},{\"icon\":\"💰\",\"title\":\"财富管理\",\"details\":\"分享投资理财、被动收入、财务规划等财富管理知识\",\"link\":\"/wealth/\"},{\"icon\":\"✍️\",\"title\":\"生活随笔\",\"details\":\"记录生活感悟、个人成长、思考随笔等内容\",\"link\":\"/jottings/\"}]},{\"type\":\"blog\",\"title\":\"最新文章\",\"subtitle\":\"最近发布的技术文章和学习笔记\",\"more\":\"查看更多文章\",\"moreLink\":\"/articles/\",\"card\":true,\"pageSize\":6}]},\"readingTime\":{\"minutes\":0.69,\"words\":207},\"git\":{},\"filePathRelative\":\"README.md\",\"headers\":[],\"categoryList\":[]}")
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
