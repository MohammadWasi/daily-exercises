import { minTimeToVisitAllPoints } from './minTimeToVisitAllPoints';

describe('minTimeToVisitAllPoints', () => {
  test('should return  Minimum Time Visiting All Points', () => {
    const points = [[1, 1], [3, 4], [-1, 0]];
    expect(minTimeToVisitAllPoints(points)).toEqual(7);
  });
  test('should return  Minimum Time Visiting All Points', () => {
    const points = [[3, 2], [-2, 2]];
    expect(minTimeToVisitAllPoints(points)).toEqual(5);
  });
});
