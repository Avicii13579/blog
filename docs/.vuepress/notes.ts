/**
 * @see https://theme-plume.vuejs.press/guide/document/ 查看文档了解配置详情。
 *
 * Notes 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 *
 * 请注意，你应该先在这里配置好 Notes，然后再启动 vuepress，主题会在启动 vuepress 时，
 * 读取这里配置的 Notes，然后在与 Note 相关的 Markdown 文件中，自动生成 permalink。
 *
 * 如果你发现 侧边栏没有显示，那么请检查你的配置是否正确，以及 Markdown 文件中的 permalink
 * 是否是以对应的 note 配置的 link 的前缀开头。 是否展示侧边栏是根据 页面链接 的前缀 与 `note.link`
 * 的前缀是否匹配来决定。
 */

/**
 * 在受支持的 IDE 中会智能提示配置项。
 *
 * - `defineNoteConfig` 是用于定义单个 note 配置的帮助函数
 * - `defineNotesConfig` 是用于定义 notes 集合的帮助函数
 *
 * 通过 `defineNoteConfig` 定义的 note 配置，应该填入 `defineNotesConfig` 的 notes 数组中
 */
import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

// 技术主题配置
const technologyNote = defineNoteConfig({
  dir: 'technology',
  link: '/technology/',
  // sidebar: [
  //   {
  //     text: '技术文章',
  //     items: [
  //       // { text: '技术文章', link: '/technology/' },
  //       { text: 'VuePress 入门指南', link: '/technology/getting-started/' },
  //       { text: 'Vue3 开发技巧总结', link: '/technology/vue3-tips/' },
  //       { text: 'CSS Grid 布局完全指南', link: '/technology/css-grid-layout/' },
  //     ],
  //   },
  // ],
})

// 财富主题配置
const wealthNote = defineNoteConfig({
  dir: 'wealth',
  link: '/wealth/',
  // sidebar: [
  //   {
  //     text: '财富管理',
  //     items: [
  //       // { text: '财富管理', link: '/wealth/' },
  //       { text: '投资基础知识入门', link: '/wealth/investment-basics/' },
  //       { text: '被动收入：实现财务自由的关键', link: '/wealth/passive-income/' },
  //     ],
  //   },
  // ],
})

// 随笔主题配置
const jottingsNote = defineNoteConfig({
  dir: 'jottings',
  link: '/jottings/',
  // sidebar: [
  //   {
  //     text: '生活随笔',
  //     items: [
  //       // { text: '生活随笔', link: '/jottings/' },
  //       { text: '日常反思：记录生活的点滴感悟', link: '/jottings/daily-reflection/' },
  //     ],
  //   },
  // ],
})

/**
 * 导出所有的 note
 * 每一个 note 都应该填入到 `notes.notes` 数组中
 */
export default defineNotesConfig({
  dir: 'docs',
  link: '/',
  notes: [technologyNote, wealthNote, jottingsNote],
})
