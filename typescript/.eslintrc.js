module.exports = {
  parser: require.resolve("@typescript-eslint/parser"),
  // 'parserOptions': {
  //   'warnOnUnsupportedTypeScriptVersion': false,
  //   'sourceType': 'module',
  //   'project': 'tsconfig.json'
  // },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
      },
    },
  ],

  extends: ["plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: { "{}": false, object: false },
      },
    ],
  },
};
