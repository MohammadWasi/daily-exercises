import { isValid } from './isValid';

test('isValid function exists', () => {
  expect(typeof isValid).toBe('function');
});

test('Determines if the input string is valid parentheses', () => {
  expect(isValid('()')).toBe(true);
  expect(isValid('()[]{}')).toBe(true);
  expect(isValid('(]')).toBe(false);
  expect(isValid('([)]')).toBe(false);
  expect(isValid('{[]}')).toBe(true);
});
