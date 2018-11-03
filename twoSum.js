
var a = [ 1, 3, 4, 5, 2, 10, 8];
var b = [ 2, 4, 8, 9, 7];
var c = [ 1, 3, 34, 5, 2, 6, 8];

//return index of numbers that sum to target
//O(n)
const twoSum = ( nums, target ) => {
  let storage = {};
  let results = [];
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (storage.hasOwnProperty(complement)) {
      // return [ storage[complement], i ];
      results.push([ storage[complement], i ]);
    } else {
      storage[nums[i]] = i;
    }
  }
  return results;
};

console.log(twoSum(a, 3));
console.log(twoSum(b, 15));
console.log(twoSum(c, 3));


/*Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?*/

const booleanTwoSum = (nums, k) => {
  let history = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    history[num] = null;
    if (history.hasOwnProperty(k-num)) {
      return true;
    }
  }
  return false;
}

console.log(booleanTwoSum(a, 3));
console.log(booleanTwoSum(b, 15));
console.log(booleanTwoSum(c, 55));