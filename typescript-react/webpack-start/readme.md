# 概要

- 0からwebpackとreactの導入

# 導入手順

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

  // webpack-dev-serverの設定
  devServer: {
    contentBase: './',
    port: 5000
  }
}
```

# React系のメモ

## [フラグメント](https://ja.reactjs.org/docs/fragments.html)

- DOMに余分なノードを追加することないように子要素をまとめることができる

```js
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}

class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
```

と記述した場合、

```html
<table>
  <tr>
    <div>
      <td>Hello</td>
      <td>World</td>
    </div>
  </tr>
</table>
```

と、Fragment内の要素がそのまま出力される。

