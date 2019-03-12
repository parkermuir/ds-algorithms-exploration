// #257
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let results = [];

  const dfs = (node, path) => {
    if (!node) return;

    if (node.left === null && node.right === null) {
      results.push(path + node.val);
      return;
    }

    dfs(node.left, path + node.val + '->');
    dfs(node.right, path + node.val + '->');
  };

  dfs(root, '');
  return results;

};