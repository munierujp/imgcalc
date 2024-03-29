// @ts-check

// eslint-disable-next-line jsdoc/valid-types -- https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
/** @typedef {import('eslint').ESLint.ConfigData} ConfigData */

/**
 * @type {ConfigData}
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 */
const config = {
  root: true,
  extends: [
    '@munierujp/eslint-config-typescript',
    '@nuxt/eslint-config'
  ],
  parserOptions: {
    project: './tsconfig.json'
  }
}

module.exports = config
