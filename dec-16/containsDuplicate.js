const containsDuplicate = (nums) => {
  const hashTable = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (!hashTable[nums[i]]) {
      hashTable[nums[i]] = true;
    } else {
      return true;
    }
  }
  return false;
};

export { containsDuplicate };
