/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z. 
*/


const prefix = ( array ) => {
  let prefix = array[0];

  for (let i = 1; i < array.length; i++) {
    prefix = lcp(prefix, array[i]) 
  }
  return prefix;
}

const lcp = (string1, string2) => {
  let prefix = ""
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] === string2[i]) {
      prefix = prefix + string1[i];
    } else {
      return prefix
    }
  }
  return prefix;
};

console.log(prefix(['aaa', 'ccb', 'aaaa', 'aac']))