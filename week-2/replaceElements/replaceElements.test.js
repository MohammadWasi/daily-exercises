import { replaceElements } from './replaceElements';

describe('replaceElements', () => {
  test('should  Replace Elements with Greatest Element on Right Side', () => {
    const arr = [17, 18, 5, 4, 6, 1];
    expect(replaceElements(arr)).toEqual([18, 6, 6, 6, 1, -1]);
  });
});
