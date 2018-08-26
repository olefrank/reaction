import { getTestElements } from "../TestWrap/TestWrapUtils";
import * as utils from "./TestUtils";

describe("TestUtils", () => {
  describe("getElementPositions", () => {
    it("should generate a position for all elements", () => {
      const numElements = 5;
      const expected = numElements;

      const container = { width: 1000, height: 1000 };
      const elements = getTestElements(numElements);
      const dimensions = { width: 100, height: 100 };
      const actual = utils.getElementPositions(container, elements, dimensions);

      expect(actual.length).toEqual(expected);
    });
  });

  describe("isOverlap", () => {
    it("should return true if element is colliding with position in list", () => {
      const list = [
        { x: 0, y: 0, width: 10, height: 10 },
        { x: 20, y: 20, width: 10, height: 10 },
        { x: 30, y: 30, width: 10, height: 10 }
      ];
      const a = { x: 5, y: 5, width: 10, height: 10 };
      const expected = true;
      const actual = utils.isOverlap(list, a);
      expect(actual).toEqual(expected);
    });
    it("should return false if no collisions", () => {
      const list = [
        { x: 0, y: 0, width: 10, height: 10 },
        { x: 20, y: 20, width: 10, height: 10 },
        { x: 30, y: 30, width: 10, height: 10 }
      ];
      const a = { x: 100, y: 100, width: 10, height: 10 };
      const expected = false;
      const actual = utils.isOverlap(list, a);
      expect(actual).toEqual(expected);
    });
  });

  describe("isCollision", () => {
    it("should detect colliding elements", () => {
      const a = { width: 10, height: 10, x: 0, y: 0 };
      const b = { width: 10, height: 10, x: 5, y: 5 };

      const expected = true;
      const actual = utils.isCollision(a, b);

      expect(actual).toEqual(expected);
    });
    it("should detect non colliding elements", () => {
      const a = { width: 10, height: 10, x: 0, y: 0 };
      const b = { width: 10, height: 10, x: 11, y: 11 };

      const expected = false;
      const actual = utils.isCollision(a, b);

      expect(actual).toEqual(expected);
    });
  });
});
