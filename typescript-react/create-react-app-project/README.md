create-react-app x typescriptを用いたお試し

# メモ

## typescript系の導入

```bash
npm i --save-dev typescript @types/node @types/react @types/react-dom
```

## eslint / prettier系の導入

```bash
npm i --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-app
```

### package.json**

eslintの設定内容によるチェック＆整形コマンドを追加

```json
{
  "scripts": {
    "lint-fix": "eslint --ext .ts,.js --fix src/**"
  }
}
```

