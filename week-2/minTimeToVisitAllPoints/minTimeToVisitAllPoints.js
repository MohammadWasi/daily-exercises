const shortestPath = (p1, p2) => {
  const dx = Math.abs(p1[0] - p2[0]);
  const dy = Math.abs(p1[1] - p2[1]);
  return Math.max(dx, dy);
};

const minTimeToVisitAllPoints = (points) => {
  let totalTime = 0;
  for (let i = 0; i < points.length - 1; i += 1) {
    totalTime += shortestPath(points[i], points[i + 1]);
  }
  return totalTime;
};
export {
  minTimeToVisitAllPoints,
};
