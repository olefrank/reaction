import { roundDecimals } from ".";

describe("utils", () => {
  describe("roundDecimals", () => {
    it("should round number correctly to 2 decimals", () => {
      // arrange
      const number = 1.234;
      const expected = "1.23";

      // act
      const actual = roundDecimals(number);

      // assert
      expect(actual).toEqual(expected);
    });
    it("should round number correctly to 2 decimals", () => {
      // arrange
      const number = 1.235;
      const expected = "1.24";

      // act
      const actual = roundDecimals(number);

      // assert
      expect(actual).toEqual(expected);
    });
    it("should ensure result has 2 decimals if not provided initially", () => {
      // arrange
      const number = 1;
      const expected = "1.00";

      // act
      const actual = roundDecimals(number);

      // assert
      expect(actual).toEqual(expected);
    });
  });
});
