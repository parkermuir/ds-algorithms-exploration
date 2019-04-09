// #199

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
var rightSideView = function(root) {
  let view = [];

  const dfs = (node, level) => {
    if (!node) return;

    if (view[level] === undefined) {
      view.push(node.val);
    }

    dfs(node.right, level + 1);
    dfs(node.left, level + 1);
  };

  dfs(root, 0);
  return view;
};