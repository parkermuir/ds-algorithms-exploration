//#721

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  const paths = [];
  
  const dfs = (node, curr, path) => {
      if (!node) return;
      
      path.push(node.val)
      curr += node.val
      
      if (!node.left && !node.right && curr === sum ) {
          paths.push(path);
      }
  
      dfs(node.right, curr, path.slice());
      dfs(node.left, curr, path.slice());
  }
  
  
  dfs(root, 0, [])
  return paths;
};