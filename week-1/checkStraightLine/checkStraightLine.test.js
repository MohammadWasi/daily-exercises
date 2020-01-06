import { checkStraightLine } from './checkStraightLine';

describe('checkStraightLine', () => {
  test('should Check if these points make a straight line in the XY plane.', () => {
    const coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]];
    expect(checkStraightLine(coordinates)).toEqual(true);
  });
  test('should Check if these points make a straight line in the XY plane.', () => {
    const coordinates = [[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]];
    expect(checkStraightLine(coordinates)).toEqual(false);
  });
});
