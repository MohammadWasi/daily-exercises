const isPalindrome = (string) => {
  const str = string.replace(/\W/g, '');
  const reversedStr = string
    .split('')
    .reverse()
    .join('');
  return str.toLowerCase() === reversedStr.toLowerCase();
};

export { isPalindrome };
