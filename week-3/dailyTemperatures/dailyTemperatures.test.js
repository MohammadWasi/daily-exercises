import { dailyTemperatures } from './dailyTemperatures.';

describe('dailyTemperatures', () => {
  test('should  return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature', () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });
  

});
