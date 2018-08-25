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