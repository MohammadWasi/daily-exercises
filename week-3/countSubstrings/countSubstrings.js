const isPalindrome = (s) => {
  let l = 0;
  let r = s.length - 1;
  while (l <= r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l += 1;
    r -= 1;
  }
  return true;
};
const countSubstrings = (str) => {
  const result = [];

  for (let i = 1; i <= str.length; i += 1) {
    for (let j = 0; j + i <= str.length; j += 1) {
      const subStr = str.substr(j, i);
      if (isPalindrome(subStr)) {
        result.push(subStr);
      }
    }
  }
  return result.length;
};
export { countSubstrings };
