
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

// console.log(permute(['a', 'b', 'c']));

const permuteString = (string) => {
  //base case
  if (string.length <= 1) {
    return [string];
  }

  let remainingChars = string.slice(0, -1);
  let lastChar = string[string.length - 1];
  console.log({remainingChars, lastChar});

  //recurse to get all possible permutations of the reaminingChars string
  let tempPermutations = permuteString(remainingChars);


  const results = [];

  tempPermutations.forEach( (perm) => {
    for (let i = 0; i <= remainingChars.length; i++) {
      let temp = perm.slice(0, i) + lastChar + perm.slice(i);
      results.push(temp);
    }
  });


  return results;
};

console.log(permuteString('abce'));