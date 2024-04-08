module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['xo', 'plugin:prettier/recommended'],
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
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {},
}
