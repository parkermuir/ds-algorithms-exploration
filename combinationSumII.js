var combinationSum2 = function (candidates, target) {
  let results = [];

  let createCombinations = (currentCombo, sum) => {
    if (sum === target) {
      results.push(currentCombo);
      return;
    }

    for (let i = 0; i < candidates.length; i++) {
      let num = candidates[i];
      if (!currentCombo.includes(num) && num + sum <= target) {
        createCombinations(currentCombo.concat(num), sum + num);
      }
    }
  }

  createCombinations([], 0)
  return results;
};