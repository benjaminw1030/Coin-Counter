import { coinString } from '../src/js/coinCounterClosure.js';

describe('coinCounterClosure', () => {

  test('should return a string', () => {
    expect(typeof coinString(4.99)).toEqual("string");
  });

  test('should return a string with accurate counts', () => {
    expect(coinString(4.92, 0, 0, 0, 0)).toEqual("19 quarters, 1 dimes, 1 nickels, 1 pennies");
  });
});
