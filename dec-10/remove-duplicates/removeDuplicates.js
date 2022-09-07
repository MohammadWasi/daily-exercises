const removeDuplicates = (nums) => {
  if (nums === null || nums.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 0; j < nums.length; j += 1) {
    if (nums[j] !== nums[i]) {
      i += 1;
      // eslint-disable-next-line no-param-reassign
      nums[i] = nums[j];
    }
  }

  return i + 1;
};

export { removeDuplicates };
