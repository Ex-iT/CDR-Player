module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
  },
}
