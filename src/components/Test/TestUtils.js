import { getRandomNumber } from "../../utils";

/**
 * Get list of valid coordinates for positioning elements
 * @param {*} container The area to render elements inside
 * @param {*} elements List of elements to render
 * @param {*} dimensions Element dimensions ("one size fits all")
 */
export const getElementPositions = (container, elements, dimensions) => {
  if (!container || !elements || !dimensions) {
    console.error(
      "Missing param(s), Must contain 'container', 'elements', 'dimensions"
    );
  }
  if (
    !dimensions.hasOwnProperty("width") ||
    !dimensions.hasOwnProperty("height")
  ) {
    console.error("Dimensions param must have specified width and height");
  }

  const positions = [];

  elements.forEach(el => {
    const position = calcElementPosition(container, positions, dimensions);
    positions.push(position);
  });
  return positions;
};

/**
 * Calculate valid element position
 * - inside container frame
 * - no overlapping elements (WIP: not working)
 * @param {*} container Container area to render elements inside
 * @param {*} positions List of positions already calculated
 * @param {*} dimensions Element dimensions
 */
export const calcElementPosition = (container, positions, dimensions) => {
  const { width, height } = dimensions;

  // max values relative to container
  const maxLeft = container.width - width;
  const maxTop = container.height - height;

  let a, found;
  while (!found) {
    // test overlap of a and each position
    if (a && !isOverlap(positions, a)) {
      found = true;
    } else {
      // generate random position inside container
      a = {
        ...dimensions,
        x: getRandomNumber(maxLeft),
        y: getRandomNumber(maxTop)
      };
    }
  }
  return a;
};

/**
 * Test if element collides with any position in list
 * @param {*} positions List of positions
 * @param {*} a Element
 */
export const isOverlap = (positions, a) => {
  let isOverlap = false;

  positions.forEach((pos, i) => {
    const b = { ...pos };

    if (isCollision(a, b)) {
      isOverlap = true;
      return;
    }
  });

  return isOverlap;
};

/**
 * Test if two elements overlaps / collides
 * @param {*} a Element a
 * @param {*} b Element b
 */
export const isCollision = (a, b) => {
  return !(
    a.y + a.height < b.y ||
    a.y > b.y + b.height ||
    a.x + a.width < b.x ||
    a.x > b.x + b.width
  );
};
