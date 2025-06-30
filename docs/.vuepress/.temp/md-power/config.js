import { defineClientConfig } from 'vuepress/client'
import Tabs from '/Users/daerduo/Desktop/blog/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/Users/daerduo/Desktop/blog/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/Users/daerduo/Desktop/blog/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from '/Users/daerduo/Desktop/blog/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'

import '/Users/daerduo/Desktop/blog/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  },
  setup() {
    
  }
})
