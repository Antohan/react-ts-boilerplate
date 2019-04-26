module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'react-app'
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		project: './tsconfig.json',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		// typescript-eslint rules
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/indent': 'off',

		// Best practices
		'import/order': ['error', { 'newlines-between': 'always' }],
		'prettier/prettier': ['error', { singleQuote: true }]
	}
};
