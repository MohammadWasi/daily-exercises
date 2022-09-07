import { fizzBuzz } from './fizzBuzz';

describe('fizzBuzz', () => {
  test('fizzBuzz', () => {
    const myArray = [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ];
    expect(fizzBuzz(15)).toEqual(myArray);
  });
});
