import { longestCommonPrefix } from "./LongestCommonPrefix";

test("Wrong case 1", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
});
