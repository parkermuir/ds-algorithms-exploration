

const numIslands = ( grid ) => {

  for (let i = 0; i < grid.length[0]; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === 1) {
        dfs(grid, i, j);
      }
    }
  }
};

const dfs = (grid, row, col) => {
  //if OB return
  if (row < 0 || row >= grid[row].length || col < 0 || grid[col] >= grid.length) {
    return;
  }
  //if water return
  if (grid[row][col] === 0) {
    return;
  }
  //if visited return
  if (grid[row][col] === -1) {
    return;
  }

  


};