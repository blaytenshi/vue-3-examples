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
    'arrow-body-style': ['error', 'as-needed'],
    'vue/multi-word-component-names': ['off'],
    '@stylistic/computed-property-spacing': ['error', 'never'],
    '@stylistic/function-call-spacing': ['error', 'never'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/no-confusing-arrow': ['error'],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/quotes': ['error', 'double'],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/space-infix-ops': ['error'],
  }
}