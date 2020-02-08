import { RealLanguage, ProgrammingLanguage } from "../interfaces";

// 日本語クラス
export class Japanese implements RealLanguage {
  name: string = "日本語";
  country: string = "日本";

  toStringInfo(): string {
    return `name: ${this.name}, country: ${this.country}`;
  }
}

// C#クラス
export class CSharp implements ProgrammingLanguage {
  name: string = "C#";
  kind: string = "静的プログラミング言語";

  compile(sourceCode: string) {
    return !!sourceCode;
  }

  toStringInfo(): string {
    return `name: ${this.name}, kind: ${this.kind}`;
  }
}

// JavaScriptクラス
export class JavaScript implements ProgrammingLanguage {
  name: string = "JavaScript";
  kind: string = "動的プログラミング言語";

  compile(sourceCode: string) {
    return !!sourceCode;
  }

  toStringInfo(): string {
    return `name: ${this.name}, kind: ${this.kind}`;
  }
}
