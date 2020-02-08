CleanArchitecture本の咀嚼ディレクトリ

# [ISP: インターフェイス分離の原則](./isp/)

## 概要

- 静的型付言語の場合、インターフェイスが変更されると、それを実装してる具象クラスの再コンパイル・デプロイが必要となる
- それを避けるには、インターフェイスを分割すると良い
  - [サンプルコード](./isp/main.ts)を例にすると...
    - `ProgrammingLanguage`に`build`関数を追加しても、影響あるのは`ProgrammingLanguage`を実装している具象クラスのみとなる
    - `RealLanguage`を実装している具象クラスには影響を及ぼさない

## サンプルコード実行

```bash
# exec
npx ts-node ./isp/main.ts

# result
{
  j: 'name: 日本語, country: 日本',
  c: 'name: C#, kind: 静的プログラミング言語',
  compile: true
}
```

## 参考文献

- [Gist - インターフェイス分離の原則](https://github.com/SunriseDigital/work-shop/wiki/%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%95%E3%82%A7%E3%82%A4%E3%82%B9%E5%88%86%E9%9B%A2%E3%81%AE%E5%8E%9F%E5%89%87)
