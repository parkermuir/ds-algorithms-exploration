// #503

/*
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let results = [];
  let stack = [];
  let count = 2;

  while (count > 0) {

    for (let i = nums.length - 1; i >= 0; i--) {
      while (nums[stack[stack.length - 1]] <= nums[i] && stack.length !== 0) {
        stack.pop();
      }

      if (stack.length === 0) {
        results[i] = -1;
      } else {
        results[i] = nums[stack[stack.length - 1]];
      }

      stack.push(i);
    }

    count--;
  }

  return results;
};