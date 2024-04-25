import test from 'node:test'
import assert from 'node:assert'

import { MdContent } from '../elements/index.js'

function html (string) {
  return string.join('')
}

test('MdContent', () => {
  const emptyState = {
    attrs: {},
    context: {},
  }

  const stateWithEnhanceMd = {
    ...emptyState,
    context: {
      enhanceMd: {
        frontmatter: {
          title: 'Hello World',
          description: 'This is a test',
        },
        html: '<h1>hello world</h1>',
        tocHtml: '<ul><li>hello world</li></ul>',
        slug: 'hello-world',
      },
    },
  }

  const emptyStateResult = MdContent({ html, state: emptyState })
  assert.strictEqual(emptyStateResult, '')

  const partHtmlResult = MdContent({
    html,
    state: { ...stateWithEnhanceMd, attrs: { part: 'html' } },
  })
  assert.strictEqual(partHtmlResult, '<p>hello world</p>')

  const partTocHtmlResult = MdContent({
    html,
    state: { ...stateWithEnhanceMd, attrs: { part: 'toc-html' } },
  })
  assert.strictEqual(partTocHtmlResult, '<ul><li>hello world</li></ul>')

  const partSlugResult = MdContent({
    html,
    state: { ...stateWithEnhanceMd, attrs: { part: 'slug' } },
  })
  assert.strictEqual(partSlugResult, 'hello-world')

  const partTitleResult = MdContent({
    html,
    state: { ...stateWithEnhanceMd, attrs: { part: 'title' } },
  })
  assert.strictEqual(partTitleResult, 'Hello World')

  const partDescriptionResult = MdContent({
    html,
    state: { ...stateWithEnhanceMd, attrs: { part: 'description' } },
  })
  assert.strictEqual(partDescriptionResult, 'This is a test')

  const partBadResult = MdContent({
    html,
    state: { ...stateWithEnhanceMd, attrs: { part: 'bad' } },
  })
  assert.strictEqual(partBadResult, '')

  const fmTitleResult = MdContent({
    html,
    state: { ...stateWithEnhanceMd, attrs: { frontmatter: 'title' } },
  })
  assert.strictEqual(fmTitleResult, 'Hello World')
})
