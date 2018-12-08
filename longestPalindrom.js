
//find longest palindrome from input string

const a = 'aaabbbbccc';
const b = 'aabbbbcde';
const c = 'aaabbbb';
const d = 'aabbb';
const e = 'aabbcc';

const longestPalindrome = (string) => {
  //create hash map of letter counts
  let counts = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }

  console.log(counts)

  //loop through hash map counting pairs
  //check for odd via flag
  let totalPairs = 0;
  let hasOdd = false;

  for (let char in counts) {
    if (counts[char] > 1) {
      totalPairs += Math.floor(counts[char] / 2);
    }
    if (!hasOdd && counts[char] % 2 !== 0) {
      hasOdd = true;
    }
  }
  //return pairs x 2 + flag
  return totalPairs * 2 + (hasOdd ? 1 : 0);
};

console.log(longestPalindrome(a)); // 9
console.log(longestPalindrome(b)); // 7
console.log(longestPalindrome(c)); // 7
console.log(longestPalindrome(d)); // 5
console.log(longestPalindrome(e)); // 6