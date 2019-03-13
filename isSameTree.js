var isSameTree = function(p, q) {
  let stack1 = [];
  let stack2 = [];
  let node1 = p;
  let node2 = q;

  while (node1 !== null || node2 !== null || stack1.length > 0) {
    if (node1 || node2) {
      if (node1 === null || node2 === null || node1.val !== node2.val) {
        return false
      }
      stack1.push(node1.right);
      stack2.push(node2.right);
      node1 = node1.left
      node2 = node2.left
    } else {
      node1 = stack1.pop();
      node2 = stack2.pop();
    }
  }
  return stack1.length === stack2.length;
};