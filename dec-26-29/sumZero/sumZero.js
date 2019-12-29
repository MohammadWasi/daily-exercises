const sumZero = (n) => {
  const result = [];
  let sum = 0;

  for (let i = 0; i < n - 1; i += 1) {
    result[i] = i + 1;
    sum += result[i];
  }
  result[n - 1] = -sum;
  return result;
};
export { sumZero };
