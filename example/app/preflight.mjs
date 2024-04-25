import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { EnhanceMd } from '@enhance/md-elements'

export default async function ({ req }) {
  const dir = join(import.meta.dirname, 'md')
  const articleList = await readdirSync(dir)

  const file = req.path === '/'
    ? articleList[0]
    : decodeURIComponent(req.path).replace('/', '').concat('.md')

  const articles = articleList.map(a => {
    const active = a === file
    const article = a.replace('.md', '')

    return {
      active,
      title: article.replaceAll('--', ':').replaceAll('_', ' '),
      link: encodeURIComponent(article),
    }
  })

  return {
    articles,
    fileName: file,
    ...await EnhanceMd({ dir, file }),
  }
}
