import { shiftGrid } from './shiftGrid';

describe('shiftGrid', () => {
  test('should  shift the grid k times', () => {
    const myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(shiftGrid(myArray, 1)).toEqual([[9, 1, 2], [3, 4, 5], [6, 7, 8]]);
  });
  test('should  shift the grid k times', () => {
    const myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(shiftGrid(myArray, 9)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });
});
