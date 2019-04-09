// #5

/*
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s.length || s.length === 1) return s;

  let maxPalindrome = s[0]

  for (let i = 0; i < s.length; i++) {
    let single = checkForSingleCenter(i, s);
    let double = checkForDoubleCenter(i, s);

    if (single.length > maxPalindrome.length) {
      maxPalindrome = single;
    }

    if (double.length > maxPalindrome.length) {
      maxPalindrome = double;
    }
  }

  return maxPalindrome;
};

const checkForSingleCenter = (index, s) => {
  let p1 = index - 1;
  let p2 = index + 1;

  if (s[p1] !== s[p2]) {
    return s[index];
  }

  while (s[p1] === s[p2] && p1 > -1 && p2 < s.length) {
    p1--
    p2++
  }

  return s.substring(p1 + 1, p2)
}

const checkForDoubleCenter = (index, s) => {
  let p1 = index;
  let p2 = index + 1;

  if (s[p1] !== s[p2]) {
    return 0;
  }

  while (s[p1] === s[p2] && p1 > -1 && p2 < s.length) {
    p1--
    p2++
  }

  return s.substring(p1 + 1, p2)
}