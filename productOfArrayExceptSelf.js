/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n). */

const product = ( array ) => {
  let output = [];
  let leftProd = 1;
  let rightProd = 1;
  for (let i = 0; i < array.length; i++) {
    output.push(leftProd);
    leftProd = leftProd * array[i];
  }

  for (let i = array.length - 1; i >= 0; i--) {
    output[i] = output[i] * rightProd;
    rightProd = rightProd * array[i];
  }

  return output;
};


let a = [ 1, 2, 3, 4];
let b = [ 1, 2, 1, 5];
let c = [ 2, 2, 2, 2];

console.log(product(a)); //
console.log(product(b)); //
console.log(product(c)); //