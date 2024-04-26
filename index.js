import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { Arcdown } from 'arcdown'
export { MdRender, MdContent } from './elements/index.js'

export const arcdown = new Arcdown()
const renderCache = new Map()

/** @typedef {{ html: string, tocHtml: string, title?: string, slug?: string }} RenderResult */

/**
 * @param {string} dir
 * @param {string | Array<string>} [entries]
 * @param {Arcdown} [renderer]
 * @returns {Promise<{
 *  enhanceMd: { [FileKey: string]: RenderResult | { error: Error } } | object,
 *  enhanceMdFiles: { title: string, link: string, active: boolean }[]
 * }>}
 */
export async function EnhanceMd (dir, entries, renderer = arcdown) {
  const files = readdirSync(dir)
  const enhanceMdFiles = []
  for (const f of files) {
    if (!f.endsWith('.md')) continue
    const file = f.replace('.md', '')

    enhanceMdFiles.push({
      file: path.join(dir, f),
      title: file.replaceAll('--', ':').replaceAll('_', ' '),
      link: encodeURIComponent(file),
      active: false,
    })
  }

  const enhanceMd = {}
  if (entries) {
    if (!Array.isArray(entries)) entries = [ entries ]

    for (const file of entries) {
      const mdFilePath = path.join(dir, file)
      let rendered

      if (renderCache.has(mdFilePath)) {
        rendered = renderCache.get(mdFilePath)
      }
      else {
        try {
          const mdFile = readFileSync(mdFilePath, 'utf8')
          rendered = await renderer.render(mdFile)
          renderCache.set(mdFilePath, rendered)
          const activeFile = enhanceMdFiles.find(a => a.file === mdFilePath)
          if (activeFile) activeFile.active = true
        }
        catch (error) {
          rendered = { error }
        }

      }

      enhanceMd[file] = rendered
    }
  }

  return { enhanceMd, enhanceMdFiles }
}
