module.exports = {
  "extends": ["eslint:recommended"],
  "plugins": ["import", "modules-newline"],
  "rules": {
    "semi": [2, "always"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "object-curly-spacing": ["error", "always"],
    "object-curly-newline": ["error", { "multiline": true, "minProperties": 4 }],
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", ["parent", "sibling"]],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true,
        },
      },
    ],
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", ""],
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
