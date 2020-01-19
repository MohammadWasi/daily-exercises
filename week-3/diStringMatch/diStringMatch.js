const diStringMatch = (s) => {
  const n = s.length;
  const result = [];
  let inc = 0;
  let dec = n;
  for (let i = 0; i <= n; i += 1) {
    if (s[i] === 'I') {
      result.push(inc);
      inc += 1;
    } else {
      result.push(dec);
      dec -= 1;
    }
  }
  return result;
};
export { diStringMatch };
