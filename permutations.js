
// #46


var permute = function (nums) {
  let results = [];

  const generatePermutations = (current) => {
    if (current.length === nums.length) {
      return results.push(current);
    }

    for (let i = 0; i < nums.length; i++) {
      //if current element is not in the current permutation being built, concat it and recurse
      if (current.indexOf(nums[i]) === -1) {
        generatePermutations(current.concat(nums[i]));
      }
    }

  };

  generatePermutations([]);
  return results;
};

console.log(permute(['a', 'b', 'c']));