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

/**
 * AI generated test suite
 */
// describe('filter', () => {
//   test('returns only the empty array when no elements match', () => {
//     const result = filter([1, 2, 3], n => n > 5);
//     expect(result).toEqual([[]]);
//   });

//   test('returns [[]] when array is null or undefined', () => {
//     expect(filter(null, () => true)).toEqual([[]]);
//     expect(filter(undefined, () => true)).toEqual([[]]);
//   });

//   test('handles empty array input', () => {
//     expect(filter([], () => true)).toEqual([[]]);
//   });

//   test('returns matching elements wrapped in an array', () => {
//     const result = filter([1, 2, 3, 4], n => n % 2 === 0);
//     expect(result).toEqual([[2, 4]]);
//   });

//   test('returns [[]] when predicate always returns false', () => {
//     const result = filter([10, 20, 30], () => false);
//     expect(result).toEqual([[]]);
//   });

//   test('predicate receives correct arguments', () => {
//     const mockPredicate = jest.fn(n => n > 2);

//     filter([1, 2, 3], mockPredicate);

//     expect(mockPredicate).toHaveBeenCalledTimes(3);
//     expect(mockPredicate).toHaveBeenNthCalledWith(1, 1, 0, [1, 2, 3]);
//     expect(mockPredicate).toHaveBeenNthCalledWith(2, 2, 1, [1, 2, 3]);
//     expect(mockPredicate).toHaveBeenNthCalledWith(3, 3, 2, [1, 2, 3]);
//   });
// });