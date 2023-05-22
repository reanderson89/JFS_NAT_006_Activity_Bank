const { sum, difference, oddOrEven } = require("./calc");




describe("Calculator functions ", () => {
  
  test.each([
    // all of our test cases go in this array
    {a: 1, b: 2, expected: 3},
    {a: -1, b: 1, expected: 0},
    {a: "2", b: "2", expected: 4}
  ])("$a + $b should equal $expected", ({a,b,expected}) => {
    const result = sum(a,b);
    expect(result).toBe(expected);
  });


  // test("should output the difference of 2 numbers", () => {
  //   const result = difference(3, 2);
  //   expect(result).toBe(1);
  // });

  // test('should be an even number', () => {
  //   const result = oddOrEven(2);
  //   expect(result).toBe(`${input} is an even number`)
  // })
});
