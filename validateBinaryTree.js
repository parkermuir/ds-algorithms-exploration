// #98


const isValidBST = (node, min = -Infinity, max = Infinity) => {
  if (!node) {
    return true;
  }

  if (node.val >= max || node.val <= min) {
    return false;
  }

  return isValidBST(node.left, min, node.left.val) && isValidBST(node.right, node.right.val, max)
};