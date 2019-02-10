// #70

// const climbStairs = (n) => {
//   let count = 0;

//   const climb = (stairs) => {
//     if (stairs === n) {
//       count++
//       return;
//     }
//     if (stairs > n) {
//       return;
//     }

//     climb(stairs + 1)
//     climb(stairs + 2)
//   }

//   climb(0)
//   return count;
// };

const climbStairs = (n) => {
  let results = new Array(n + 1);
  results[0] = 1;
  results[1] = 1;

  for (let i = 2; i < results.length; i++) {
    results[i] = results[i - 2] + results[i - 1];
  }

  return results[results.length - 1];
};