/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
const config = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'next/core-web-vitals',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'eslint-comments',
    'jest',
    'jest-dom',
    'jest-formatting',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
    'testing-library',
    'unused-imports',
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/.storybook/**/*.{js,jsx,ts,tsx}',
          '**/*.{config,stories}.{js,jsx,ts,tsx}',
          '**/*.{test,spec}.{ts,tsx}',
          '**/test/**/*.{ts,tsx}',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/display-name': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: false,
        allowBind: false,
        allowFunctions: false,
        ignoreDOMComponents: false,
        ignoreRefs: false,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': 'error',
    'react/require-default-props': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          // Packages. `react` related packages come first.
          ['^react', '^next', '^@?\\w'],
          // Internal packages.
          [
            '^(@|@company|@ui|@backstage-app|@backstage-components|components|utils|config|vendored-lib)(/.*|$)',
          ],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-imports': 'off',
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
}
module.exports = config
