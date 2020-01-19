import { diStringMatch } from './diStringMatch';

describe('diStringMatch', () => {
  test('should return square array', () => {
    expect(diStringMatch('IDID')).toEqual([0, 4, 1, 3, 2]);
    expect(diStringMatch('III')).toEqual([0, 1, 2, 3]);
    expect(diStringMatch('DDI')).toEqual([3, 2, 0, 1]);
  });
});
