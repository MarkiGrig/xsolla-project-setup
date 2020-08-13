module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  root: false,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
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
    'react/prop-types': 0,
  },
};
