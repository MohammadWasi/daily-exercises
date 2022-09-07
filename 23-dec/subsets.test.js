import { subsets } from './subsets';

describe('subsets', () => {
  test('should return all possible subsets', () => {
    const myArray = [1, 2, 3];
    expect(subsets(myArray)).toEqual([[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]);
  });
});
