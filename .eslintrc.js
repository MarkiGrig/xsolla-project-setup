module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  root: false,
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-indent': ['error', 2],
  },
};
