import eq from '../src/eq.js';

describe('eq', () => {
  test('returns true for the same object reference', () => {
    const obj = { a: 1 };
    expect(eq(obj, obj)).toBe(true);
  });

  test('returns false for two different objects with same structure', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    expect(eq(obj1, obj2)).toBe(false);
  });

  test('returns true for equal primitive strings', () => {
    expect(eq('a', 'a')).toBe(true);
  });

  test('returns true for numbers that are equal', () => {
    expect(eq(3, 3)).toBe(true);
  });

  test('returns false for numbers that are not equal', () => {
    expect(eq(3, 4)).toBe(false);
  });

  test('returns true when both values are NaN', () => {
    expect(eq(NaN, NaN)).toBe(true);
  });

  test('returns false when only one value is NaN', () => {
    expect(eq(NaN, 5)).toBe(false);
    expect(eq(5, NaN)).toBe(false);
  });

  test('returns true for loosely equal values (==)', () => {
    // Because your function uses "value == other"
    expect(eq(1, '1')).toBe(true);
    expect(eq(null, undefined)).toBe(true);
  });

  test('returns false for values not equal under == comparison', () => {
    expect(eq(1, '2')).toBe(false);
    expect(eq(false, 'false')).toBe(false);
  });
});
