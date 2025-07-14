import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react/prop-types': 'off', // Desabilitar para projetos sem PropTypes
      'react/react-in-jsx-scope': 'off', // Não necessário com React 17+
      'no-console': 'warn', // Avisar sobre console.log em produção
      'prefer-const': 'error', // Preferir const sobre let
      'no-var': 'error', // Não usar var
      'object-shorthand': 'error', // Usar shorthand quando possível
      'prefer-template': 'error', // Preferir template literals
    },
  },
])
