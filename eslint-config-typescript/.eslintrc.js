module.exports = {
  extends: [
    '@jetrockets/base',
    'plugin:import/typescript'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: 'standard-with-typescript',
      parserOptions: {
        project: './eslint-config-typescript/tsconfig.json',
      },
    }
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
}
