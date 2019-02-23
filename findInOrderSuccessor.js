/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */

var inorderSuccessor = function(root, p) {
  let foundInputNode = false
  let answer = null

const dfs = (node) => {
  if (!node) return
  
  dfs(node.left)
  
  console.log(node.val, foundInputNode)

  if (foundInputNode) {
    answer = node
      foundInputNode = false
  }
  
  if (node === p) {
    foundInputNode = true
  }
    
  dfs(node.right)
}

  dfs(root)
  return answer
}