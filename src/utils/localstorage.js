export const namespace = "reaction";

/**
 * Load and deserialize state from Local Storage
 */
export const loadStateFromLocalStorage = state => {
  const result = { ...state };
  let serializedState;

  if (localStorage.hasOwnProperty(namespace)) {
    serializedState = localStorage.getItem(namespace);
  }

  // parse to json object
  serializedState = JSON.parse(serializedState);

  for (let key in result) {
    if (serializedState && serializedState.hasOwnProperty(key)) {
      let value = serializedState[key];

      try {
        value = JSON.parse(value);
        result[key] = value;
      } catch (e) {
        // handle empty string
        result[key] = value;
      }
    }
  }
  return result;
};

/**
 * Save state to local storage
 */
export const saveStateToLocalStorage = state => {
  localStorage.setItem(namespace, JSON.stringify(state));
};
