const findDisappearedNumbers = (nums) => {
  const output = [];
  for (let i = 1; i < nums.length + 1; i += 1) {
    if (nums.indexOf(i) === -1) {
      output.push(i);
    }
  }
  return output;
};

export {
  findDisappearedNumbers,
};
