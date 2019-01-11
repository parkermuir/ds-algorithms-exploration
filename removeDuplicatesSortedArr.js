/*
 * @param {number[]} nums
 * @return {number}
 */

const a = [1, 2, 1, 2, 2, 3, 4, 4, 4, 4, 5];

const removeDuplicates = (nums) => {
  // let pos = 1;
  // for (let i = 1; i < nums.length; i++) {
  //   console.log({i, pos, nums});
  //   if (nums[i] !== nums[pos - 1]) {
  //     nums[pos] = nums[i];
  //     pos++;
  //   }
  // }
  // return pos;

  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      j++;
    } else {
      nums[i + 1] = nums[j];
      i++;
      j++;
    }
  }

  return i + 1;

};

console.log('removeDuplicates(a);: ', removeDuplicates(a));
console.log('a: ', a);