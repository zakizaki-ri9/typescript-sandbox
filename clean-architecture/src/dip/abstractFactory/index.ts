import { ProgrammingLanguage } from "../../interfaces/index";
import { CSharp, JavaScript } from "../../isp/classes";

interface ProgrammingLanguageFactory {
  make(): ProgrammingLanguage;
}

class CSharpFactory implements ProgrammingLanguageFactory {
  make(): ProgrammingLanguage {
    return new CSharp();
  }
}

class JavaScriptFactory implements ProgrammingLanguageFactory {
  make(): ProgrammingLanguage {
    return new JavaScript();
  }
}

const createFactory = (): ProgrammingLanguageFactory | null => {
  switch (process.argv[2]) {
    case CSharp.name:
      return new CSharpFactory();
    case JavaScript.name:
      return new JavaScriptFactory();
  }
  return null;
};

const c = createFactory();
console.log({
  argv2: process.argv[2],
  f: !!c ? c.make().toStringInfo() : "Factory is Null."
});
