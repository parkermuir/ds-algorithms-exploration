/*
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let results = [];

  const build = (current, open, close) => {
    if (current.length === 2 * n) {
      results.push(current);
      return;
    }
    if (open < n) {
      build(current + '(', open + 1, close);
    }
    if (close < open) {
      build(current + ')', open, close + 1);
    }
  };

  build('', 0, 0);
  return results;
};