import arc from '@architect/eslint-config'

module.exports = [
  ...arc,
  {
    sourceType: 'module',
    ignores: [
      'node_modules/',
    ],
  },
]
