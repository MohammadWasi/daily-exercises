const dailyTemperatures = (T) => {
  const result = [];

  for (let i = 0; i < T.length; i += 1) {
    let day = 0;
    for (let j = i + 1; j < T.length; j += 1) {
      if (T[j] > T[i]) {
        day = j - i;
        break;
      }
    }
    result.push(day);
  }
  return result;
};

export { dailyTemperatures };
