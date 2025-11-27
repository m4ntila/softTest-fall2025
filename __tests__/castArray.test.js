import castArray from '../src/castArray.js';

describe('castArray', () => {
  test('casts a number to an array', () => {
    expect(castArray(1)).toEqual([1]);
  });

  test('casts an object to an array', () => {
    expect(castArray({ a: 1 })).toEqual([{ a: 1 }]);
  });

  test('casts a string to an array', () => {
    expect(castArray('abc')).toEqual(['abc']);
  });

  test('casts null to an array', () => {
    expect(castArray(null)).toEqual([null]);
  });

  test('casts undefined to an array', () => {
    expect(castArray(undefined)).toEqual([undefined]);
  });

  test('returns empty array when called with no arguments', () => {
    expect(castArray()).toEqual([]);
  });

  test('returns same array when argument is already an array', () => {
    const arr = [1, 2, 3];
    expect(castArray(arr)).toBe(arr);
  });
});