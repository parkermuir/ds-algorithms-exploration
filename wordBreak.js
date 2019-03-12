// # 139

/*
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (string, wordDict) {
  let wordSet = new Set(wordDict);
  let q = [0];

  while (q.length > 0) {
    let start = q.shift();
    for (let i = start; i < string.length; i++) {
      let temp = string.substring(start, i + 1);

      if (wordSet.has(temp)) {
        if (i + 1 >= string.length) {
          return true;
        }
        q.push(i + 1);
        checked.add(string.substring(0, i + 1));
      }
    }


  }

  return false;
};