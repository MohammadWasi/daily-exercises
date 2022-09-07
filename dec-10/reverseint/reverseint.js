const reverseInt = (number) => {
  // eslint-disable-next-line operator-linebreak
  const result =
    parseFloat(
      number
        .toString()
        .split('')
        .reverse()
        // eslint-disable-next-line comma-dangle
        .join('')
    ) * Math.sign(number);
  // eslint-disable-next-line no-restricted-properties
  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return 0;
  }

  return result;
};

export { reverseInt };
