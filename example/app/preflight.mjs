import { join } from 'node:path'
import { EnhanceMd } from '@enhance/md-elements'

export default async function ({ req }) {
  const dir = join(import.meta.dirname, 'md')

  const file = req.path !== '/'
    ? decodeURIComponent(req.path).replace('/', '').concat('.md')
    : undefined

  return {
    ...await EnhanceMd(dir, file),
  }
}
