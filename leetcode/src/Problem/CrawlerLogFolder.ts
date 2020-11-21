/**
 * https://leetcode.com/problems/crawler-log-folder/
 */

export function minOperations(logs: string[]): number {
  let count = 0;
  for (const l of logs) {
    // // const dir = l.split('/')[0];
    // const dir = l.slice(0, l.length-1);
    // if (!(dir === '.' || (dir === '..' && count < 1))) {
    //   count += dir !== '..' ? 1 : -1;
    // }
    if (!(l === "./" || (l === "../" && count < 1))) {
      count += l !== "../" ? 1 : -1;
    }
  }
  return count;
}
