import isObjectLike from '../src/isObjectLike.js';

describe('isObjectLike', () => {
  test('returns true for plain objects', () => {
    expect(isObjectLike({})).toBe(true);
  });

  test('returns true for arrays', () => {
    expect(isObjectLike([1, 2, 3])).toBe(true);
  });

  test('returns false for null', () => {
    expect(isObjectLike(null)).toBe(false);
  });

  test('returns false for functions', () => {
    expect(isObjectLike(function () {})).toBe(false);
    expect(isObjectLike(() => {})).toBe(false);
  });

  test('returns false for primitives', () => {
    expect(isObjectLike(123)).toBe(false);
    expect(isObjectLike('abc')).toBe(false);
    expect(isObjectLike(true)).toBe(false);
    expect(isObjectLike(Symbol('x'))).toBe(false);
    expect(isObjectLike(undefined)).toBe(false);
  });

  test('returns true for object wrappers', () => {
    expect(isObjectLike(new Number(5))).toBe(true);
    expect(isObjectLike(new String('x'))).toBe(true);
    expect(isObjectLike(new Boolean(true))).toBe(true);
  });
});
