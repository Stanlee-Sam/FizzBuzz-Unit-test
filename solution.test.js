const { FizzBuzz } = require("./solution");
describe("FizzBuzz", () => {
  it("Returns FizzBuzz if number is divisible by both 3 and 5", () => {
    expect(FizzBuzz(30)).toBe("FizzBuzz");
  });
  it("Returns Buzz if number is divisible by 5", () => {
    expect(FizzBuzz(5)).toBe("Buzz");
  });

  it("Returns FizzBuzz if number is divisible by 3 ", () => {
    expect(FizzBuzz(3)).toBe("Fizz");
  });
  it("Returns the number for non-multiples", () => {
    expect(FizzBuzz(1)).toBe(1);
  });
});
