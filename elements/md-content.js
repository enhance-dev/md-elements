export default function ({ html, state }) {
  const { attrs, context } = state
  const { enhanceMd } = context
  const { frontmatter } = enhanceMd
  const { part, frontmatter: fmKey } = attrs

  if (typeof part === 'string') {
    if (part === 'html') return html`${enhanceMd.html}`
    if (part === 'toc-html') return html`${enhanceMd.tocHtml}`
    if (part === 'slug') return enhanceMd.slug || ''
    if (part === 'title') return enhanceMd.title || ''
  }

  if (frontmatter[fmKey]) return html`${frontmatter[fmKey].toString()}`

  return ''
}
