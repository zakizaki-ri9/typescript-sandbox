
# はじめに

## BFF

- BFF=Back for Frontendの略
- Ruby on Railsのようなフルスタックフレームワークは解体されてきている
  - B: RoR / F: Vue.js or React or etc...
- TypeScriptの静的型付けを利用することによってフロントを強固にする
  - また、サーバ側をNode.jsにすることによってサーバ・フロント含めて型による強固なアプリケーションにできる

# 開発環境

Visual Studio Code（以降、VS Code）前提で記載

## TypeScript Language Service

TypeScriptのIntelliSenseは、`tsserver.js`を含むディレクトリを`settion.json` > `typescript.tsdk`に設定する。

*設定例*

```json
{
  "typescript.tsdk": "./node_module/typescript/lib"
}
```

TypeScriptのバージョンを変更したい場合は、上記パスを変更する。

## `tsconfig.json`

`tsconfig.json`の雛形を生成。

```bash
tsc --init
```

## トランスパイル

`*.ts`を`*.js`にトランスパイルする。

```bash
tsc
```

`*.js`の出力形式は、`tsconfig.json`の以下で変化する。

```json
{
    "compilerOptions": {
      "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
      "module": "commonjs",
    }
}
```

## 型チェック

`tsconfig.json`の`strict`によって、型チェックが有効となる。

```json
{
    "compilerOptions": {
      "strict": true  /* Enable all strict type-checking options. */
    }
}
```

型の厳密さが固すぎる場合は、`strict: false`とする。

また、`strict: true`で以下の設定が有効となる。

- noImplictAny
- noImpictThis
- alwaysStrict
- strictBindCallApply
- strictNullChecks
- strictFunctionTypes
- strictPropertyInitialization

