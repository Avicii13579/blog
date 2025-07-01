import { path } from '@vuepress/utils'
import { plumeTheme } from 'vuepress-theme-plume'
import type { Theme } from '@vuepress/core'

export default plumeTheme({
    // 继承 plume 主题的所有配置
    ...plumeTheme({}),

    // 自定义布局
    layouts: {
        post: path.resolve(__dirname, 'layouts/PostLayout.vue'),
    },
}) as Theme
