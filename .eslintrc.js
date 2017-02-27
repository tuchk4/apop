module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "jest": true
  },

  "sourceType": "module",
  "extends": "eslint-config-airbnb",

  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "arrowFunctions": true,
      "blockBindings": true,
      "destructuring": true,
      "modules": true,
      "spread": true,
      "templateStrings": true,
      "forOf": true
    },
  },
  "rules": {
    "no-param-reassign": [2, {
      "props": false
    }],
    "no-confusing-arrow": ["error", {"allowParens": true}]
  }
};