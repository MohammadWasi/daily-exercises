
const majorityElement = (nums) => {
  const hashMap = {};
  let max = 0;
  let element = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (hashMap[nums[i]]) {
      hashMap[nums[i]] += 1;
    } else {
      hashMap[nums[i]] = 1;
    }
  }

  for (const key in hashMap) {
    if (hashMap[key] > max) {
      max = hashMap[key];
      element = key;
    }
  }
  return Number(element);
};

export {
  majorityElement,
};
