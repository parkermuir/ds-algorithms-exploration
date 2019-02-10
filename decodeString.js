// #394

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let strings = [''];
  let nums = [0]

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === '[') {
      strings.push('')
    } else if (char === ']') {
      let temp = strings.pop()
      let num = nums.pop()
      let newStr = multiplier(temp, num);
      let prev = strings.pop();
      strings.push(prev.concat(newStr));
    } else if (isNaN(char)) {
      temp = strings.pop()
      newStr = temp.concat(char)
      strings.push(newStr)
    } else if (!isNaN(char)) {
      if (!isNaN(s[i - 1])) {
        let tempNum = nums.pop()
        tempNum *= 10;
        tempNum += parseInt(char);
        nums.push(tempNum);
      } else {
        nums.push(parseInt(char));
      }
    }
  }
  return strings[0];
};

const multiplier = (string, num) => {
  let results = ''
  for (let i = 0; i < num; i++) {
    results = results + string
  }
  return results;
};
