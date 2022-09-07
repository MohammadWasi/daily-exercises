const rotate = (nums, k) => {
  for (let i = nums.length - 1; i >= nums.length - k; i -= 1) {
    nums.unshift(nums.pop());
  }
  return nums;
};

export { rotate };
