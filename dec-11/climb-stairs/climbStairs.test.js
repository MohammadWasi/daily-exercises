import { climbStairs } from './climbStairs';

test('climbStairs function exists', () => {
  expect(typeof climbStairs).toEqual('function');
});

test('Finds steps to reach to the top', () => {
  expect(climbStairs(2)).toEqual(2);
  expect(climbStairs(3)).toEqual(3);
  expect(climbStairs(4)).toEqual(5);
  expect(climbStairs(5)).toEqual(8);
});
