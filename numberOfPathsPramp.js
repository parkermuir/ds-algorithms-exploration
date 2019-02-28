const numOfPathsToDest = (n) => {
  /*let matrix = new Array(n).fill(0)
   matrix = matrix.map((e) => {
     return new Array(n).fill(0);
   })
   */
  let matrix = [...Array(n)].map(e => Array(n).fill(0))

  matrix[0].fill(1);



  for (let row = 1; row < n; row++) {
    for (let col = 1; col < n; col++) {
      if (row <= col) {
        console.log({ row, col });
        matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1];
      }
    }
  }

  return matrix[n - 1][n - 1];
};

console.log(numOfPathsToDest(4));