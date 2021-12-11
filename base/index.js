module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true
  },
  'extends': 'eslint:recommended',
  'plugins': ['import', 'modules-newline', 'newline-destructuring'],
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 12
  },
  'rules': {
    'modules-newline/import-declaration-newline': 'warn',
    'modules-newline/export-declaration-newline': 'warn',
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': ['error', {
      'multiline': true,
      'minProperties': 4
    }],
    'padded-blocks': ['error', 'never'],
    'no-trailing-spaces': 'error',
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'block-spacing': [2, 'always'],
    'newline-destructuring/newline': 'error',
    'comma-spacing': 'error',
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
    'comma-dangle': ['error', 'never'],
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', ['parent', 'sibling']],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        }
      }
    ]
  },
  'settings': {
    'import/resolver': {
      'node': {
        'moduleDirectory': ['node_modules', ''],
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};