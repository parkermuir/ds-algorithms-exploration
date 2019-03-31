

const createArrays = (chars) => {
  let indexes = createIndexes(chars);
  //console.log(indexes);

  let intervals = Object.values(indexes);

  intervals = intervals.map((interval) => {
    if (interval.length === 1) {
      return [interval[0], interval[0]];
    } else {
      return [interval[0], interval[interval.length - 1]];
    }
  });

  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  //console.log(intervals)

  const merged = [ intervals[0] ];

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];
    let prev = merged[merged.length - 1];
    
    if (interval[0] < prev[1]) {
      if (prev[1] > interval[1]) {
        merged[merged.length - 1][1] = prev[1];
      } else {
        merged[merged.length - 1][1] = interval[1];
      }
    } else {
      merged.push(interval);
    }
  }

  //console.log(merged);
  return merged.map((el) => {
    return el[1] - el[0] + 1;
  });
};

const createIndexes = (chars) => {
  let hash = {};
  chars.forEach((char, i) => {
    if (hash.hasOwnProperty(char)) {
      hash[char].push(i);
    } else {
      hash[char] = [i];
    }
  });
  return hash;
};


console.log(createArrays(['A', 'B', 'C', 'A']));
console.log(createArrays(['A', 'B', 'C', 'A', 'E', 'F']));
console.log(createArrays(['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'B']));
console.log(createArrays(['A', 'B', 'C', 'D']));

/*

Create an object of every letter, and it's last index in the array, use that to slice

OR

Create an array of same size as inputs with the maximum last most occurrence up to that point, then dfs through that array, 
if the last most index is equal to the current index, that position is a cut



*/