module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': 'semistandard',
  'parserOptions': {
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      1,
      'single'
    ],
    'semi': [
      1,
      'never'
    ],
    'no-console': 1,
    'space-before-function-paren': 0,
    'no-multiple-empty-lines': [
      'off'
    ]
  },
  'globals': {
    '$': true,
    '__BROWSER__': true,
    '__DEV__': true,
    '__SIT__': true,
    '__UAT__': true,
    '__PROD__': true,
    'describe': true,
    'it': true
  }
}
