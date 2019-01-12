/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let sum = 0;

  const traverse = (node) => {
    if (!!node) {
      traverse(node.right)
      sum += node.val
      node.val = sum
      traverse(node.left)
    }
  }

  traverse(root)
  return root
};