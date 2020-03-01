create-react-app x typescriptを用いたお試し

# 導入手順

## typescript系の導入

```bash
npm i --save-dev typescript @types/node @types/react @types/react-dom
```

## eslint / prettier系の導入

```bash
npm i --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-app
```

### package.json

eslintの設定内容によるチェック＆整形コマンドを追加

```json
{
  "scripts": {
    "lint-fix": "eslint --ext .ts,.js --fix src/**"
  }
}
```

# React系機能の咀嚼

## [React.lazy](https://ja.reactjs.org/docs/code-splitting.html#reactlazy)

- 遅延読み込みのための機能

```js
// コンポーネントの遅延読み込み
const EpisodeList = React.lazy<any>(() => import('./EpisodesList'))

export default function App(): JSX.Element {
  return (
  <React.Fragment>
    { /* EpisodeListが表示されるまでは、fallbackに指定した要素が表示される */ }
    <React.Suspense fallback={<div>Loading...</div>}>
      <section>
        <EpisodeList {...props}></EpisodeList>
      </section>
    </React.Suspense>
  </React.Fragment>
  )
}
```

## [コンテクスト - Context](https://ja.reactjs.org/docs/context.html#when-to-use-context)

- Redux / Vuexと比べて、スコープを絞った状態管理が行える
  - `React.createContext`で初期化
  - `Context.Provider`時に渡す`value`が子要素で使用できる
    - 使用するには`Context.Consumer`を使う
  - `React.createContext`したものをコード内で使用するには`React.useContext`を使う
- 注意点
  - 複数コンテクストを使用する場合は、複数コンテクストを扱うコンポーネントを作った方がよさそう
    - [複数のコンテクストを使用する](https://ja.reactjs.org/docs/context.html#consuming-multiple-contexts)

# [Reach Router](https://github.com/reach/router)

- React製のサードパーティRouter
- GatsbyJSでも使われている - [GatsbyJS - Routing](https://www.gatsbyjs.org/docs/routing/)

## 導入

```bash
npm i @reach/router
npm i -D @types/reach__router
```
