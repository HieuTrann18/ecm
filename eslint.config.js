import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default defineConfig([
	globalIgnores(['dist', 'vite.config.js']),
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
		plugins: {
			prettier: eslintPluginPrettier,
		},
		rules: {
			'prettier/prettier': [
				'error',
				{
					singleQuote: true, // dùng dấu ' thay vì "
					semi: true, // luôn kết thúc dòng với ;
					trailingComma: 'all', // dấu , cuối cùng
					printWidth: 100, // độ dài tối đa 1 dòng
					tabWidth: 2, // số khoảng trắng 1 tab
					endOfLine: 'auto', // xử lý \n hoặc \r\n tự động
				},
			],
			'no-console': 'error',
			'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
		},
	},
]);
