module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:vue/recommended', 'airbnb-base'],
  plugins: ['vue'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'linebreak-style': 0,
    'import/no-cycle': 'off',
    'no-bitwise': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': ['error', { allow: ['error'] }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'store', // for vuex store
          'state', // for vuex state
        ],
      },
    ],
    'vue/no-unused-properties': ['error', {
      groups: ['props', 'data', 'computed', 'methods', 'setup'],
    }],
  },
};
