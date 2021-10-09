export const getStick = (state, initialRow, initialColumn) => {
  const newState = state.map((row) => [...row]);

  newState[initialRow][initialColumn + 1] = 1;
  newState[initialRow][initialColumn + 2] = 1;
  newState[initialRow][initialColumn + 3] = 1;
  return newState;
};

export const getWalker = (state, initialRow, initialColumn) => {
  const newState = state.map((row) => [...row]);

  newState[initialRow][initialColumn] = 1;
  newState[initialRow + 1][initialColumn + 1] = 1;
  newState[initialRow + 1][initialColumn + 2] = 1;
  newState[initialRow][initialColumn + 2] = 1;
  newState[initialRow - 1][initialColumn + 2] = 1;
  return newState;
};
