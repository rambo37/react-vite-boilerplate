import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: [
      // Dependencies
      '**/node_modules/**',
      '**/.pnp/**',
      '**/.pnp.js',

      // Testing
      '**/coverage/**',

      // Production
      '**/dist/**',
      '**/build/**',

      // Misc
      '**/.DS_Store',
      '**/*.pem',

      // Debug
      '**/npm-debug.log*',
      '**/yarn-debug.log*',
      '**/yarn-error.log*',

      // Local env files
      '**/.env*.local',

      // Vercel
      '**/.vercel/**',

      // TypeScript
      '**/*.tsbuildinfo',
      '**/next-env.d.ts'
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      prettier: prettierPlugin
    },
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Disable legacy JSX import rule for React 17+
      'prettier/prettier': 'error',
      'react-refresh/only-export-components': 'warn'
    }
  }
];
