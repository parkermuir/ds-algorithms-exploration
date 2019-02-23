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

var inorderSuccessorIterative = function(root, p) {
  let stack = [];
  let curr = root
  let prev = null
  let results = [];
  
  while (curr !== null || stack.length !== 0) {
      if (curr !== null){
          stack.push(curr)
          curr = curr.left
      } else {
          curr = stack.pop()
          
          if (prev === p) {
            return curr
          }
          // results.push(curr.val)
          prev = curr
          curr = curr.right
      }
  }
}