module.exports = {
  root: true,
  parserOptions: {
    parser: require.resolve('babel-eslint'),
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended', 'eslint:recommended'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'vue/max-attributes-per-line': 0,
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        excludeFiles: ['**/src/ExtraMarkers/**/*.*']
      }
    ],
    'object-shorthand': ['error', 'methods']
  },
  ignorePatterns: ['**/src/ExtraMarkers/'],
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}
