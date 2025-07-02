// 自动生成 docs/.vuepress/theme/components/common/articleData.ts
// 用于根据 docs/technology、docs/wealth、docs/jottings 下的 md 文件自动生成文章数据
// 需先安装 gray-matter: npm i gray-matter

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const THEMES = ['technology', 'wealth', 'jottings']
const DOCS_PATH = path.resolve(__dirname, '../docs')
const OUTPUT_PATH = path.resolve(__dirname, '../docs/.vuepress/theme/components/common/articleData.ts')

/**
 * 读取指定主题目录下所有 md 文件（排除 README.md）
 * @param {string} theme
 * @returns {Array}
 */
function getArticles(theme) {
  const dir = path.join(DOCS_PATH, theme)
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md') && f.toLowerCase() !== 'readme.md')
    .map(filename => {
      const filePath = path.join(dir, filename)
      const content = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(content)
      // 兼容 permalink 或自动生成
      let link = data.permalink || `/${theme}/${filename.replace(/\.md$/, '/')}`
      if (!link.startsWith('/blog/')) link = '/blog' + link
      return {
        title: data.title || filename,
        link,
        tags: data.tags || [],
        categories: data.categories || [],
        date: data.date ? String(data.date).slice(0, 10) : '',
        description: data.description || '',
      }
    })
}

function generate() {
  const articlesMap = {}
  for (const theme of THEMES) {
    articlesMap[theme] = getArticles(theme)
  }

  // 生成 TypeScript 文件
  const ts = `/**\n * 自动生成的文章数据\n * @description 由 scripts/generate-article-data.js 自动生成\n */\n\nexport interface Article {\n  title: string\n  link: string\n  tags: string[]\n  categories: string[]\n  date?: string\n  description?: string\n}\n\nexport const getArticlesByTheme = (theme: string): Article[] => {\n  const articlesMap: Record<string, Article[]> = ${JSON.stringify(articlesMap, null, 2)}\n  return articlesMap[theme] || []\n}\n`
  fs.writeFileSync(OUTPUT_PATH, ts, 'utf-8')
  console.log('文章数据已生成:', OUTPUT_PATH)
}

generate()
