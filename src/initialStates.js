// Still lifes
export const addBlock = (state, initialX, initialY) => {
  const newState = state.map((column) => [...column]);

  newState[initialX][initialY] = 1;
  newState[initialX + 1][initialY] = 1;
  newState[initialX + 1][initialY + 1] = 1;
  newState[initialX][initialY + 1] = 1;
  return newState;
};

export const addBeeHive = (state, initialX, initialY) => {
  const newState = state.map((column) => [...column]);

  newState[initialX][initialY] = 1;
  newState[initialX + 1][initialY] = 1;
  newState[initialX + 2][initialY + 1] = 1;
  newState[initialX + 1][initialY + 2] = 1;
  newState[initialX][initialY + 2] = 1;
  newState[initialX - 1][initialY + 1] = 1;
  return newState;
};

export const addLoaf = (state, initialX, initialY) => {
  const newState = state.map((column) => [...column]);

  newState[initialX][initialY] = 1;
  newState[initialX + 1][initialY] = 1;
  newState[initialX + 2][initialY + 1] = 1;
  newState[initialX + 2][initialY + 2] = 1;
  newState[initialX + 1][initialY + 3] = 1;
  newState[initialX][initialY + 2] = 1;
  newState[initialX - 1][initialY + 1] = 1;
  return newState;
};

export const addBoat = (state, initialX, initialY) => {
  const newState = state.map((column) => [...column]);

  newState[initialX][initialY] = 1;
  newState[initialX + 1][initialY] = 1;
  newState[initialX + 2][initialY + 1] = 1;
  newState[initialX + 1][initialY + 2] = 1;
  newState[initialX][initialY + 1] = 1;
  return newState;
};

export const addTub = (state, initialX, initialY) => {
  const newState = state.map((column) => [...column]);

  newState[initialX][initialY] = 1;
  newState[initialX + 1][initialY + 1] = 1;
  newState[initialX][initialY + 2] = 1;
  newState[initialX - 1][initialY + 1] = 1;
  return newState;
};

// Oscilators
export const addBlinker = (state, initialX, initialY) => {
  const newState = state.map((column) => [...column]);

  newState[initialX][initialY] = 1;
  newState[initialX][initialY + 1] = 1;
  newState[initialX][initialY + 2] = 1;
  return newState;
};

export const addToad = (state, initialX, initialY) => {
  const newState = state.map((column) => [...column]);

  newState[initialX][initialY] = 1;
  newState[initialX + 1][initialY] = 1;
  newState[initialX + 2][initialY] = 1;
  newState[initialX + 1][initialY + 1] = 1;
  newState[initialX][initialY + 1] = 1;
  newState[initialX - 1][initialY + 1] = 1;
  return newState;
};

export const addBeacon = (state, initialX, initialY) => {
  const newState = state.map((column) => [...column]);

  newState[initialX][initialY] = 1;
  newState[initialX + 1][initialY] = 1;
  newState[initialX][initialY + 1] = 1;
  newState[initialX + 3][initialY + 2] = 1;
  newState[initialX + 3][initialY + 3] = 1;
  newState[initialX + 2][initialY + 3] = 1;
  return newState;
};

export const addPulsar = (state, initialX, initialY) => {
  const newState = state.map((column) => [...column]);

  newState[initialX][initialY] = 1;
  newState[initialX + 1][initialY] = 1;
  newState[initialX + 2][initialY] = 1;
  newState[initialX + 6][initialY] = 1;
  newState[initialX + 7][initialY] = 1;
  newState[initialX + 8][initialY] = 1;

  newState[initialX - 2][initialY + 2] = 1;
  newState[initialX + 3][initialY + 2] = 1;
  newState[initialX + 5][initialY + 2] = 1;
  newState[initialX + 10][initialY + 2] = 1;

  newState[initialX - 2][initialY + 3] = 1;
  newState[initialX + 3][initialY + 3] = 1;
  newState[initialX + 5][initialY + 3] = 1;
  newState[initialX + 10][initialY + 3] = 1;

  newState[initialX - 2][initialY + 4] = 1;
  newState[initialX + 3][initialY + 4] = 1;
  newState[initialX + 5][initialY + 4] = 1;
  newState[initialX + 10][initialY + 4] = 1;

  newState[initialX][initialY + 5] = 1;
  newState[initialX + 1][initialY + 5] = 1;
  newState[initialX + 2][initialY + 5] = 1;
  newState[initialX + 6][initialY + 5] = 1;
  newState[initialX + 7][initialY + 5] = 1;
  newState[initialX + 8][initialY + 5] = 1;

  newState[initialX][initialY + 7] = 1;
  newState[initialX + 1][initialY + 7] = 1;
  newState[initialX + 2][initialY + 7] = 1;
  newState[initialX + 6][initialY + 7] = 1;
  newState[initialX + 7][initialY + 7] = 1;
  newState[initialX + 8][initialY + 7] = 1;

  newState[initialX - 2][initialY + 8] = 1;
  newState[initialX + 3][initialY + 8] = 1;
  newState[initialX + 5][initialY + 8] = 1;
  newState[initialX + 10][initialY + 8] = 1;

  newState[initialX - 2][initialY + 9] = 1;
  newState[initialX + 3][initialY + 9] = 1;
  newState[initialX + 5][initialY + 9] = 1;
  newState[initialX + 10][initialY + 9] = 1;

  newState[initialX - 2][initialY + 10] = 1;
  newState[initialX + 3][initialY + 10] = 1;
  newState[initialX + 5][initialY + 10] = 1;
  newState[initialX + 10][initialY + 10] = 1;

  newState[initialX][initialY + 12] = 1;
  newState[initialX + 1][initialY + 12] = 1;
  newState[initialX + 2][initialY + 12] = 1;
  newState[initialX + 6][initialY + 12] = 1;
  newState[initialX + 7][initialY + 12] = 1;
  newState[initialX + 8][initialY + 12] = 1;
  return newState;
};

export const addPentadecathlon = (state, initialX, initialY) => {
  const newState = state.map((column) => [...column]);

  newState[initialX][initialY] = 1;
  newState[initialX][initialY + 1] = 1;
  newState[initialX - 1][initialY + 2] = 1;
  newState[initialX + 1][initialY + 2] = 1;
  newState[initialX][initialY + 3] = 1;
  newState[initialX][initialY + 4] = 1;
  newState[initialX][initialY + 5] = 1;
  newState[initialX][initialY + 6] = 1;
  newState[initialX - 1][initialY + 7] = 1;
  newState[initialX + 1][initialY + 7] = 1;
  newState[initialX][initialY + 8] = 1;
  newState[initialX][initialY + 9] = 1;
  return newState;
};

// Spaceships
export const addGlider = (state, initialX, initialY) => {
  const newState = state.map((column) => [...column]);
  newState[initialX][initialY] = 1;
  newState[initialX + 1][initialY + 1] = 1;
  newState[initialX + 1][initialY + 2] = 1;
  newState[initialX][initialY + 2] = 1;
  newState[initialX - 1][initialY + 2] = 1;
  return newState;
};

export const addLWSS = (state, initialX, initialY) => {
  const newState = state.map((column) => [...column]);

  newState[initialX][initialY] = 1;
  newState[initialX + 3][initialY] = 1;
  newState[initialX + 4][initialY + 1] = 1;
  newState[initialX][initialY + 2] = 1;
  newState[initialX + 4][initialY + 2] = 1;
  newState[initialX + 1][initialY + 3] = 1;
  newState[initialX + 2][initialY + 3] = 1;
  newState[initialX + 3][initialY + 3] = 1;
  newState[initialX + 4][initialY + 3] = 1;
  return newState;
};

export const addMWSS = (state, initialX, initialY) => {
  const newState = state.map((column) => [...column]);

  newState[initialX][initialY] = 1;
  newState[initialX - 2][initialY + 1] = 1;
  newState[initialX + 2][initialY + 1] = 1;
  newState[initialX + 3][initialY + 2] = 1;
  newState[initialX - 2][initialY + 3] = 1;
  newState[initialX + 3][initialY + 3] = 1;
  newState[initialX - 1][initialY + 4] = 1;
  newState[initialX][initialY + 4] = 1;
  newState[initialX + 1][initialY + 4] = 1;
  newState[initialX + 2][initialY + 4] = 1;
  newState[initialX + 3][initialY + 4] = 1;
  return newState;
};

export const addHWSS = (state, initialX, initialY) => {
  const newState = state.map((column) => [...column]);

  newState[initialX][initialY] = 1;
  newState[initialX + 1][initialY] = 1;
  newState[initialX - 2][initialY + 1] = 1;
  newState[initialX + 3][initialY + 1] = 1;
  newState[initialX + 4][initialY + 2] = 1;
  newState[initialX - 2][initialY + 3] = 1;
  newState[initialX + 4][initialY + 3] = 1;
  newState[initialX - 1][initialY + 4] = 1;
  newState[initialX][initialY + 4] = 1;
  newState[initialX + 1][initialY + 4] = 1;
  newState[initialX + 2][initialY + 4] = 1;
  newState[initialX + 3][initialY + 4] = 1;
  newState[initialX + 4][initialY + 4] = 1;
  return newState;
};

export const getInitialState1 = (state) => {
  let newState = state.map((column) => [...column]);
  newState = addBlinker(newState, 20, 20);
  newState = addBlinker(newState, 24, 20);
  newState = addGlider(newState, 10, 10);
  return newState;
};

export const getInitialState2 = (state) => {
  let newState = state.map((column) => [...column]);
  newState = addPulsar(newState, 60, 10);
  newState = addHWSS(newState, 10, 10);
  newState = addPentadecathlon(newState, 60, 60);
  newState = addGlider(newState, 30, 40);
  return newState;
};
