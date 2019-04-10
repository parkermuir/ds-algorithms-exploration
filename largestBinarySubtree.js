//#333

/*
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
var largestBSTSubtree = function(root) {
  let maxSize = 0;

  const traverse = (node, size) => {
    if (!node) return;

    let subtreeSize = isValidBST(node);
    console.log({ subtreeSize });
    if (subtreeSize[0] && subtreeSize[1] > maxSize) {
      maxSize = subtreeSize[1];
    }

    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);
  return maxSize;
};

const isValidBST = (node, min = -Infinity, max = Infinity) => {
  if (!node) return [true, 0];

  if (node.val <= min || node.val >= max) {
    return [false, 0];
  }

  let left = isValidBST(node.left, min, node.val);
  let right = isValidBST(node.right, node.val, max);

  return [left[0] && right[0], left[1] + right[1] + 1];
};
