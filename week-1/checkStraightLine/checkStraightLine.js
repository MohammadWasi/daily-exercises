const slope = (p1, p2) => p2[1] - p1[1] / p2[0] - p1[0];
const checkStraightLine = (coordinates) => {
  for (let i = 2; i < coordinates.length; i += 1) {
    if (
      slope(coordinates[i - 2], coordinates[i - 1])
      !== slope(coordinates[i - 1], coordinates[i])
    ) {
      return false;
    }
  }
  return true;
};
export { checkStraightLine };
