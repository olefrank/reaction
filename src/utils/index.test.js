import { roundDecimals, getRandomNumberNotThis, getSteps } from ".";

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

  describe("getRandomNumberNotThis", () => {
    it("should generate random number within range", () => {
      const max = 10;
      const actual = getRandomNumberNotThis(max);
      expect(actual).toBeLessThanOrEqual(max);
    });

    it("should generate random number other than the one given", () => {
      const max = 1;
      const not = 0;
      const expected = max;
      const actual = getRandomNumberNotThis(max, not);

      expect(actual).toEqual(expected);
    });
  });

  describe("getSteps", () => {
    it("should generate correct amount of steps", () => {
      const numTests = 3;
      const expected = 5;
      const actual = getSteps(numTests).length;
      expect(actual).toEqual(expected);
    });
    it("should generate steps in correct order", () => {
      const numTests = 5;
      const expected = [
        "welcome",
        "testwrap",
        "testwrap",
        "testwrap",
        "testwrap",
        "testwrap",
        "summary"
      ];
      const actual = getSteps(numTests);
      actual.forEach((step, i) => expect(step.name).toEqual(expected[i]));
    });
  });
});
