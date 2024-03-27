module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  plugins: [
    '@stylistic'
  ],
  rules: {
    '@stylistic/indent': ['error', 2],
    '@stylistic/no-confusing-arrow': ['error'],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/quotes': ['error', 'double'],
    '@stylistic/semi': ['error', 'always'],
  }
}