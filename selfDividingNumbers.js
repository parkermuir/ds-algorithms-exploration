//728


var selfDividingNumbers = function (left, right) {
  let results = [];

  for (let i = left; i <= right; i++) {
    let nums = i.toString().split('').map(num => Number(num));
    let isDivisible = true;
    for (let j = 0; j < nums.length; j++) {
      if (i % nums[j] !== 0) {
        isDivisible = false;
      }
    }
    if (isDivisible) { results.push(i); }
  }

  return results;
};

console.log(selfDividingNumbers(1, 22));
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]);
console.log(22[1]);