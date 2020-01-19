import { replaceElements } from './replaceElements';

describe('replaceElements', () => {
  test('should return square array', () => {
    const myArray = [17, 18, 5, 4, 6, 1];
    expect(replaceElements(myArray)).toEqual([18, 6, 6, 6, 1, -1]);

  });
});
