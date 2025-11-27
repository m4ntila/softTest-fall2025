import add from '../src/add.js';

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('adds positive and negative numbers', () => {
    expect(add(6, -2)).toBe(4);
  });

  test('adds two negative numbers', () => {
    expect(add(-3, -7)).toBe(-10);
  });

  test('returns a number when passed floats', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('uses default value when one argument is undefined', () => {
    expect(add(undefined, 4)).toBe(4);
    expect(add(4, undefined)).toBe(4);
  });

  test('returns 0 when both arguments are undefined', () => {
    expect(add(undefined, undefined)).toBe(0);
  });

  test('coerces string numbers', () => {
    expect(add('5', '7')).toBe(12);
  });

  test('returns NaN for non-numeric input', () => {
    expect(add('abc', 5)).toBeNaN();
  });
});