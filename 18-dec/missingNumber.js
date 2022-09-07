const missingNumber = (nums) => {
  let number;
  for (let i = 0; i <= nums.length; i += 1) {
    if (nums.indexOf(i) === -1) {
      number = i;
    }
  }
  return number;
};
export { missingNumber };
