import isDate from '../src/isDate.js';

describe('isDate', () => {
  test('returns true for a Date object', () => {
    expect(isDate(new Date())).toBe(true);
  });

  test('returns false for a string date', () => {
    expect(isDate('Mon April 23 2012')).toBe(false);
  });

  test('returns false for non-object values', () => {
    expect(isDate(null)).toBe(false);
    expect(isDate(123)).toBe(false);
    expect(isDate(true)).toBe(false);
  });

  test('returns false for objects that are not Date', () => {
    expect(isDate({})).toBe(false);
    expect(isDate([])).toBe(false);
  });
});
