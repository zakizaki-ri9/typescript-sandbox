export function bracketsTest() {
  let b1: {} = false
  // let o1: object = false // error

  let b2 = { test: 'test' }
  let b3 = { test: 'test', test2: 2 }
  // b2 = b1  // testプロパティが定義されていないため、コンパイルエラー
  b2 = b3 // OK
  // b3 = b2  // test2プロパティが定義されていないため、コンパイルエラー
}
