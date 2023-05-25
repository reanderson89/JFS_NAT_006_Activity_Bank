const sum = require('./sum');

test('The sum function should add two numbers together', () => {
    expect(sum(1, 2)).toBe(3);
  });