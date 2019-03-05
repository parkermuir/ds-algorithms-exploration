//Flatten BT to LL in place
//114

var flatten = function (root) {
  const stack = []
  let node = root;
  let prev = new TreeNode(-1);
  let result = prev;

  while (node !== null || stack.length !== 0) {
    if (node) {
      prev.right = node;
      prev.left = null;

      if (node.right) stack.push(node.right);

      prev = node
      node = node.left;
    } else {
      node = stack.pop()
    }
  }

  return result.right;
};