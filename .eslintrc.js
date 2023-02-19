module.exports = {
  root: true,
  extends: [
    '@munierujp/eslint-config-typescript',
    '@nuxt/eslint-config'
  ],
  parserOptions: {
    project: './tsconfig.json'
  }
}
