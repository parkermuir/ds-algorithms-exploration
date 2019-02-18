// #45

/*
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let dp = new Array(nums.length).fill(0);

  for (let i = nums.length - 2; i >= 0; i--) {
    dp[i] = calculateMin(dp, i + 1, i + nums[i]) + 1;
  }

  return dp[0];
};

const calculateMin = (array, left, right) => {
  let min = Infinity;
  for (let i = left; i <= right && i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
};