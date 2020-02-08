// 言語インターフェイス
export interface Language {
  name: string;

  toStringInfo(): string;
}

// 現実世界の言語インターフェイス
export interface RealLanguage extends Language {
  country: string;
}

// プログラミング言語インターフェイス
export interface ProgrammingLanguage extends Language {
  kind: string;

  compile(sourceCode: string): boolean;
}
