/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
*/

c1 = [10, 1, 2, 7, 6, 1, 5];
t1 = 8;

c2 = [2, 5, 2, 1, 2];
t2 = 5;

const combinationSumII = (candidates, target) => {
  candidates = candidates.sort((a, b) => {
    return a - b;
  });

  let solutions = [];

  const findCombos = (start, subtotal, combo) => {
    for (let i = start; i < candidates.length; i++) {

      if (subtotal + candidates[i] === target) {
        combo.push(candidates[i]);
        solutions.push(combo.slice());
      } else if (subtotal + candidates[i] < target && i + 1 < candidates.length) {
        combo.push(candidates[i]);
        subtotal += candidates[i];
        console.log(combo);
        findCombos(i + 1, subtotal, combo);
        combo.pop();
      }

      while (candidates[i + 1] === candidates[i]) { i++; }
    }

  };

  findCombos(0, 0, []);
  return solutions;
};

combinationSumII(c1, t1)
console.log('solutions', combinationSumII(c1, t1));
// console.log(combinationSumII(c2, t2));










/*
III

Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Note:

All numbers will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Example 2:

Input: k = 3, n = 9
Output: [[1,2,6], [1,3,5], [2,3,4]]
*/

const combinationSumIII = (k, n) => {


}