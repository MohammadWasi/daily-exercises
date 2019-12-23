const combine = (nums, index, partial, results) => {
  if (index === nums.length) {
    results.push(partial);
    return;
  }

  combine(nums, index + 1, partial, results);
  combine(nums, index + 1, partial.concat([nums[index]]), results);
};
const subsets = (nums) => {
  const results = [];
  combine(nums, 0, [], results);
  return results;
};

export { subsets };
