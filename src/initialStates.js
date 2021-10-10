// Still lifes
const BLOCK = [
  [1, 1],
  [1, 1],
];

const BEEHIVE = [
  [0, 1, 0],
  [1, 0, 1],
  [1, 0, 1],
  [0, 1, 0],
];

const LOAF = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [1, 0, 0, 1],
  [0, 1, 1, 0],
];

const BOAT = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

const TUB = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

// Oscilators
const BLINKER = [[1, 1, 1]];

const TOAD = [
  [0, 1],
  [1, 1],
  [1, 1],
  [1, 0],
];

const BEACON = [
  [1, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 1, 1],
  [0, 0, 1, 1],
];

const PULSAR = [
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
];

const PENTADECATHLON = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
];

// Spaceships
const GLIDER = [
  [0, 0, 1],
  [1, 0, 1],
  [0, 1, 1],
];

const LWSS = [
  [1, 0, 1, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [1, 0, 0, 1],
  [0, 1, 1, 1],
];

const MWSS = [
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 1],
];

const HWSS = [
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 1],
];

const applyPattern = (pattern, state, initialX, initialY) => {
  const newState = state.map((column) => [...column]);
  pattern.forEach((column, x) =>
    column.forEach((cell, y) => (newState[initialX + x][initialY + y] = cell))
  );
  return newState;
};

export const getInitialState1 = (state) => {
  let newState = applyPattern(BLINKER, state, 20, 20);
  newState = applyPattern(BLINKER, newState, 24, 20);
  newState = applyPattern(GLIDER, newState, 9, 10);
  return newState;
};

export const getInitialState2 = (state) => {
  let newState = applyPattern(PULSAR, state, 60, 10);
  newState = applyPattern(HWSS, newState, 10, 10);
  newState = applyPattern(PENTADECATHLON, newState, 60, 60);
  newState = applyPattern(GLIDER, newState, 30, 40);
  return newState;
};
