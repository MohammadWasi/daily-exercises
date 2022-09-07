import { reverseInt } from './reverseint'

test('ReverseInt function exists', () => {
  expect(reverseInt).toBeDefined();
});

test('ReverseInt handles 0 as an input', () => {
  expect(reverseInt(0)).toEqual(0);
});

test('ReverseInt reverse a positive number', () => {
  expect(reverseInt(120)).toEqual(21);
  expect(reverseInt(15)).toEqual(51);
  expect(reverseInt(90)).toEqual(9);
  expect(reverseInt(2359)).toEqual(9532);
  expect(reverseInt(123)).toEqual(321);
});

test('ReverseInt reverse a negative number', () => {
  expect(reverseInt(-5)).toEqual(-5);
  expect(reverseInt(-15)).toEqual(-51);
  expect(reverseInt(-90)).toEqual(-9);
  expect(reverseInt(-2359)).toEqual(-9532);
  expect(reverseInt(-123)).toEqual(-321);
});
