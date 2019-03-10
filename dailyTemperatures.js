//# 739

/*
 * @pram {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {

  let results = new Array(T.length).fill(0);
  let stack = [[0, T[0]]];

  for (let i = 1; i < T.length; i++) {
    let temperature = T[i];
    while (stack.length !== 0 && temperature > stack[stack.length - 1][1]) {
      let current = stack.pop();
      results[current[0]] = i - current[0];
    }
    stack.push([i, temperature]);
  }

  return results;
};