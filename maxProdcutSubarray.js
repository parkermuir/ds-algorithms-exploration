//#152

/*
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let min = 1;
  let max = 1;
  let overallMax = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const prevMin = min;
    const prevMax = max;
    min = Math.min(num, num * prevMax, num * prevMin);
    max = Math.max(num, num * prevMax, num * prevMin);
    console.log({ min, max });
    overallMax = Math.max(overallMax, max);
  }

  return overallMax;
};