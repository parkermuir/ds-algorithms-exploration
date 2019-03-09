//#904

/*
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function (array) {
  let start = 0;
  let i = 0;

  let baskA = 0;
  let fruitA = null;
  let baskB = 0;
  let fruitB = null;

  let max = 0;

  while (i < array.length) {
    let fruit = array[i];

    if (fruit !== fruitA && fruit !== fruitB) {
      while (baskA !== 0 && baskB !== 0) {
        if (array[start] === fruitA) { baskA-- }
        if (array[start] === fruitB) { baskB-- }
        start++
      }
    } else {
      if (fruit === fruitA) { baskA++ }
      if (fruit === fruitB) { baskB++ }
    }

    if (baskA === 0 && fruit !== fruitB) {
      fruitA = fruit;
      baskA = 1;
    } else if (baskB === 0 && fruit !== fruitA) {
      fruitB = fruit;
      baskB = 1;
    }

    //console.log({fruitA, baskA, fruitB, baskB})
    max = Math.max(max, baskA + baskB)
    i++;
  }

  return max;
};