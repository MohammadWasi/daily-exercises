const shiftGrid = (grid, k) => {
  const m = grid.length;
  const n = grid[0].length;
  const l = m * n;
  if (k > l) {
    // eslint-disable-next-line no-param-reassign
    k %= l;
  }
  const flattenGrid = [];
  const store = [];
  for (const item of grid) {
    flattenGrid.push(...item);
  }
  for (let i = 0; i < flattenGrid.length; i += 1) {
    const ele = flattenGrid[i];
    store[i + k] = ele;
  }

  const end = store.splice(-k);
  store.splice(0, k);
  const newStore = end.concat(store);
  const result = [];
  while (newStore.length > 0) {
    result.push(newStore.splice(0, n));
  }
  return result;
};
export { shiftGrid };
