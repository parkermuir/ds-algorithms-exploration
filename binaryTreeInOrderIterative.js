//# 94

/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let results = [];
  let stack = [];
  let node = root
  
  while (node !== null || stack.length !== 0) {
      if (node !== null) {
          stack.push(node)
          node = node.left
      } else {
          node = stack.pop()
          results.push(node.val)
          node = node.right
      }
  }
  
  return results
};