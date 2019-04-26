# react-ts-boilerplate

Creating Web Application with using ReactJS + TypeScript.

Also looks to [React+TypeScript Cheatsheets](https://github.com/sw-yx/react-typescript-cheatsheet)

## Step 1

#### Create a project

TypeScript is supported natively in Create React App. You can use `create-react-app` with `--typescript` flag.

> npx create-react-app my-app --typescript

Instruction for adding TypeScript into the project you can see [here](https://facebook.github.io/create-react-app/docs/adding-typescript).

Initially `create-react-app` add TypeScript into `dependencies`. The reason for this [here](https://github.com/facebook/create-react-app/issues/6180#issuecomment-453640473). But as Dan says "_It doesn't matter in practice._" so move types dependencies into `devDependencies`.

Don't forget remove `node_modules` and execute `npm install / yarn install`.

## Step 2

#### Enable modular styles.

CSS Modules work out of the box in Create React App.

For this need run command `npm run eject / yarn eject`.

Then update your webpack config (`./config/webpack.config.js`):

```js
test: cssRegex,
exclude: cssModuleRegex,
use: getStyleLoaders({
  importLoaders: 1,
  modules: true,
  localIdentName: '[name]__[local]__[hash:base64:5]',
  sourceMap: isEnvProduction && shouldUseSourceMap,
}),
```

Now you have to rename your css files to `*.module.css`.

## Step 3

#### Add linting to the project.

Will use ESLint for linting `*.ts` and `*.tsx` files. More about tool for linting TS with ESLint see [here](https://github.com/typescript-eslint/typescript-eslint).

Add prettier in the project. Run:

> yarn add -D prettier eslint-plugin-prettier eslint-config-prettier

or

> npm i -D prettier eslint-plugin-prettier eslint-config-prettier

Remove `eslintConfig` from `package.json` and create `.eslintrc.js` file.

Add configure

```js
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
```

You free to add rules which you prefer.

#### Add git hooks

Install [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)

> yarn add -D husky lint-staged

or

> npm i -D husky lint-staged

Update `package.json`

```json
{
	"husky": {
		"hooks": {
			"pre-commit": "tsc --noEmit && lint-staged"
		}
	},
	"lint-staged": {
		"src/**/*.{js,jsx,ts,tsx}": ["npm run lint:fix", "git add"]
	}
}
```
