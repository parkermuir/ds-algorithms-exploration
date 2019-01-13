var reverseWords = function(s) {
  let strings = s.split(' ')
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].split('').reverse().join('')
  }
  
  return strings.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));