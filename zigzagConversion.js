/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
*/

const convert = (string, n) => {
  if (n === 1) {
    return string;
  }
  let rows = [];
  for (let i = 0; i <= n - 1; i++) {
    rows.push([]);
  }

  let move = 1;
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    rows[counter] = rows[counter] + string[i];

    if (counter === n - 1) {
      move = - 1;
    } else if (counter === 0) {
      move = 1;
    }

    counter += move;
  }

  console.log(rows)
  return rows.join('');
};

console.log(convert('PAYPALISHIRING', 3));//"PAHNAPLSIIGYIR"
console.log(convert('PAYPALISHIRING', 4));//"PINALSIGYAHRPI"
console.log(convert('AB', 1));//"AB"
console.log(convert('xmagoojdospvjbcxhwivqpsqbpqjogwnswtimdlbxcwg', 25));

