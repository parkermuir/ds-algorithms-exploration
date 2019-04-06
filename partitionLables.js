//#763

/*
 * @param {string} S
 * @return {number[]}
 */

var partitionLabels = function(S) {
    
  let maxLast = 0;
  let partitionSize = 0;
  let output = [];
  let inputList = S.split('')
  let lastIndexes = makeLastIndexHash(inputList);

  for (let i = 0; i < inputList.length; i++) {
    partitionSize++

    maxLast = Math.max(maxLast, lastIndexes[inputList[i]])

    if (maxLast === i) {
      output.push(partitionSize);
      partitionSize = 0;
    }

  }

  return output;
}

const makeLastIndexHash = (inputList) => {
  let hash = {};

  for (let i = 0; i < inputList.length; i++) {
    let shopper = inputList[i];
    hash[shopper] = i;
  }

  return hash;
}