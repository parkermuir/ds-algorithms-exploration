/*

Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
*/

const combinationSum = ( candidates, target) => {
  const solutions = [];

  const findCombos = (start, subtotal, combo ) => {
    if (subtotal = target) {
      return solutions.push(combo.slice());
    }

    if (subtotal > target) {
      return;
    }

    for (i = start; i< candidates.length; i++) {
      //add current candidate to our combo
      combo.push(candidates[i]);
      //see if including this candidate will get a result
      findCombos(i, );
    }

  }

};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2, 3, 6, 7], 9));

/*

II

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

let c1 = [10, 1, 2, 7, 6, 1, 5];
let t1 = 8;

let c2 = [2, 5, 2, 1, 2];
let t2 = 5;

// const combinationSumII = (candidates, target) => {
//   candidates.sort((a, b) => {
//     return a - b;
//   });
//   console.log(candidates);
//   let solutions = [];

//   const findCombos = (start, subtotal, combo) => {
//     if (subtotal === target) {
//       solutions.push(combo.slice());
//     } else {
//       for (let i = start; i < candidates.length; i++) {
//         if (candidates[i] > target - subtotal) {
//           continue;
//         }
//         if (i > start && candidates[i - 1] === candidates[i]) {
//           continue;
//         }
//         combo.push(candidates[i]);
//         console.log(combo);
//         subtotal += candidates[i];
//         findCombos(i + 1, subtotal, combo);
//         combo.pop();
//       }
//     }
//   };

//   findCombos(0, 0, []);
//   return solutions;
// };

const combinationSumII = (candidates, target) => {
  candidates.sort((a, b) => a - b);
  const solutions = [];

  const findCombos = (start, subtotal, combo) => {
    for (let i = start; i < candidates.length; i++) {
      console.log({i, start, subtotal, target});
      if (subtotal + candidates[i] === target) {
        solutions.push(combo.concat(candidates[i]));
      } else if (subtotal + candidates[i] < target && i + 1 < candidates.length) {
        findCombos(i + 1, subtotal + candidates[i], combo.concat(candidates[i]));
      }
      while (candidates[i + 1] === candidates[i]) {
        i++;
      }
    }
  };

  findCombos(0, 0, []);
  return solutions;
};


// console.log('solutions', combinationSumII(c1, t1));
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