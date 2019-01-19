//#199

/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
* @return {number[]}
*/
var rightSideView = function (root) {
  let view = [];
  let q = [root];
  let results = [];
  while (q.length > 0) {
    let size = q.length;
    let row = [];
    for (let i = 0; i < size; i++) {
      let curr = q[i];
      row.push(curr);
      q.push(curr.left);
      q.push(curr.right);
    }
    for (let i = 0; i < size; i++) {
      q.shift();
    }
    view.push(row);
  }
  for (let i = 0; i < view.length; i++) {
    results.push(view[i][view[i].length - 1].val);
  }
  return results;
};