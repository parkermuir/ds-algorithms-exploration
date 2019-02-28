//# 116

/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/*
 * @param {Node} root
 * @return {Node}
 */

var connect = function (root) {
  let node = root;
  let stack = [];

  while (stack.length > 0 || node !== null) {
    if (node) {

      if (node.left) {
        node.left.next = node.right;
      }

      if (node.next && node.right) {
        node.right.next = node.next.left || null;
      }
      stack.push(node.right);
      node = node.left;
    } else {
      node = stack.pop();
    }
  }

  return root;
};