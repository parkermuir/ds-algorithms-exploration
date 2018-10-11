/*
Longest Uniform Subsequence
Given a string, find the longest uniform subsequence in the string,
return an array where the first index is the start of the substring, 
and the second index is the length of the substring.
Examples:
"" -> [-1, 0]
"aaabbbbccd" -> [4, 4]
"hello world" -> [3, 2]
*/

//fn longestSubsequence(string)
  //split string into character array
  //declare count variable
  //declare start
  //declare results
  //iterate through characters
    //if char is same as previous
      //increment count
      //if count > results[1]
        //update results[0]
        //update results[1]
    //else
      //update start
  //return tuple of start and longest

  //linear time and space

const longestSubsequence = (string) => {
  // const chars = string.split('');
  let count = 1;
  let start = 1;
  let results = [1, 1];

  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      count++;
      if (count > results[1]) {
        results = [start, count];
      }
    } else {
      start = i + 1;
      count = 1;
    }
  }
  return results;
};

console.log(longestSubsequence("aaabbbbccd")); // -> [4, 4]
console.log(longestSubsequence("hello world")); // -> [3, 2]