module.exports = {
    parser: 'babel-eslint',
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    extends: [
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'airbnb',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    plugins: [
      'react',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {
      'import/prefer-default-export': 'off',
      'react/jsx-props-no-spreading': 'off',
    },
  };
