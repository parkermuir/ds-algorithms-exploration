// # 144

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*git ad
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let stack = [];
  let node = root;
  let results = [];
  
  while (stack.length > 0 || node !== null) {
      if (node) {
          results.push(node.val);
          stack.push(node.right)
          node = node.left
      } else {
          node = stack.pop()
      }
  }
  
  return results;
};