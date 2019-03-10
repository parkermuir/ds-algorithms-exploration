//# 40
var combinationSum2 = function (candidates, target) {
  let results = [];

  candidates = candidates.sort((a, b) => {
    return a - b;
  });

  console.log(candidates);

  let createCombinations = (currentCombo, sum, start) => {
    if (sum === target) {
      results.push(currentCombo);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      let num = candidates[i];

      if (i !== start && num === candidates[i - 1]) { continue; }

      if (num + sum <= target) {
        createCombinations(currentCombo.concat(num), sum + num, i + 1);
      }
    }
  };

  createCombinations([], 0, 0);
  return results;
};