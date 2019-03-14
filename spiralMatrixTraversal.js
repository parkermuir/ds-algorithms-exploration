var spiralOrder = function (inputMatrix) {
  if (inputMatrix.length === 0) return [];
  let results = [];
  let top = 0; //1
  let left = 0;

  let right = inputMatrix[0].length - 1;
  let bottom = inputMatrix.length - 1;

  while (bottom >= top && right >= left) {

    for (let i = left; i <= right; i++) {
      results.push(inputMatrix[top][i]);
    }
    top++

    for (let i = top; i <= bottom; i++) {
      results.push(inputMatrix[i][right]);
    }
    right--

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        results.push(inputMatrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        results.push(inputMatrix[i][left]);
      }
      left++;
    }
  }
  return results;
};