import { minOperations } from "./CrawlerLogFolder";

test("0 test", () => {
  expect(minOperations(["../", "./", "../"])).toBe(0);
});

test("1 test", () => {
  expect(minOperations(["dir/", "../", "dir/"])).toBe(1);
});

test("lett code fail case 1.", () => {
  expect(
    minOperations(["./", "wz4/", "../", "mj2/", "../", "../", "ik0/", "il7/"])
  ).toBe(2);
});
