//#443

/*
 * @param {character[]} chars
 * @return {number}
 */

var compress = function (chars) {
  let candidate = chars[0];
  let i = chars.length - 1;
  let count = 0;
  let deleteStop = chars.length;

  while (i >= 0) {
    count++

    if (chars[i] !== chars[i - 1]) {
      writeCount(chars, i + 1, count, deleteStop);
      candidate = chars[i - 1];
      count = 0
      deleteStop = i - 1;
    }

    i--
  }

  // console.log(chars)
  return chars.length;
};

const writeCount = (arr, start, num, stop) => {
  if (num > 1) {
    let numChars = num.toString().split('');
    for (let i = 0; i < numChars.length; i++) {
      arr[start++] = numChars[i];
    }

    arr.splice(start, stop - start + 1)
  }
}