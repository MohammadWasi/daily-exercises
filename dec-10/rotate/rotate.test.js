import { rotate } from './rotate';

describe('rotate', () => {
  test('rotate the elements of the given array 3 times to the right', () => {
    const myArray = [1,2,3,4,5,6,7];
    expect(rotate(myArray, 3)).toEqual([5,6,7,1,2,3,4]);

  });
  test('rotate the elements of the given array 2 times to the right', () => {
    const myArray = [-1,-100,3,99];
    expect(rotate(myArray, 2)).toEqual([3,99,-1,-100]);

  });
});
