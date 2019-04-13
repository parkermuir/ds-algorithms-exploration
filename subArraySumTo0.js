/*
https://www.geeksforgeeks.org/find-the-largest-subarray-with-0-sum/
*/

const a = [15, -2, 2, -8, 1, 7, 10, 23];


const subArray = (nums) => {
  let sums = {};
  let sum = 0;
  let maxSub = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    sum += num;
    if (sums.hasOwnProperty(sum)) {
      maxSub = Math.max(maxSub, i - sums[sum]);
    } else {
      sums[sum] = i;
    }
  }

  return maxSub;
};

console.log(subArray(a));