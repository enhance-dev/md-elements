import test from 'node:test'
import assert from 'node:assert'

import { MdRender } from '../elements/index.js'

function html (string) {
  return string.join('')
}

test('MdRender', () => {
  const emptyState = {
    attrs: {},
    context: {},
    store: {}
  }

  const stateWithFile = {
    ...emptyState,
    store: {
      enhanceMd: {
        'file.md': { html: '<p>hello world</p>' },
        'error.md': { error: new Error('fake error') }
      }
    }
  }

  const emptyStateResult = MdRender({ html, state: emptyState })
  assert.strictEqual(emptyStateResult, '')

  const badFileKeyResult = MdRender({
    html,
    state: { ...stateWithFile, attrs: { file: 'bad.md' } }
  })
  assert.strictEqual(badFileKeyResult, '')

  const errorFileResult = MdRender({
    html,
    state: { ...stateWithFile, attrs: { file: 'error.md' } }
  })
  assert.strictEqual(errorFileResult, '')

  const goodFileResult = MdRender({
    html,
    state: { ...stateWithFile, attrs: { file: 'file.md' } }
  })
  assert.strictEqual(goodFileResult, '<slot></slot>')

  const defaultFileResult = MdRender({ html, state: stateWithFile })
  assert.strictEqual(defaultFileResult, '<slot></slot>')
})
