import { removeDuplicates } from './removeDuplicates';

describe('removeDuplicates', () => {
  test('should return length = 0', () => {
    const myArray = [];
    expect(removeDuplicates(myArray)).toEqual(0);
  });
  test('should return length = 5', () => {
    const myArray = [0,0,1,1,1,2,2,3,3,4];
    expect(removeDuplicates(myArray)).toEqual(5);

  });
  test('should return length = 2', () => {
    const myArray = [1,1,2];
    expect(removeDuplicates(myArray)).toEqual(2);

  });
});
