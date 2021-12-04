module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true
  },
  'extends': 'eslint:recommended',
  'plugins': ['import', 'modules-newline'],
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 13
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': ['error', { 'multiline': true, 'minProperties': 4 }],
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', ['parent', 'sibling']],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true,
        },
      },
    ],
  },
  'settings': {
    'import/resolver': {
      'node': {
        'moduleDirectory': ['node_modules', ''],
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
