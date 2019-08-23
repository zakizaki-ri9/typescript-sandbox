
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

## トランスパイル（ts→js）

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

また、`tsconfig.json`の以下でトランスパイルする`*.ts`のパス、`*.js`の出力先を変更することが可能。

```json
{
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": [
    "src/**/*"
  ]
}
```

### JavaScriptファイルをトランスパイルに含む

**JavaScriptからTypeScriptへ移行する場合**に、有効にすると良い。

`tsconfig.json`の以下オプションを有効にする。

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true
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

## 型宣言ファイル

`tsconfig.json`を以下設定とすることで、型定義（`*.d.ts`）を利用できる。

主にライブラリ開発で、使用する側に型を通知するために使用する。

```json
{
  "compilerOptions": {
    "declaration": true
  }
}
```

### 出力例

*test.ts*

```typescript
export function test1(arg: string) {
  return `test ${arg}`
}

export function test2() {
  return {
    key: 1,
    value: "sample"
  }
}
```

*test.d.ts*

```typescript
export declare function test1(arg: string): string;
export declare function test2(): {
    key: number;
    value: string;
};
```

## 型定義を利用（参照）する

TypeScriptの型定義のおおよそは、[DefinitelyTyped](https://definitelytyped.org/)に定義されている。

デフォルトでは、`node_modules/@types`に含まれる全パッケージがコンパイル対象と見なされる。

`tsconfig.json`の以下オプションでパスを指定した場合、**パス配下のパッケージのみ**がコンパイル対象となる。

```json
{
  "compilerOptions": {
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
  }
}
```

以下のオプションを指定した場合は、`node_modules/@types/`配下の指定したパッケージのみが対象となる。

```json
{
  "compilerOptions": {
    "types": ["node", "lodash"]
  }
}
```

# 型について

## any型とunknown型

any型は代入も利用（メソッド呼び出し）含めて無制限だが、unknown型は代入OK・利用NGという感じ。

```typescript
let aVal: any = 100
let uVal: unknown = 200

console.log(aVal.toString()) // OK
console.log(uVal.toString()) // エラー
```

unknown型だったら〜みたいな処理分けをするような使い道。

## Intersection（Types型の結合）

TypeScriptでは型の結合が行える。

```typescript
type Dog = {
  tail: 'tail',
  bark: () => void
}

type Bird = {
  wing: 'wing',
  fly: () => void
}

type Kimera = Dog & Bird
```

## アサーション（個人的にはキャストの表現に近い）

any型で宣言した変数に対して、アサーション（宣言を行うことができる。

※アサーション＝過去の言語を経験した感じ、個人的にはキャストの表現に近い感じ。

```typescript
export function sample() {
  let someValue: any = "this is a string"

  // <type>でアサーション
  let a1: number = (<string>someValue).length
  
  // asでアサーション
  let a2: number = (someValue as string).length
}
```

# 型推論

## ライブラリ

`import` or `dynamic import`した場合でないと型推論が効かない。

`require`では、推論が効かないので注意。

## JSON

`tsconfig.json`の以下設定を有効にすることで型推論が可能。

```json
{
  "compilerOptions": {
    "resolveJsonModule": true,
    "esModuleInterop": true                   /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
  }
}
```

```json
{
  "root": {
    "id": 1,
    "name": "sample1"
  }
}
```

```typescript
import sample from './json/sample.json'

console.log({
  id: sample.root.id,
  name: sample.root.name
})
```
