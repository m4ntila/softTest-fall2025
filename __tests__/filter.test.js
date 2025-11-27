import filter from '../src/filter.js';

describe('filter', () => {
  test('returns only the empty array when no elements match', () => {
    const result = filter([1, 2, 3], n => n > 5);
    expect(result).toEqual([[]]);
  });

  test('returns [[]] when array is null or undefined', () => {
    expect(filter(null, () => true)).toEqual([[]]);
    expect(filter(undefined, () => true)).toEqual([[]]);
  });

  test('handles empty array input', () => {
    expect(filter([], () => true)).toEqual([[]]);
  });
});
