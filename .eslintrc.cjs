module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-var": "error",
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "space-before-blocks": "error",
    "space-in-parens": ["error", "never"],
    "space-before-function-paren": ["error", "always"],
    "func-names": ["error", "as-needed"],
    "no-empty": ["error", { "allowEmptyCatch": true }],
    "indent": ["error", 2],
  },
}
