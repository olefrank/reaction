import * as utils from "./TestWrapUtils";

describe("TestWrapUtils", () => {
  describe("getTestElements", () => {
    it("should generate list with correct number of elements", () => {
      const numElements = 5;
      const expected = numElements;
      const actual = utils.getTestElements(numElements).length;
      expect(actual).toEqual(expected);
    });

    it("should generate list with unique correct element", () => {
      const numElements = 100;
      const expected = 1;
      // generate list of random elements
      const list = utils.getTestElements(numElements);
      // find name of correct element (first)
      const correct = list[0]().props.children.props.name;
      // filter list for elements with correct name
      const actual = list.filter(
        el => el().props.children.props.name === correct
      ).length;
      expect(actual).toEqual(expected);
    });
  });
});
