module.exports = {
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "plugins": ["react"],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "mocha": true
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-unused-vars": [
      "error",
      {
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "react/display-name": [0],
    "react/no-render-return-value": [0],
    "react/prop-types": [0]
  }
};