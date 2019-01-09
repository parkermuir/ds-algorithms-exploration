/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (node) {
  let uni = true;
  let candidate = node.val

  const traverse = (node) => {
    if (node.val !== candidate) {
      uni = false;
    }

    if (node.left) {
      traverse(node.left)
    }

    if (node.right) {
      traverse(node.right)
    }
  }

  traverse(node)
  return uni

};