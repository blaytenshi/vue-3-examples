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
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/computed-property-spacing': ['error', 'never'],
    '@stylistic/function-call-spacing': ['error', 'never'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/multiline-ternary': ['error', 'always'],
    '@stylistic/no-confusing-arrow': ['error'],
    '@stylistic/no-trailing-spaces': ['error'],
    '@stylistic/no-whitespace-before-property': ['error'],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/operator-linebreak': ['error', 'before'],
    '@stylistic/quotes': ['error', 'double'],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/space-infix-ops': ['error'],
  }
}