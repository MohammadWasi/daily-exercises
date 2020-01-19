const isValid = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    const bracket = s[i];
    if (bracket === '(' || bracket === '{' || bracket === '[') {
      stack.push(bracket);
    } else if (bracket === ')' || bracket === '}' || bracket === ']') {
      const top = stack.pop();
      if (
        !top
        || (top === '(' && bracket !== ')')
          || (top === '{' && bracket !== '}')
          || (top === '[' && bracket !== ']')
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
export { isValid };
