import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { EnhanceMd } from '@enhance/md-elements'

export default async function ({ req }) {
  const articleList = await readdirSync(join(import.meta.dirname, 'md'))

  const fileName = req.path === '/'
    ? articleList[0]
    : decodeURIComponent(req.path).replace('/', '').concat('.md')

  const articles = articleList.map(a => {
    const active = a === fileName
    const article = a.replace('.md', '')

    return {
      active,
      title: article.replaceAll('--', ':').replaceAll('_', ' '),
      link: encodeURIComponent(article),
    }
  })

  return {
    articles,
    fileName,
    ...await EnhanceMd({
      dir: join(import.meta.dirname, 'md'),
      file: fileName,
    }),
  }
}
