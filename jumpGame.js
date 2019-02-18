// #55

/*
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let dp = new Array(nums.length).fill(null)
  dp[nums.length - 1] = true;

  for (let i = nums.length - 2; i >= 0; i--) {
    dp[i] = checkWay(dp, i + 1, i + nums[i]);
  }

  return dp[0]
};

const checkWay = (dp, left, right) => {
  for (let i = right || dp[dp.length - 1]; i >= 0; i--) {
    if (dp[i] === true) return true
  }
  return false
}