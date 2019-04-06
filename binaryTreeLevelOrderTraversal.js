// #102

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let q = [root];
  let results = [];

  while (q.length > 0) {
    results.push(q.map(n => n.val));
    let levelSize = q.length;

    for (let i = 0; i < levelSize; i++) {
      let node = q.shift()
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }

  return results;
};