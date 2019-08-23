export function sample() {
  let someValue: any = "this is a string"

  // <type>でアサーション
  let a1: number = (<string>someValue).length
  
  // asでアサーション
  let a2: number = (someValue as string).length
}
