const productExceptSelf = (nums) => {
  const len = nums.length;
  const output = Array(len).fill(1);
  let left = 1;
  let right = 1;

  for (let i = 0; i < len - 1; i += 1) {
    left *= nums[i];
    right *= nums[len - i - 1];
    output[i + 1] *= left;
    output[len - i - 2] *= right;
  }

  return output;
};

export { productExceptSelf };
