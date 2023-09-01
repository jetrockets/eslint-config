module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    '@jetrockets/base'
  ],
  plugins: ['react'],
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      extends: [
        'standard-jsx',
        'standard-react'
      ],
    }
  ],
  rules: {
    'import/no-unresolved': 'error',
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
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '', 'src/'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
