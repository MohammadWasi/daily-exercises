import { isValid } from './isValid';

describe('isValid', () => {
  test('should determine if the input string is valid.', () => {
    expect(isValid('()')).toBe(true);
  });
  test('should determine if the input string is valid.', () => {
    expect(isValid('()[]{}')).toBe(true);
  });
  test('should determine if the input string is valid.', () => {
    expect(isValid('(]')).toBe(false);
  });
  test('should determine if the input string is valid.', () => {
    expect(isValid('([)]')).toBe(false);
  });

});
