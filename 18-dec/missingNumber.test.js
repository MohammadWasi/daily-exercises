import { missingNumber } from './missingNumber';

describe('missingNumber', () => {
  test('should return 2', () => {
    const myArray = [3, 0, 1];
    expect(missingNumber(myArray)).toEqual(2);
  });
  test('should return 1', () => {
    const myArray = [0];
    expect(missingNumber(myArray)).toEqual(1);
  });
  test('should return 0', () => {
    const myArray = [1];
    expect(missingNumber(myArray)).toEqual(0);
  });
});
