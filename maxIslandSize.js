//#695

/*
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let max = 0
  
  for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
          if (grid[row][col] === 1) {
              let size = findIslandSize(grid, row, col)
              if (size > max) {
                  max = size;
              }
          }
      }
  }
  
  return max
};

const findIslandSize = (grid, row, col) => {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
      return 0
  }
  
  if (grid[row][col] === 0 || grid[row][col] === -1) {
      return 0
  }
  
  if (grid[row][col] === 1) {
      grid[row][col] = -1
      
  return 1 + findIslandSize(grid, row + 1, col) + findIslandSize(grid, row - 1, col) + findIslandSize(grid, row, col + 1) + findIslandSize(grid, row, col - 1)
  } 
}