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
var zigzagLevelOrder = function (root) {
  let stack = [root];
  if (!root) return [];
  let ans = [];
  let depth = 0;

  while (stack.length > 0) {
    let nextStack = [];
    ans.push(stack.map(el => el.val));
    while (stack.length > 0) {
      let current = stack.pop();
      if (depth % 2 === 0) {
        //even, right to left
        if (current.right) nextStack.push(current.right);
        if (current.left) nextStack.push(current.left);
      } else {
        //odd, left to right
        if (current.left) nextStack.push(current.left);
        if (current.right) nextStack.push(current.right);
      }
    }
    stack = nextStack;
    depth++;
  }
  return ans;
};