module.exports = {
  'extends': [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],

  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
      'tsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },

  'plugins': ['react'],

  'rules': {
    'react/display-name': 0,
    'value-keyword-case': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', ['parent', 'sibling']],
        'pathGroups': [
          {
            'pattern': 'react',
            'group': 'external',
            'position': 'before',
          },
        ],
        'pathGroupsExcludedImportTypes': ['react'],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true,
        },
      },
    ],
  },

  'settings': {
    'react': { 'version': 'detect' },
    'import/resolver': {
      'node': {
        'moduleDirectory': ['node_modules', ''],
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
