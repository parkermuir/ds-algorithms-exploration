// #540

/*
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let right = nums[nums.length - 1];
  let left = 0

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
      return nums[mid];
    }

    if (mid % 2 === 0) {
      //even indexed mid
      if (nums[mid] === nums[mid + 1]) {
        //search in the right half
        left = mid + 1;
      } else {
        //search in the left half
        right = mid - 1;
      }
    } else {
      //odd indexed mid
      if (nums[mid] === nums[mid + 1]) {
        //search in the left half
        right = mid - 1;
      } else {
        //search in the right half
        left = mid + 1;
      }
    }
  }
};