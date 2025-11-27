import isEmpty from '../src/isEmpty.js';

describe('isEmpty', () => {

  test('returns true for null or undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('returns true for empty array and false for non-empty array', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1])).toBe(false);
  });

  test('returns true for empty string and false for non-empty string', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty('abc')).toBe(false);
  });

  test('returns true/false for Map', () => {
    expect(isEmpty(new Map())).toBe(true);
    const map = new Map();
    map.set('x', 1);
    expect(isEmpty(map)).toBe(false);
  });

  test('returns true/false for Set', () => {
    expect(isEmpty(new Set())).toBe(true);
    const set = new Set([1]);
    expect(isEmpty(set)).toBe(false);
  });


  test('returns true for booleans and numbers', () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(123)).toBe(true);
  });
});
