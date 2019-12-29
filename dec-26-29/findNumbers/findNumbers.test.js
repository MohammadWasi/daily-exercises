import { findNumbers } from './findNumbers';

describe('findNumbers', () => {
  test('should return how many of them contain an even number of digits.', () => {
    const myArray = [12, 345, 2, 6, 7896];
    expect(findNumbers(myArray)).toEqual(2);
  });
  test('should return how many of them contain an even number of digits.', () => {
    const myArray = [555, 901, 482, 1771];
    expect(findNumbers(myArray)).toEqual(1);
  });
});
