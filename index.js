import fs from 'node:fs'
import path from 'node:path'
import { Arcdown } from 'arcdown'
export { MdRender, MdContent } from './elements/index.js'

export const arcdown = new Arcdown()

/** @typedef {{ dir: string, file: string }} EnhanceMdEntry */

/**
 * @param {EnhanceMdEntry | Array<EnhanceMdEntry>} entries
 * @returns {Promise<{ enhanceMd: object }>}
 */
export async function EnhanceMd (entries, renderer = arcdown) {
  const enhanceMd = {}

  if (!Array.isArray(entries)) entries = [ entries ]

  for (const { dir, file } of entries) {
    const mdFilePath = path.join(dir, file)
    let rendered

    try {
      const mdFile = fs.readFileSync(mdFilePath, 'utf8')
      rendered = await renderer.render(mdFile)
    }
    catch (error) {
      rendered = { error: error.message }
    }

    enhanceMd[file] = rendered
  }

  return { enhanceMd }
}
