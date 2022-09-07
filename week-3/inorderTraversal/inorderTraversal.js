const inorderTraversal = (root) => {
  const result = [];

  if (root === null) {
    return result;
  }
  const stack = [];
  let current = [];
  while (true) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    if (stack.length === 0) {
      break;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
};
export { inorderTraversal };
