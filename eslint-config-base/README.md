![npm (scoped with tag)](https://img.shields.io/npm/v/@jetrockets/eslint-config-base/latest?color=%2300E400&label=eslint-config-base&logo=javascript&logoColor=%23fff&style=flat-square)

# JetRockets ESLint Standarts | Base 🚀

<div align="center">
  <a href="https://github.com/jetrockets/eslint-config">
    <img src="https://github.com/jetrockets/eslint-config/raw/master/images/base-pkg-logo.png" alt="Logo" width="480">
  </a>
</div>

Esteemed Developers,

We extend our warmest welcome to the JetRockets Internal ESLint Config package. This meticulously curated npm package offers a standardized ESLint configuration tailored exclusively for internal employment within JetRockets. Our configuration is steadfastly committed to the pursuit of code excellence, adherence to optimal practices, and the establishment of unwavering consistency throughout our projects. ✨

## Installation Instructions ⚙️

For the integration of our ESLint configuration into your esteemed projects, kindly proceed with installation via either npm or yarn:

```sh
npm install @jetrockets/eslint-config --save-dev
```

or

```sh
yarn add @jetrockets/eslint-config --dev
```

We cordially invite you to explore our presence on npm (https://www.npmjs.com/package/@jetrockets/eslint-config) as well.

## Configuration Guidelines 🛠️

The implementation of JetRockets' ESLint configuration necessitates an extension within your project's .eslintrc.js or .eslintrc.json file:

```json
{
  "extends": "@jetrockets/eslint-config"
}
```

## Custom Alias Advancement 🛤️

To augment your code with custom aliases, we present the `eslint-import-resolver-custom-alias` package. To get started:

1. Install the plugin:

```sh
npm install --dev eslint-import-resolver-custom-alias
```

or

```sh
yarn add --dev eslint-import-resolver-custom-alias
```

2. Update your configuration to incorporate the aliases:

```json
{
  "extends": "@jetrockets/eslint-config",
  "settings": {
    "import/resolver": {
      "eslint-import-resolver-custom-alias": {
        "alias": {
          "src": "./src"
        },
        "extensions": [".js", ".jsx"],
        "packages": [
          "packages/*"
        ]
      }
    }
  }
}
```

## Noteworthy Features ✨

- Our configuration boasts the inclusion of Standard ESLint (https://github.com/standard/standard) rules, thereby facilitating the adherence to a uniform coding style across all projects.

- The Spell Plus (https://github.com/username/spell-plus) plugin has been seamlessly incorporated to verify the accuracy of spelling within comments and strings, thus contributing to a level of code documentation that is both lucid and professional. 📖✍️

- Beyond the realm of JavaScript files, our configuration extends its support to encompass HTML and JSON formatters, thereby ensuring the unification of code quality across an array of file types. 🌈

## Operational Advantages 🚀

Upon the embrace of our internal ESLint configuration, a myriad of advantages await:

- Uniformity in Coding: Our rules serve as the compass guiding uniform coding style across diverse projects, fostering seamless collaboration amongst developers.

- Quality Assurance: Our designated rules are engineered to detect common programming pitfalls, leading to a heightened standard of code quality and dependability.

- Precision in Documentation: The Spell Plus plugin stands vigilant against spelling errors in comments and strings, culminating in code documentation of a professional and comprehensible nature. 📚✨

## Collaborative Endeavors 🤝

The JetRockets team fervently welcomes contributions aimed at the enhancement and refinement of our internal ESLint configuration. Should you possess insights, encounter defects, or hold aspirations of introducing novel features, we extend an invitation to open issues or submit pull requests within our GitHub repository (https://github.com/jetrockets/eslint-config).

## Legal Perimeter 📝

This endeavor is safeguarded by the MIT License (https://opensource.org/licenses/MIT).

---

Conceived with diligence by the JetRockets Collective. To glean further insights about us, please visit https
