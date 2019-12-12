const climbStairs = (n) => {
  if (n <= 2) {
    return n;
  }
  const steps = [1, 2];
  for (let i = 2; i < n; i += 1) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }
  return steps[n - 1];
};

export { climbStairs };
