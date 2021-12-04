module.exports = {
  "extends": ['plugin:@typescript-eslint/recommended'],
  "parser": '@typescript-eslint/parser',
  "plugins": ['@typescript-eslint'],
  '@typescript-eslint/explicit-module-boundary-types': 0,
  '@typescript-eslint/no-explicit-any': 0,
  '@typescript-eslint/ban-types': [
    'error',
    {
      "extendDefaults": true,
      "types": { '{}': false, "object": false },
    },
  ],
};
