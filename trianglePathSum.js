// #120 recursive solution

// var minimumTotal = function (triangle) {
//   minSum = Infinity;

//   const recurse = (row, i, tempSum) => {
//     if (row === triangle.length) {
//       if (tempSum < minSum) {
//         minSum = tempSum;
//       }
//       return;
//     }

//     tempSum += triangle[row][i];
//     recurse(row + 1, i, tempSum);
//     recurse(row + 1, i + 1, tempSum);
//   };

//   recurse(0, 0, 0);
//   return minSum;
// };


var minimumTotal = function (triangle) {

  for (let row = 1; row < triangle.length; row++) {
    for (let i = 0; i < triangle[row].length; i++) {
      let left;
      let right;

      if ( i - 1 < 0) {
        left = null;
      } else {
        left = triangle[row - 1][i - 1];
      }

      if ( i > triangle[row - 1].length - 1) {
        right = null;
      } else {
        right = triangle[row - 1][i];
      }

      if (left === null) {
        triangle[row][i] += right;
      } else if (right === null) {
        triangle[row][i] += left;
      } else {
        triangle[row][i] += Math.min(right, left);
      }
    }
  }
  console.log(triangle);
  return Math.min.apply(null, triangle[triangle.length - 1]);
};

console.log(minimumTotal([[7], [-5, 9], [6, 5, 2], [-8, -2, -7, 3], [-2, 6, -6, -1, 4]]));