// @ts-check

const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    // see source: https://github.com/bamlab/react-native-project-config/blob/main/packages/eslint-plugin/lib/configs/recommended.js
    'plugin:@bam.tech/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  overrides: [
    {
      // test files
      files: ['**/*.test.ts', '**/*.test.tsx', '__mocks__/**', '**/jest-*'],
      extends: 'plugin:@bam.tech/tests',
      rules: {
        'jest/no-restricted-matchers': [
          'error',
          {
            toMatchSnapshot:
              'Use toMatchComponentSnapshot for components and toMatchInlineSnapshot otherwise',
          },
        ],
      },
    },
    {
      // config files that use CommonJS
      files: [
        '.eslintrc.js',
        'babel.config.js',
        'jest.config.js',
        'prettier.config.js',
        'app.config.js',
      ],
      rules: {
        'testing-library/no-await-sync-events': 'error',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
});
