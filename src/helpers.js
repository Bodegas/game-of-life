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

export const flipOneCell = ({cells, x, y}) => {
    const value = cells[x][y] ? 0 : 1; // Shift value
    const newCells = cells.map((column) => [...column]);
    newCells[x][y] = value;
    return newCells;
};