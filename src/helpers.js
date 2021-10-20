export const getColumsNumber = (boardWidth, cellSize) => Math.floor(boardWidth / cellSize);

export const getRowsNumber = (boardHeight, cellSize) => Math.floor(boardHeight / cellSize);

export const applyPattern = ({ pattern, state, initialX, initialY }) => {
  const columnsNumber = state.length;
  const rowsNumber = state[0].length;
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

// export const getInitialState1 = (state) => {
//   let newState = applyPattern({
//     pattern: BLINKER,
//     state,
//     initialX: 20,
//     initialY: 20,
//   });
//   newState = applyPattern({
//     pattern: BLINKER,
//     state: newState,
//     initialX: 24,
//     initialY: 20,
//   });
//   newState = applyPattern({
//     pattern: GLIDER,
//     state: newState,
//     initialX: 9,
//     initialY: 10,
//   });
//   return newState;
// };

// export const getInitialState2 = (state) => {
//   let newState = applyPattern({
//     pattern: PULSAR,
//     state: state,
//     initialX: 60,
//     initialY: 10,
//   });
//   newState = applyPattern({
//     pattern: HWSS,
//     state: newState,
//     initialX: 10,
//     initialY: 10,
//   });
//   newState = applyPattern({
//     pattern: PENTADECATHLON,
//     state: newState,
//     initialX: 60,
//     initialY: 60,
//   });
//   newState = applyPattern({
//     pattern: GLIDER,
//     state: newState,
//     initialX: 30,
//     initialY: 40,
//   });
//   return newState;
// };