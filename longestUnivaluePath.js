// #687

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  let max = 0;

  const calcArrow = (node) => {
    if (!node) return 0;

    let leftLength = calcArrow(node.left);
    let rightLength = calcArrow(node.right);

    let leftArrow = 0;
    let rightArrow = 0;

    if (node.left && node.left.val === node.val) {
      leftArrow = leftLength + 1;
    }
    if (node.right && node.right.val === node.val) {
      rightArrow = rightLength + 1;
    }

    max = Math.max(max, leftArrow + rightArrow)
    return Math.max(leftArrow, rightArrow)

  }

  calcArrow(root)
  return max;
}