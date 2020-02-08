// 言語インターフェイス
interface Language {
  name: string;

  toStringInfo(): string;
}

// 現実世界の言語インターフェイス
interface RealLanguage extends Language {
  country: string;
}

// プログラミング言語インターフェイス
interface ProgrammingLanguage extends Language {
  kind: string;

  compile(sourceCode: string): boolean;
}

// 日本語クラス
class Japanese implements RealLanguage {
  name: string = "日本語";
  country: string = "日本";

  toStringInfo(): string {
    return `name: ${this.name}, country: ${this.country}`;
  }
}

// C#クラス
class CSharp implements ProgrammingLanguage {
  name: string = "C#";
  kind: string = "静的プログラミング言語";

  compile(sourceCode: string) {
    return !!sourceCode;
  }

  toStringInfo(): string {
    return `name: ${this.name}, kind: ${this.kind}`;
  }
}

const j = new Japanese();
const c = new CSharp();

console.log({
  j: j.toStringInfo(),
  c: c.toStringInfo(),
  compile: c.compile("test")
});
