![npm (scoped with tag)](https://img.shields.io/npm/v/@jetrockets/eslint-config-react/latest?color=%2300E400&label=eslint-config-react&logo=react&logoColor=%23fff&style=flat-square)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jetrockets/eslint-config">
    <img src="https://github.com/jetrockets/eslint-config/raw/master/images/react-pkg-logo.png" alt="Logo" width="480">
  </a>

  <h3 align="center">JetRockets Standarts</h3>

  <p align="center">
    A react lint configuration for your JetRockets projects
    <br />
    <a href="https://github.com/jetrockets/eslint-config/issues">Report Bug</a>
    ·
    <a href="https://github.com/jetrockets/eslint-config/issues">Request Feature</a>
  </p>
</div>
<br />

<!-- GETTING STARTED -->

## Getting Started

A package for react linter configuration of javascript code

1. Install package
   ```sh
   npm install @jetrockets/eslint-config-base@latest @jetrockets/eslint-config-react@latest
   ```
2. Enter your API in `.eslintrc.js`
   ```js
   module.exports = {
     extends: [
      '@jetrockets/eslint-config-base',
      '@jetrockets/eslint-config-typescript', // if you are using typescript in project
      '@jetrockets/eslint-config-react',
      ...
    ],
    ...
   }
   ```
   <p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Let's make the best linter ever! Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingRule`)
3. Commit your Changes (`git commit -m 'Add some AmazingRule'`)
4. Push to the Branch (`git push origin feature/AmazingRule`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>
