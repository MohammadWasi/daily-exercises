const invertTree = (r) => {
  const root = r;
  if (root === null) {
    return root;
  }
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);

  return root;
};

export { invertTree };
