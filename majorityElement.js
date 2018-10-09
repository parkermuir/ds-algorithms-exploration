const majorityElement = ( array ) => {
  let maj = array.length / 2;
  let hash = {};

  for ( let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!hash[element]) {
      hash[element] = 1;
    } else {
      hash[element] += 1;
      if (hash[element] > maj) { return element; }
    }
  }
  return 'no majority';
};

let a = [2, 2, 2, 3, 4, 2, 3]; 
let b = [3, 3, 4, 5];

console.log(majorityElement(a)); // 2
console.log(majorityElement(b)); // 'no majority'

//O(n) time and O(n) space