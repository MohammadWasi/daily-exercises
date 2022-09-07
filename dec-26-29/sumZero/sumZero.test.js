import { sumZero } from './sumZero';

describe('sumZero', () => {
  test('should return sum Zero', () => {
    const myArray = [1, 2, 3, 4, -10];
    expect(sumZero(5)).toEqual(myArray);
  });
});
