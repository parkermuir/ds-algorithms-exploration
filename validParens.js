
const validParens1 = (string) => {
  let stack = [];
  
  let parens = [
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ];
  
  for (char of string) {
    
    for (let i = 0; i < parens.length; i++) {
      const pair = parens[i];
      
      if (char === pair[0]) {
        stack.push(pair[1]);
      }

      if (char === pair[1]) {
        if (char !== stack[stack.length - 1]) {
          return false;
        } else {
          stack.pop();
        }
      }
    }
  }
  return (stack.length === 0);
};

const validParens = (string) => {
  let stack = [];

  let parens = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (char of string) {
    if (parens.hasOwnProperty(char)) {
      stack.push(parens[char]);
    } else if (Object.values(parens).includes(char)) {
      if (char !== stack[stack.length - 1]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return (stack.length === 0);
};


let a = '({()}[{}])';
let b = '({()}]{}])';
let c = '({()}[{}])(';
console.log(validParens(a)); // true
console.log(validParens(b)); // false
console.log(validParens(c)); // false

