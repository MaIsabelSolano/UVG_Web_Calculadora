module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    parser: "@babel/eslint-parser",
  },
  plugins: [
    'react', 'html', 'css', 'json'
  ],
  rules: {
    "indent":["error", 4],
    "semi":["error", "never"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "linebreak-style": ["error", "windows"],
    "react/jsx-indent": ["error", 4],
    "space-in-parens": ["error", "never"],
    "no-alert": "error",
    "react/jsx-indent-props": ["error", 4],
    "no-else-return": "error",
    "react/jsx-wrap-multilines":"off",
    "react/function-component-definition":"off",
    "semi-style": ["error", "last"],
    "import/extensions":"off",
    "arrow-body-style":["error", "as-needed"],
    "no-lonely-if":"off",
  },
};
