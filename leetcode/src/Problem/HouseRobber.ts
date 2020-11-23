/**
 * https://leetcode.com/problems/house-robber/
 */

export function rob(nums: number[]): number {
  if (!nums.length) {
    return 0;
  }
  // else if (nums.length <= 1) {
  //   return nums[0]
  // }
  // else if (nums.length <= 2) {
  //   return nums[0] > nums[1] ? nums[0] : nums[1]
  // }

  const numsLength = nums.length;
  const totalNums = new Array<number>(numsLength);
  // let max = 0;
  nums.forEach((num, idx) => {
    if (idx < 2) {
      totalNums[idx] = num;
    } else {
      totalNums[idx] = num + Math.max(...totalNums.slice(0, idx - 1));
    }
    // if (max < totalNums[idx]) {
    //   max = totalNums[idx];
    // }
  });
  // return max;
  return Math.max(...totalNums);
}
