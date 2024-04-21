module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['xo', 'prettier', 'plugin:tailwindcss/recommended'],
	ignorePatterns: ['**/*.css'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			extends: ['xo-typescript'],
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/semi': 'off',
				'@typescript-eslint/no-unused-vars': 'error',
				'@typescript-eslint/object-curly-spacing': ['error', 'always'],
				'prettier/prettier': 'error',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react', 'tailwindcss', 'prettier'],
	rules: {},
}
