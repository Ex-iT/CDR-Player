import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistic: {
      indent: 2,
      quotes: 'single',
    },
  },
  {
    rules: {
      'style/brace-style': ['error', '1tbs'],
      'curly': ['error', 'all'],
      'vue/singleline-html-element-content-newline': ['error', {
        ignores: ['NuxtLink', 'abbr'],
      }],
      'unused-imports/no-unused-vars': ['error', {
        caughtErrorsIgnorePattern: '^_',
      }],
    },
  },
)
