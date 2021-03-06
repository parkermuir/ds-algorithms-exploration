//O(n) time and O(n) space
const majorityElement = ( array ) => {
  let maj = array.length / 2;
  let hash = {};

  for ( let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!hash[element]) {
      hash[element] = 1;
    } else {
      hash[element] += 1;
    }
    if (hash[element] > maj) { return element; }
  }
  return 'no majority';
};

let a = [2, 2, 2, 3, 4, 2, 3]; 
let b = [3, 3, 4, 5];
let c = [5];
let d = [5, 4, 4, 4, 5, 1, 5, 5, 5, 5, 4];

console.log(majorityElement(a)); // 2
console.log(majorityElement(b)); // 'no majority'
console.log(majorityElement(c)); // '5'
console.log(majorityElement(d)); // '5'


//O(n) time and O(1) space 
//(Moore's voting algorithm)
//when it is given that the majority element will exist, 
//otherwise this way won't work
const majorityElement2 = ( array ) => {
  let candidate = array[0];
  let count = 1;

  for ( let i = 1; i < array.length; i++) {
    const element = array[i];
    if (element === candidate) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      candidate = element;
      count = 1;
    }
  }

  let occurrences = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (candidate === element) {
      occurrences++;
    }
  }

  if (occurrences > array.length / 2) {
    return candidate;
  } else {
    return 'no majority';
  }
};

console.log(majorityElement2(a)); // 2
console.log(majorityElement2(b)); // 'no majority'
console.log(majorityElement2(c)); // '5'
console.log(majorityElement2(d)); // '5'
