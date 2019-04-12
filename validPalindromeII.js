// #680

/*
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    if (s[start] === s[end]) {
      start++;
      end--;
    } else {
      return isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1);
    }
  }

  return true;
};

const isPalindrome = (s, left, right) => {
  while (left <= right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
