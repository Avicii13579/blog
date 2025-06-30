export const redirects = JSON.parse("{\"/preview/custom-component.example.html\":\"/article/rb1tg6nv/\",\"/preview/markdown.html\":\"/article/0p1ghmr3/\",\"/notes/demo/\":\"/demo/\",\"/notes/demo/bar.html\":\"/demo/8sy80jqg/\",\"/notes/demo/foo.html\":\"/demo/82fx2ska/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/rb1tg6nv/", { loader: () => import(/* webpackChunkName: "article_rb1tg6nv_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/article/rb1tg6nv/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/0p1ghmr3/", { loader: () => import(/* webpackChunkName: "article_0p1ghmr3_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/article/0p1ghmr3/index.html.js"), meta: {"title":"Markdown"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/demo/8sy80jqg/", { loader: () => import(/* webpackChunkName: "demo_8sy80jqg_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/demo/8sy80jqg/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/82fx2ska/", { loader: () => import(/* webpackChunkName: "demo_82fx2ska_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/demo/82fx2ska/index.html.js"), meta: {"title":"foo"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"/Users/daerduo/Desktop/blog/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
