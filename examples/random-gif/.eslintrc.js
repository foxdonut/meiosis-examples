module.exports = {
  "extends": [
    "eslint:recommended",
    "prettier"
  ],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": [
      "error",
      {
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "printWidth": 100,
        "semi": false,
        "singleQuote": false
      }
    ]
  },
  "plugins": [
    "prettier"
  ]
}
