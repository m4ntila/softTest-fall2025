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

/**
 * AI generated test suite
 */

// describe('isDate', () => {
//   test('returns true for a valid Date object', () => {
//     expect(isDate(new Date())).toBe(true);
//   });

//   test('returns true for a Date object created with new Date()', () => {
//     const d = new Date('2020-01-01');
//     expect(isDate(d)).toBe(true);
//   });

//   test('returns true for an invalid Date object', () => {
//     const invalid = new Date('not a date');
//     // still a Date object even if invalid
//     expect(isDate(invalid)).toBe(true);
//   });

//   test('returns false for date strings', () => {
//     expect(isDate('2020-01-01')).toBe(false);
//     expect(isDate('Mon April 23 2012')).toBe(false);
//   });

//   test('returns false for numbers', () => {
//     expect(isDate(1234567890)).toBe(false);
//   });

//   test('returns false for plain objects', () => {
//     expect(isDate({})).toBe(false);
//   });

//   test('returns false for arrays', () => {
//     expect(isDate([])).toBe(false);
//   });

//   test('returns false for null and undefined', () => {
//     expect(isDate(null)).toBe(false);
//     expect(isDate(undefined)).toBe(false);
//   });

//   test('returns false for boolean values', () => {
//     expect(isDate(true)).toBe(false);
//     expect(isDate(false)).toBe(false);
//   });
// });