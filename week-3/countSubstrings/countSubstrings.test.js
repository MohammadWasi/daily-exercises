import { countSubstrings } from './countSubstrings';

describe('countSubstrings', () => {
  test('should count number of  palindromic substrings in the given string string', () => {
    expect(countSubstrings('abc')).toEqual(3);
  });
  test('should count number of  palindromic substrings in the given string string', () => {
    expect(countSubstrings('aaa')).toEqual(6);
  });

});
