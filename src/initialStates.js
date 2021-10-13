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

const applyPattern = ({
  pattern,
  state,
  initialX,
  initialY,
  columnsNumber,
  rowsNumber,
}) => {
  const newState = state.map((column) => [...column]);
  pattern.forEach((column, x) =>
    column.forEach(
      (cell, y) =>
        (newState[(initialX + x + columnsNumber) % columnsNumber][
          (initialY + y + rowsNumber) % rowsNumber
        ] = cell)
    )
  );
  return newState;
};

export const getInitialState1 = (state, columnsNumber, rowsNumber) => {
  let newState = applyPattern({
    pattern: BLINKER,
    state,
    initialX: 20,
    initialY: 20,
    columnsNumber,
    rowsNumber,
  });
  newState = applyPattern({
    pattern: BLINKER,
    state: newState,
    initialX: 24,
    initialY: 20,
    columnsNumber,
    rowsNumber,
  });
  newState = applyPattern({
    pattern: GLIDER,
    state: newState,
    initialX: 9,
    initialY: 10,
    columnsNumber,
    rowsNumber,
  });
  return newState;
};

export const getInitialState2 = (state, columnsNumber, rowsNumber) => {
  let newState = applyPattern({
    pattern: PULSAR,
    state: state,
    initialX: 60,
    initialY: 10,
    columnsNumber,
    rowsNumber,
  });
  newState = applyPattern({
    pattern: HWSS,
    state: newState,
    initialX: 10,
    initialY: 10,
    columnsNumber,
    rowsNumber,
  });
  newState = applyPattern({
    pattern: PENTADECATHLON,
    state: newState,
    initialX: 60,
    initialY: 60,
    columnsNumber,
    rowsNumber,
  });
  newState = applyPattern({
    pattern: GLIDER,
    state: newState,
    initialX: 30,
    initialY: 40,
    columnsNumber,
    rowsNumber,
  });
  return newState;
};
