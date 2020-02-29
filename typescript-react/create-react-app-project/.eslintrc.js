module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'react-app'],
  //   globals: {
  //     Atomics: 'readonly',
  //     SharedArrayBuffer: 'readonly'
  //   },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {},
  overrides: [
    // TypeScript系ファイルへのルールを設定
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module'
      },
      plugins: ['@typescript-eslint'],
      rules: {
        // interface等のメンバーを定義する際、複数行にまたがる場合はデミリタ無しとする (prettierとの競合解消)
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'none',
              requireLast: false
            },
            singleline: {
              delimiter: 'comma',
              requireLast: false
            }
          }
        ],
        '@typescript-eslint/interface-name-prefix': [
          'error',
          {
            prefixWithI: 'always'
          }
        ]
      }
    }
  ]
}
