//# 32

/*
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let stack = [-1];
  let max = 0;
  
  for (let i = 0; i < s.length; i++) {
      //console.log({i, stack})
      if (s.charAt(i) === ')') {
          stack.pop()
          if (stack.length === 0) {
            stack.push(i)
          }
          max = Math.max(max, i - stack[stack.length - 1])
      } else {
          stack.push(i)
      }
      
  }

  return max;  

};