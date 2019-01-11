/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
  let pos = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++;
    }
    i++;
  }

  while (pos < nums.length) {
    nums[pos++] = 0;
  }
};

moveZeroes([1, 0]);