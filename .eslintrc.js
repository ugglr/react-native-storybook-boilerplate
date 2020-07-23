module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: ['@react-native-community', 'eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'react-native', 'react-hooks'],
  rules: { semi: [2, 'never'] },
}
