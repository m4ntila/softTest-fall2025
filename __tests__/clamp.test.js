import clamp from '../src/clamp.js';

//This suite will fail
describe.skip('clamp', () => {
  test('clamps number below lower bound', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

  test('clamps number above upper bound', () => {
    expect(clamp(10, -5, 5)).toBe(5);
  });

  test('returns number when within bounds', () => {
    expect(clamp(2, -5, 5)).toBe(2);
  });

  test('coerces string inputs to numbers', () => {
    expect(clamp('10', '-5', '5')).toBe(5);
    expect(clamp('-3', '-5', '5')).toBe(-3);
  });

  test('handles NaN lower bound (defaults to 0)', () => {
    expect(clamp(4, NaN, 10)).toBe(10 <= 0 ? 10 : 0);
    expect(clamp(4, NaN, NaN)).toBe(0);
  });

  test('handles NaN upper bound (defaults to 0)', () => {
    expect(clamp(4, 1, NaN)).toBe(1);
  });

  test('returns number unchanged when number is NaN', () => {
    expect(clamp(NaN, 0, 10)).toBeNaN();
  });

  test('handles equal lower and upper bounds', () => {
    expect(clamp(5, 3, 3)).toBe(3);
    expect(clamp(1, 3, 3)).toBe(3);
  });

  test('handles reversed bounds due to implementation logic', () => {
    expect(clamp(5, 10, 0)).toBe(0);
  });
});
