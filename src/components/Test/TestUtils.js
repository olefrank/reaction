import { getRandomNumber, getRandomNumberNotThis } from "../../utils";
import { elements as allElements } from "../Elements/Elements";

/**
 * Generate list of shapes to use in this test
 * @param {number} numElements number of shapes to create
 */
export const getTestElements = (numElements = 5) => {
  const elements = [];
  const maxIndex = allElements.length - 1;

  // get correct shape
  const correctIndex = getRandomNumberNotThis(maxIndex);
  const correct = allElements[correctIndex];
  elements.push(correct);
  numElements -= 1;

  // get other shapes
  let randomIndex;
  for (let i = 0; i < numElements; i++) {
    randomIndex = getRandomNumberNotThis(maxIndex, correctIndex);
    const el = allElements[randomIndex];
    elements.push(el);
  }
  return elements;
};

export const getElementPositions = (container, elements, dimensions) => {
  const positions = [];

  elements.forEach(el => {
    const position = calcElementPosition(container, positions, dimensions);
    positions.push(position);
  });
  return positions;
};

const calcElementPosition = (container, positions, dimensions) => {
  const { width, height } = dimensions;
  let x, y, a, b, found;

  // max values relative to container
  const maxLeft = container.width - width;
  const maxTop = container.height - height;

  // generate random position inside container
  x = getRandomNumber(maxLeft);
  y = getRandomNumber(maxTop);

  // create position
  a = { x, y, width, height };

  // test collision with other elements
  positions.forEach(pos => {
    b = { ...pos };

    while (!found) {
      // test collision
      if (!isCollision(a, b)) {
        found = true;
      } else {
        // generate random position inside container
        a.x = getRandomNumber(maxLeft);
        a.y = getRandomNumber(maxTop);
      }
    }
  });

  return a;
};

// not working
const isCollision = (a, b) => {
  return !(
    a.y + a.height < b.y ||
    a.y > b.y + b.height ||
    a.x + a.width < b.x ||
    a.x > b.x + b.width
  );
};
