import { majorityElement } from './majorityElement';

test('majorityElement function exists', () => {
  expect(typeof majorityElement).toEqual('function');
});

test('Finds the most frequently used number', () => {
  expect(majorityElement([3, 2, 3])).toEqual(3);
  expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
  expect(majorityElement([6, 5, 5])).toEqual(5);
});
