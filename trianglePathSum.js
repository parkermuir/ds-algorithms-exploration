// #120 recursive solution

var minimumTotal = function (triangle) {
  minSum = Infinity;

  const recurse = (row, i, tempSum) => {
    if (row === triangle.length) {
      if (tempSum < minSum) {
        minSum = tempSum;
      }
      return;
    }

    tempSum += triangle[row][i];
    recurse(row + 1, i, tempSum);
    recurse(row + 1, i + 1, tempSum);
  };

  recurse(0, 0, 0);
  return minSum;
};
