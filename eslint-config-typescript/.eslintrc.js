module.exports = {
  // parser: '@typescript-eslint/parser',
  plugins: ['import'],
  extends: [
    '@jetrockets/base'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: 'standard-with-typescript',
      parserOptions: {
        project: true,
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    }
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: true,
      },
      node: true,
    },
  },
  rules: {
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling']
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      }
    ],
  },
}
