const a = [[1, 2, 3], 4, 5]; // 15
const b = [[1, [3, 8], 3], 4, 5]; // 21
const c = [[1, 2, 3], 4, 5, [5, [6, 6]], 'a']; // 32

const sumNested = (array) => {
  let sum = 0;

  const summer = (array) => {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      console.log({i, sum, element});
      if (typeof element === 'number') {
        sum += element;
      } else if (Array.isArray(element)) {
        summer(element);
      }
    }
  };

  summer(array);
  return sum;
};

console.log(sumNested(a));
console.log(sumNested(b));
console.log(sumNested(c));