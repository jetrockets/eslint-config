module.exports = {
  env: {
    jest: true,
    browser: true,
    es6: true,
    node: true,
    commonjs: true
  },

  extends: 'eslint:recommended',

  plugins: ['import'],

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 12
  },

  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', ''],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },

  rules: {
    indent: 0,
    'max-len': [
      1,
      {
        code: 120,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreRegExpLiterals: true
      }
    ],
    'object-curly-newline': 0,
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'padded-blocks': ['error', 'never'],
    'no-trailing-spaces': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'block-spacing': [2, 'always'],
    'comma-spacing': 'error',
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'comma-dangle': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  }
};
