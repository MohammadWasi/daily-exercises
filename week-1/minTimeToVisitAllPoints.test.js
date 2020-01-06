import { minTimeToVisitAllPoints } from './minTimeToVisitAllPoints';

describe('minTimeToVisitAllPoints', () => {
  test('should return minimum time in seconds to visit all point', () => {
    const myArray = [[1, 1], [3, 4], [-1, 0]];
    expect(minTimeToVisitAllPoints(myArray)).toEqual(7);
  });
  test('should return minimum time in seconds to visit all point', () => {
    const myArray = [[3, 2], [-2, 2]];
    expect(minTimeToVisitAllPoints(myArray)).toEqual(5);
  });
});
