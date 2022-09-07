import { subtractProductAndSum } from './subtractProductAndSum';

describe('subtractProductAndSum', () => {
  test('should return Subtract the Product and Sum of Digits of an Integer', () => {
    expect(subtractProductAndSum(234)).toEqual(15);
  });
});
