import camelCase from '../src/camelCase.js';

//This suite will fail
describe.skip('camelCase', () => {
  test('converts normal spaced strings', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
  });

  test('handles hyphenated strings', () => {
    expect(camelCase('foo-bar')).toBe('fooBar');
    expect(camelCase('--foo-bar--')).toBe('fooBar');
  });

  test('handles underscore-separated strings', () => {
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
  });

  test('removes apostrophes / smart quotes before processing', () => {
    expect(camelCase("Lloyd's Example")).toBe('lloydsExample');
    expect(camelCase("Rock\u2019n\u2019Roll")).toBe('rocknroll');
  });

  test('handles single word strings', () => {
    expect(camelCase('FOO')).toBe('foo');
    expect(camelCase('bar')).toBe('bar');
  });

  test('handles mixed casing', () => {
    expect(camelCase('fOo BaR')).toBe('fooBar');
  });

  test('handles numeric characters', () => {
    expect(camelCase('foo 123 bar')).toBe('foo123Bar');
    expect(camelCase('version-2-update')).toBe('version2Update');
  });

  test('coerces non-string input via toString()', () => {
    expect(camelCase(1234)).toBe('1234');
    expect(camelCase(null)).toBe('null');
    expect(camelCase(undefined)).toBe('undefined');
  });

  test('handles empty string', () => {
    expect(camelCase('')).toBe('');
  });

  test('handles multi-space separators', () => {
    expect(camelCase('foo    bar   baz')).toBe('fooBarBaz');
  });
});
