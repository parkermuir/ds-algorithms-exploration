/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// var findAnagrams = function(s, p) {
//     let hash = createHash(p)
//     let checker = {...hash}
//     let results = [];
    
//     let left = 0;
//     let right = 0;
    
    
//     while (right < s.length) {
//         let window = s.substring(left, right + 1)
//         console.log({window, checker})
//         if (checker.hasOwnProperty(s[right]) && checker[s[right]] > 0) {
//             checker[s[right]]--

//             if (Object.values(checker).every((val) => val === 0)) {
//                 console.log({checker, left, right})
//                 results.push(left)
//                 checker[left]++
//                 left++
//             } 
//             right++
//         } else {
//             left = right + 1
//             right++
//             checker = {...hash}
//         }
//     }
    
//     return results;
// };


// var createHash = function (A) {
//   let result = {}
//   for (let i = 0; i < A.length; i++) {
//     let curr = A[i]
//     if (curr in result) {
//       result[curr]++
//     } else {
//       result[curr] = 1
//     }
//   }
//   return result;
// }

// var findAnagrams = function(s, p) {
//   let target = p.split('').sort().join('');
//   let results = [];
//   for (let i = 0; i <= s.length - p.length; i++) {
//       let sorted = s.substring(i, i + p.length).split('').sort().join('')
//       if (sorted === target) {
//          results.push(i) 
//       }
//   }
  
//   return results;
// }

var findAnagrams = function(s, p) {
  let begin = 0;
  let end = 0;
  let chars = createHash(p)
  let count = Object.keys(chars).length;
  let results = [];
  
  while (end < s.length) {
      if (chars.hasOwnProperty(s[end])) {
          
          chars[s[end]]--
          if (chars[s[end]] === 0) { count--; }
      }
      
      end++
      
      while (count === 0) {
          if (end - begin === p.length) {
              results.push(begin);
          }
          
          if (chars.hasOwnProperty(s[end])) {
  
              chars[s[begin]]++
              if (chars[s[begin]] > 0) { count++; }
          }
          begin++
      }
  }
  return results;
}

const createHash = (string) => {
  let result = {};
  for (let i = 0; i < string.length; i++) {
      result[string[i]] = result[string[i]] + 1 || 1
  }
  return result;
}