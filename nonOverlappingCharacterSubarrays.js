

const createArrays = (chars) => {
  let indexes = createIndexes(chars);

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

  const merged = [ intervals[0] ];

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];
    let prev = merged[merged.length - 1];
    
    if (interval[0] < prev[1]) {
      merged[merged.length - 1] = [interval[0], prev[1]];
    } else {
      merged.push(interval);
    }
  }

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
};


console.log(createArrays(['A', 'B', 'C', 'D']));
console.log(createArrays(['A', 'B', 'C', 'D']));
console.log(createArrays(['A', 'B', 'C', 'D']));
console.log(createArrays(['A', 'B', 'C', 'D']));