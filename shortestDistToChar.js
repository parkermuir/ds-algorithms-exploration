var shortestToChar = function (S, C) {
  let results = [];
  let indexes = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      indexes.push(i);
    }
  }

  console.log(indexes);

  for (let i = 0; i < S.length; i++) {
    let min = Infinity;
    for (let j = 0; j < indexes.length; j++) {
      if (Math.abs(i - indexes[j]) < min) {
        min = Math.abs(i - indexes[j]);
      }
    }
    results.push(min);
  }

  return results;
};

console.log(shortestToChar('loveleetcode', 'e'));