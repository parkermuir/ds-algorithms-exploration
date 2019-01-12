// #515

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  let results = [];
  
  const dfs = (node, depth) => {
    if (!node) return;
    if (results[depth] === undefined) results[depth] = node.val;
    else results[depth] = Math.max(results[depth], node.val);
    
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }
  
  dfs(root, 0);
  return results;
};