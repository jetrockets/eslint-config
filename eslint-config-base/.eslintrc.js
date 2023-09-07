module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended'
  ],
  plugins: ['import', '@html-eslint', 'json-format', '@cspell', 'prettier'],

  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  rules: {
    indent: ['error', 2, { SwitchCase: 1 }], // switch-case fix
    camelcase: 1,
    '@cspell/spellchecker': [
      'warn',
      {
        checkComments: false
      }
    ],

    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ]
  }
}
