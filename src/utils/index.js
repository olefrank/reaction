import { welcome, testwrap, summary } from "../components/App/App";

/**
 * Round number to two decimals
 * @param {number} number
 */
export const roundDecimals = number => {
  const rounded = Math.round(number * 100) / 100;
  return parseFloat(rounded).toFixed(2);
};

/**
 * Get random number between min and max
 * @param {number} max
 * @param {number} min (default = 0)
 */
export const getRandomNumber = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Gets random number between 0 and max but not a certain one (if specified)
 * @param {number} max
 * @param {number} notThis if specified don't return this number
 */
export const getRandomNumberNotThis = (max, notThis) => {
  let found = false;
  let random;

  while (!found) {
    random = getRandomNumber(max);
    if (random !== notThis) {
      found = true;
    }
  }
  return random;
};

/**
 * Create list of app steps
 * example: [welcome, testwrap, testwrap, summary]
 * @param {number} numTests number of test steps to generate
 */
export const getSteps = numTests => {
  // new steps list start with WelcomePage
  const steps = [welcome];

  // add Test steps
  for (let i = 0; i < numTests; i++) {
    steps.push({ ...testwrap, id: i + 1 });
  }

  // finish with SummaryPage
  steps.push(summary);

  return steps;
};
