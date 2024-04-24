export default function ({ html, state }) {
  const { attrs, context, store } = state
  const { enhanceMd } = store
  const { file } = attrs

  if (!enhanceMd) {
    console.error('<md-render>: store is missing "enhanceMd"')
    return ''
  }

  const fileKey = file || Object.keys(enhanceMd)[0]

  if (!enhanceMd[fileKey]) {
    console.error(`<md-render>: unregistered "${fileKey}"`)
    return ''
  }

  if (enhanceMd[fileKey].error) {
    console.error(`<md-render>: "${fileKey}" error:`, enhanceMd[fileKey].error.message)
    return ''
  }

  const rendered = enhanceMd[fileKey]
  context.enhanceMd = rendered

  return html`<slot></slot>`
}
