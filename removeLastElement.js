var removeElement = function (nums, val) {
  let last = nums.length - 1;
  let i = 0;

  while (i <= last) {
    if (nums[i] === val) {
      [nums[i], nums[last]] = [nums[last], nums[i]];
      last--;
    } else {
      i++;
    }
  }
  return last + 1;
};