const isEven = (number) => number % 2 === 0;
const findNumbers = (nums) => {
  let count = 0;
  nums.forEach((num) => {
    const numString = num.toString();

    if (isEven(numString.length)) {
      count += 1;
    }
  });
  return count;
};

export { findNumbers };
