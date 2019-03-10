//#76 Minimum Window Substring
/*
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let min = s;
  let left = 0;
  let right = 0;
  let target = makeFreqHash(t)
  let current = {};

  while (right < s.length) {
    if (target.hasOwnProperty(s[right])) {
      current[s[right]] = current[s[right]] + 1 || 1
    }

    while (isValid(target, current)) {
      if (right - left + 1 < min.length) {
        min = s.substring(left, right + 1);
      }
      if (current.hasOwnProperty(s[left])) {
        current[s[left]]--
      }
      left++
    }
    right++
  }

  return min;
};

const makeFreqHash = (string) => {
  let result = {};
  for (let i = 0; i < string.length; i++) {
    result[string[i]] = result[string[i]] + 1 || 1;
  }
  return result;
}

const isValid = (target, current) => {
  for (key in target) {
    if (!current[key] || current[key] < target[key]) {
      return false;
    }
  }
  return true;
}