import { Japanese, CSharp } from "./classes";

const j = new Japanese();
const c = new CSharp();

console.log({
  j: j.toStringInfo(),
  c: c.toStringInfo(),
  compile: c.compile("test")
});
