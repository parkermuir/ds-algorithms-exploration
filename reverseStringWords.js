/*
 * @param {string} str
 * @returns {string}
 */

let a = ' the    sky  is blue  ';

const reverseWords = (str) => {
  let words = str.split(' ');
  let reversed = '';
  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] !== '') {
      reversed = reversed + words[i] + ' ';
    }
  }

  return reversed.slice(0, reversed.length - 1);
};

console.log(reverseWords(a));