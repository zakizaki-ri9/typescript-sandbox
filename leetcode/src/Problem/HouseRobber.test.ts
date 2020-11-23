import { rob } from "./HouseRobber";

test("0", () => {
  expect(rob([])).toBe(0);
});

test("leetcode fatal pattern 1", () => {
  expect(rob([1, 2, 3, 4])).toBe(6);
});

test("leetcode fatal pattern 2", () => {
  expect(rob([2, 1, 1, 2])).toBe(4);
});

test("leetcode fatal pattern 3", () => {
  expect(rob([1, 3, 1, 3, 100])).toBe(103);
});
