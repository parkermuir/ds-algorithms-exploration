//#451

/*
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = {}
  let result = ''



  for (var i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] + 1 || 1
  }

  Object.keys(map).sort((a, b) => map[b] - map[a]).forEach((key) => {
    for (let j = 0; j < map[key]; j++)
      result += key
  })

  return result
};