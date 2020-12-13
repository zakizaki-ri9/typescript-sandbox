export function longestCommonPrefix(strs: string[]): string {
  if (strs.length < 1) return "";
  else if (strs.length === 1) strs[0];

  let i = 0;
  let result = "";
  while (strs[0].length > i) {
    const s = strs[0][i];
    if (strs.slice(1).some((str) => str.length <= i || s !== str[i])) {
      break;
    }
    result += s;
    i++;
  }
  return result;
}
