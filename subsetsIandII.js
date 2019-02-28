// #78 Subsets (no duplicates)

var subsets = function (nums) {
  let results = []

  const createSets = (nums, start, current) => {
    results.push([...current])

    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);
      createSets(nums, i + 1, current)
      current.pop()
    }
  }
  createSets(nums, 0, [])
  return results
}

// #90 Subsets II, has duplicates

var subsetsWithDup = function (nums) {
  let powerSet = [];
  nums.sort((a, b) => {
    return a - b;
  });

  createSubsets(nums, 0, [], powerSet);
  return powerSet;
};


const createSubsets = (nums, start, tempSet, results) => {
  results.push(tempSet.slice())

  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) {
      continue;
    } else {
      tempSet.push(nums[i]);
      createSubsets(nums, i + 1, tempSet, results);
      tempSet.pop();
    }
  }
}