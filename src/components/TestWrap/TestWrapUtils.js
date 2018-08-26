import { getRandomNumberNotThis } from "../../utils";
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
