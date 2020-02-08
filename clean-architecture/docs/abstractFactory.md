# AbstractFactoryについての咀嚼内容

## Factory Method

- インスタンス化のロジックを子クラスに委譲する手段を提供する
  - インスタンス化対象の具象クラスをインターフェイスを用いて定義、戻り値の型をインターフェイスにするようなイメージ
    - [サンプルコード](../src/dip/abstractFactory/index.ts)を例にすると...
      - インスタンス化対象の具象クラス＝`CSharp` / `JavaScript`
      - インターフェイス＝`ProgrammingLanguage`
      - `make`＝FactoryMethod

## Abstract Factory

- ファクトリーをインターフェイスによって抽象化（グルーピング）すること

# 個人的に思うこと

- `createFactory`あたりは、もっとスマートにかけたらなと思う
  - Railsの`constantize`のように、文字列からクラス名を生成する仕組みがあると便利かも
  - 動的プログラミング言語ならではの動作かもだけど...

# 参考文献

- [TechRancho](https://techracho.bpsinc.jp/hachi8833/2017_10_02/46064#abstract-factory)
- [ブログ - Railsのソースコード読んでみる_|_Active_Support_constantize編](https://blog.shitake4.tech/entry/2018/09/06/Railsのソースコード読んでみる_|_Active_Support_constantize編)
