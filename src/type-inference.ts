function arraySample() {
  let bArr: boolean[] = new Array()
  bArr.push(true)
  //bArr.push(1) // エラー

  let multiTypeArr: (string|number)[] = new Array()
  multiTypeArr.push('aaa')
  multiTypeArr.push(1)
  //multiTypeArr.push(true) // エラー
}

function tupleSample() {
  let t: [boolean, string]
  t = [false, 'test']
  //t = [true, 1] // エラー
}