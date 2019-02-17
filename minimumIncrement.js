//leet code 945
/*
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function (A) {
  let hash = createHash(A);
  let moves = 0;

  for (let i = 0; i < A.length; i++) {
    if (hash[A[i]] === 1) {
      continue;
    } else if (hash[A[i]] > 1) {
      hash[A[i]]--
      while (hash.hasOwnProperty(A[i])) {
        A[i]++
        moves++
      }
      hash[A[i]] = 1;
    }
  }
  return moves;
};


var createHash = function (A) {
  let result = {}
  for (let i = 0; i < A.length; i++) {
    let curr = A[i]
    if (curr in result) {
      result[curr]++
    } else {
      result[curr] = 1
    }
  }
  return result;
}