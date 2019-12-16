import { containsDuplicate } from './containsDuplicate';

describe('containsDuplicate', () => {
  test('should return true', () => {
    const myArray = [1, 2, 3, 1];
    expect(containsDuplicate(myArray)).toBe(true);
  });
  test('should return false', () => {
    const myArray = [1, 2, 3, 4];
    expect(containsDuplicate(myArray)).toBe(false);
  });
  test('should return false', () => {
    const myArray = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    expect(containsDuplicate(myArray)).toBe(true);
  });
});
