var maxDepth = function (root) {
  if (!root) return 0;
  const depths = [];
  const recurse = (node, depth) => {
    if (!node.left && !node.right) {
      depths.push(depth);
      return;
    }
    if (node.left) {
      recurse(node.left, depth + 1);
    }
    if (node.right) {
      recurse(node.right, depth + 1);
    }
  }

  recurse(root, 1);
  return Math.max(...depths);
};