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

const shortest = (grid, source) => {
  let visited = new Array(grid.length).fill([]);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        visited[i][j] = true;
      } else {
        visited[i][j] = false;
      }
      
      if (grid[i][j] === 's') {
        var source = [i, j];
      }
    }
  }

  let q = [[source, 0]];

  while (q.length > 0) {
    let [[row, col], dist] = q.shift();

    if (grid[row][col] === 'd') {
      return dist;
    }

    if (isInbounds(row + 1, col, grid)) {
      q.push([[row + 1, col], dist + 1]);
      visited[row + 1, col] = true;
    }
    if (isInbounds(row - 1, col, grid)) {
      q.push([[row - 1, col], dist + 1]);
      visited[row - 1, col] = true;
    }
    if (isInbounds(row, col + 1, grid)) {
      q.push([[row, col + 1], dist + 1]);
      visited[row, col + 1] = true;
    }
    if (isInbounds(row, col - 1, grid)) {
      q.push([[row, col - 1], dist + 1]);
      visited[row, col - 1] = true;
    }
  }
  return -1;
};


const isInbounds = (row, col, grid) => {
  if (row >= grid.length || row < 0 || col < 0 || col >= grid[0].length) {
    return false;
  }
  return true;
};



console.log(shortest(a));
console.log(shortest(b)); 