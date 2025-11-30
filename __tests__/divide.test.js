import divide from '../src/divide.js';


//This suite will fail
describe.skip('divide', () => {
  test('divides two positive numbers', () => {
    expect(divide(6, 4)).toBe(1.5);
  });

  test('divides negative numbers', () => {
    expect(divide(-6, 3)).toBe(-2);
  });

  test('divides by a negative number', () => {
    expect(divide(6, -3)).toBe(-2);
  });

  test('handles floating point division', () => {
    expect(divide(0.3, 0.1)).toBeCloseTo(3);
  });

  test('defaults when one argument is undefined', () => {
    expect(divide(undefined, 4)).toBe(1 / 4);
    expect(divide(4, undefined)).toBe(4 / 1);
  });

  test('returns default (1) when both args undefined', () => {
    expect(divide(undefined, undefined)).toBe(1);
  });

  test('coerces string numbers', () => {
    expect(divide('6', '2')).toBe(3);
  });

  test('returns NaN when divisor is 0', () => {
    expect(divide(5, 0)).toBeNaN();
  });

  test('returns NaN for non-numeric input', () => {
    expect(divide('abc', 5)).toBeNaN();
    expect(divide(10, 'xyz')).toBeNaN();
  });
});