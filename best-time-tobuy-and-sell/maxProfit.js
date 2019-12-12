const maxProfit = (prices) => {
  let min = Infinity;
  return prices.reduce((max, price) => {
    min = Math.min(min, price);
    return Math.max(max, price - min);
  }, 0);
};
export { maxProfit };
