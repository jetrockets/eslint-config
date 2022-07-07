module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:import/recommended'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },

  plugins: ['react'],

  rules: {
    'react-hooks/exhaustive-deps': 1,
    'jsx-quotes': ['error', 'prefer-double'],
    'comma-dangle': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    'react/display-name': 0,
    'value-keyword-case': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  },

  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', ''],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
