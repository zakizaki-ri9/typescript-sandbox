Svelte3 x TypeScript で Chrome拡張作る
---

# 手順
## TypeScript化

- プロジェクトから作る場合 ... [Try_it_now](https://svelte.dev/blog/svelte-and-typescript#Try_it_now)
- 既存プロジェクトへ追加する場合 ... [Adding_TypeScript_to_an_existing_project](https://svelte.dev/blog/svelte-and-typescript#Adding_TypeScript_to_an_existing_project)


## web-ext インストール

- https://github.com/mozilla/web-ext
  - Firefox向けの拡張機能 開発支援パッケージ
  - Chromeでも使える

```bash
npm i -D web-ext
```

## manifest.json

以下を元にChrome拡張機能の設定・権限情報を記述

- https://developer.chrome.com/docs/extensions/mv2/manifest/

## Chrome拡張機能のデバッグ

```bash
npx web-ext run --source-dir ./public/ --target=chromium --start-url github.com
```
