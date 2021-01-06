[いまからはじめる Svelte3](https://techbookfest.org/product/4925576424980480)の素振り

# 動かし方

```bash
# ローカル環境
npm i
npm run dev
```

# メモ

## svelte

REPL環境があるそう、お試しにいいかも。

- https://svelte.dev/repl/hello-world?version=3

## TypeScript導入

[Svelteが公式にTypeScriptに対応しました](https://qiita.com/myLifeAsaDog/items/92b0a89110d14bf59dba)に、日本語での解説あり

変更あるかもだから、上記記事で概要把握し、手を動かす際は以下の公式をベースにした方がいいかも

- [Svelte <3 TypeScript](https://svelte.dev/blog/svelte-and-typescript)

### 手順

JSベースのプロジェクトにTSを入れる感じ

```bash
npm i -D @tsconfig/svelte typescript svelte-preprocess svelte-check

# rollup.config.jsの内容に合わせて以下も追加
npm i -D svelte-preprocess @rollup/plugin-typescript
```

[Svelte <3 TypeScript](https://svelte.dev/blog/svelte-and-typescript)の内容に合わせて、以下も追加

```diff
// rollup.config.js
+ import autoPreprocess from 'svelte-preprocess';
+ import typescript from '@rollup/plugin-typescript';

export default {
  ...,
  plugins: [
    svelte({
+       preprocess: autoPreprocess()
    }),
+   typescript({ sourceMap: !production })
  ]
}
```

```diff
// tsconfig.json
{
+  "extends": "@tsconfig/svelte/tsconfig.json",
+  "include": ["src/**/*", "src/node_modules"],
+  "exclude": ["node_modules/*", "__sapper__/*", "public/*"],
}
```

## degit

- [npm](https://www.npmjs.com/package/degit)

# 参考記事

MDNに Svelte x TypeScript のサンプルが置いてあるのは驚き

- [Porting our to-do list app to TypeScript](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
- [Svelte3のストアを触ってみる](https://ushirock.hateblo.jp/entry/2019/07/24/121918)
