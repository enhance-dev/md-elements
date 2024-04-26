import { join } from 'node:path'
import { EnhanceMd } from '@enhance/md-elements'

export async function get () {
  const dir = join(import.meta.dirname, '..', 'md')
  console.log('dir', dir)

  return {
    json: {
      ...await EnhanceMd(dir, [ 'About/about.md', 'About/about2.md', 'About/about3.md' ]),
    },
  }
}
