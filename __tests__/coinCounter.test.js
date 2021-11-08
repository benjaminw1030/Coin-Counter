import coinCounter from '../src/js/coinCounter.js';

describe('coinCounter', () => {

  test('should return a string', () => {
    expect(typeof coinCounter(4.99, 0, 0, 0, 0)).toEqual("string");
  });

  test('should return a string with accurate counts', () => {
    expect(coinCounter(4.92, 0, 0, 0, 0)).toEqual("19 quarters, 1 dimes, 1 nickels, 1 pennies");
  });
});
