import arc from '@architect/eslint-config'

export default [
  ...arc,
  {
    files: [ '**/*.js' ],
    languageOptions: {
      sourceType: 'module',
    },
    ignores: [
      'node_modules/',
    ],
  },
]
