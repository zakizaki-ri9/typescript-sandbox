
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


