var letterCombinations = function(digits) {
  let combinations = [];
  let buttons = {
      '1': '',
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz',
      '0': ''
  }
  
  if (digits.length === 0) {
      return combinations
  }
  
  createCombos(buttons, digits, 0, '', combinations);
  return combinations;
};

const createCombos = (buttons, digits, index, current, combinations) => {
  if (index === digits.length) {
      combinations.push(current);
      return;
  }
  
  let letters = buttons[digits[index]] || 0
  
  for (let i = 0; i < letters.length; i++) {
      createCombos(buttons, digits, index + 1, current + letters[i], combinations)
  }
}