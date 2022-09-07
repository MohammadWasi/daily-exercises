const replaceElements = (arr) => {
  if (arr.length === 1) {
    return -1;
  }
  let currentMax = -1;
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    const currentVal = arr[i];
    // eslint-disable-next-line no-param-reassign
    arr[i] = currentMax;
    currentMax = Math.max(currentVal, currentMax);
  }
  return arr;
};
export { replaceElements };
