import { rotate } from './rotate';

describe('rotate', () => {
  test('should return rotated array', () => {
    const myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(rotate(myArray)).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
  });
});
