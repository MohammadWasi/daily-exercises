const mergeTrees = (tree1, tree2) => {
  const t1 = tree1;
  const t2 = tree2;
  if (t1 === null) {
    return t2;
  }
  if (t2 === null) {
    return t1;
  }
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};
export { mergeTrees };
