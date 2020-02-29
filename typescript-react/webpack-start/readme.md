# 概要

- 0からwebpackとreactの導入

# 手順

## npm install

```bash
# reactの導入
npm i react react-dom
npm i -D @types/react @types/react-dom

# webpack系の導入
npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript webpack webpack-cli webpack-dev-server babel-loader
```

## webpack.config.js

```js
const path = require('path')
const rules = [
  {
    test: /\.tsx?/,
    exclude: /\node_modules/,
    loader: 'babel-loader'
  }
]

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: { rules },
  resolve: {extensions: ['.ts', '.tsx', '.js']},
  devServer: {
    contentBase: './',
    port: 5000
  }
}
```
