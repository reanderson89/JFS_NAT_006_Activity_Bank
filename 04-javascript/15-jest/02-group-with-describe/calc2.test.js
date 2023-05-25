const { sum, difference } = require("./calc");

test("should output sum of 2 numbers", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test("should output the difference of 2 numbers", () => {
  const result = difference(3, 2);
  expect(result).toBe(1);
});
