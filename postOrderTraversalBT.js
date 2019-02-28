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

var postorderTraversal = function (root) {
  let stack = [root];
  let stack2 = [];
  let results = [];

  while (stack.length > 0) {
    node = stack.pop();
    stack2.push(node.val);
    if (node.left) { stack.push(node.left); }
    if (node.right) { stack.push(node.right); }
  };

  while (stack2.length > 0) {
    let val = stack2.pop();
    results.push(val);
  }

  return results;
  //return results.reverse(); after pushing into results instead of stack2
};