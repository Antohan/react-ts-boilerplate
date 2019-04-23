# react-ts-boilerplate
Creating Web Application with using ReactJS + TypeScript.

## First things first
TypeScript is supported natively in Create React App. You can use `create-react-app` with `--typescript` flag.

>npx create-react-app my-app --typescript

Instruction for adding TypeScript into the project you can see [here](https://facebook.github.io/create-react-app/docs/adding-typescript).

Initially `create-react-app` add TypeScript into `dependencies`. The reason for this [here](https://github.com/facebook/create-react-app/issues/6180#issuecomment-453640473). But as Dan says "*It doesn't matter in practice.*" so move types dependencies into `devDependencies`.

Don't forget remove `node_modules` and execute `npm install / yarn install`.

## Second thing second

Enable modular styles.

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
