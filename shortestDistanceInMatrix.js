/*
https://www.geeksforgeeks.org/shortest-distance-two-cells-matrix-grid/

s represents ‘source’
d represents ‘destination’
* represents cell you can travel
0 represents cell you can not travel

*/



const a = [
  ['0', '*', '0', 's'],
  ['*', '0', '*', '*'],
  ['0', '*', '*', '*'],
  ['d', '*', '*', '*']
];

const b = [
  ['0', '*', '0', 's'],
  ['*', '0', '*', '*'],
  ['0', '*', '*', '*'],
  ['d', '0', '0', '0']
];

//Note that we can always use BFS to find shortest path if graph is unweighted.

const shortest = (matrix) => {

};






console.log(shortest(a)); //6
console.log(shortest(b)); //-1