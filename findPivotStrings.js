
let a = ['ptolemaic', 'retrograde', 'supplant',
  'undulate', 'xenoepist', 'asymptote',
  'babka', 'banoffee', 'engender',
  'karpatka', 'othellolagkage'];

  
const findPivot = (arr) => {
  let firstWord = arr[0];
  let front = 0;
  let back = arr.length - 1;
  let mid;

  while (front < back) {
    mid = front + Math.floor((back - front) / 2);

    if (arr[mid] > firstWord) {
      front = mid;
    } else {
      back = mid;
    }

    if (front + 1 === back) {
      break;
    }
  }
  return back;
};

console.log(findPivot(a));