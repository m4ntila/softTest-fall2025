// __tests__/add.test.js
import add from '../src/add.js';

test('adds two numbers correctly', () => {
  expect(add(6, 4)).toBe(10);
  expect(add(0, 5)).toBe(5);
  expect(add(-2, 2)).toBe(0);
});
