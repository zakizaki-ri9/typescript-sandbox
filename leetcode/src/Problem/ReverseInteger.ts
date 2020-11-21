/**
 * https://leetcode.com/problems/reverse-integer/
 */

const INT32_MIN = -2147483648;
const INT32_MAX = 2147483647;

function invalidNumber(x: number): boolean {
  return x === 0 || x <= INT32_MIN || x >= INT32_MAX;
}

// main
export function reverse(x: number): number {
  if (invalidNumber(x)) {
    return 0;
  }

  const isMinus = x < 0;
  const reverseNumber = parseInt(
    (isMinus ? -x : x).toString().split("").reverse().join("")
  );
  const result = isMinus ? -reverseNumber : reverseNumber;

  return invalidNumber(result) ? 0 : result;
}
