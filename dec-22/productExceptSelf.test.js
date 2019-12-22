import { productExceptSelf } from './productExceptSelf';

describe('productExceptSelf', () => {
  test('should return array equal to the product of all the elements of nums except nums[i]', () => {
    const myArray = [1, 2, 3, 4];
    expect(productExceptSelf(myArray)).toEqual([24, 12, 8, 6]);
  });
  test('should return array equal to the product of all the elements of nums except nums[i]', () => {
    const myArray = [10, 3, 5, 6, 2];
    expect(productExceptSelf(myArray)).toEqual([180, 600, 360, 300, 900]);
  });
});
