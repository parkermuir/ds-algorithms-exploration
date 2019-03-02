//#236

var lowestCommonAncestor = function (root, p, q) {
  let result = null

  const dfs = (node) => {
    if (!node) return 0;

    let count = 0;

    if (node.val === p.val || node.val === q.val) {
      count = 1
    }

    count += dfs(node.left)
    count += dfs(node.right);

    if (count === 2 && !result) {
      result = node;
    }

    return count;
  }
  dfs(root)
  return result;
};