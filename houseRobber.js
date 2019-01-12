//198

/*
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0];

  let memo = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < nums.length; i++) {
    memo.push(Math.max(memo[i - 2] + nums[i], memo[i - 1]));
  }

  return memo[memo.length - 1];
};