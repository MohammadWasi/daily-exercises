import { shiftGrid } from './shiftGrid';

describe('shiftGrid', () => {
  test('should shift the grid k times.', () => {
    const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(shiftGrid(grid, 1)).toEqual([[9, 1, 2], [3, 4, 5], [6, 7, 8]]);
  });
  test('should shift the grid k times.', () => {
    const grid = [[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]];
    expect(shiftGrid(grid, 4)).toEqual([[12, 0, 21, 13], [3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10]]);
  });
  test('should shift the grid k times.', () => {
    const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(shiftGrid(grid, 9)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });
});
