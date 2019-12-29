const subtractProductAndSum = (n) => {
  const digits = n.toString().split('');
  let sum = 0;
  let product = 1;
  for (let i = 0; i < digits.length; i += 1) {
    sum += parseInt(digits[i], 10);
    product *= parseInt(digits[i], 10);
  }
  return product - sum;
};
export { subtractProductAndSum };
