# `@notus/eslint-config-base`

A super-strict TypeScript linting configuration for enforcing best practices.

### Installation

First, install the needed development dependencies:

```sh
# Ensure TypeScript and the TS ESLint parser are installed
npm install --save-dev typescript @typescript-eslint/parser
# Ensure ESLint & Prettier are installed
npm install --save-dev eslint prettier
# Install plugins used by @notus/eslint-config-base
npm install --save-dev @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-prettier eslint-plugin-jsdoc eslint-plugin-tsdoc eslint-plugin-array-func eslint-plugin-eslint-comments eslint-plugin-node

# Install the Notus ESLint config
npm install --save-dev @notus/eslint-config-base
```

### Usage

Then, configure your ESLint to use the Notus configuration. An example ESLint configuration is provided below:

```js
module.exports = {
  root: true,

  // Make ESLint compatible with TypeScript
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // Enable linting rules with type information from our tsconfig
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],

    // Allow the use of imports / ES modules
    sourceType: 'module',

    ecmaFeatures: {
      // Enable global strict mode
      impliedStrict: true,
    },
  },

  // Specify global variables that are predefined
  env: {
    node: true, // Enable node global variables & Node.js scoping
    es2020: true, // Add all ECMAScript 2020 globals and automatically set the ecmaVersion parser option to ES2020
  },

  plugins: [],
  // extends: ['@notus/eslint-config-base'],
  extends: ['@notus/eslint-config-base/loose'],
  rules: {},
  overrides: [],
}
```
