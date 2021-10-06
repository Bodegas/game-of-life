import { useState, useEffect } from "react";
import styled from "styled-components";

const boardCofiguration = {
  width: 800,
  height: 800,
  color: "back",
  cellSize: 20,
};

const Grid = styled.div`
  background: black;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  display: grid;
  grid-template-columns: ${({ columnsNumber, cellSize }) =>
    `repeat(${columnsNumber}, ${cellSize}px)`};
  grid-template-rows: ${({ rowsNumber, cellSize }) =>
    `repeat(${rowsNumber}, ${cellSize}px)`};
`;

const Cell = styled.div`
  background: ${(props) => (props.alive ? "white" : "black")};
  border-top: 1px solid grey;
  border-left: 1px solid grey;
`;

const getColumnsNumber = (configuration) =>
  configuration.width / configuration.cellSize;

const getRowsNumber = (configuration) =>
  configuration.height / configuration.cellSize;

const getInitialState = (columnsNumber, rowsNumber) => {
  const initialState = Array(rowsNumber)
    .fill()
    .map(() => Array(columnsNumber).fill(0));
  initialState[0][0] = 1;
  return initialState;
};

const rule1 = (cells) => {
  const newCells = cells.map((row) => [...row]);
  for (const row in cells) {
    for (const column in cells[row]) {
      if (cells[row][column - 1]) {
        newCells[row][column] = 1;
      }
    }
  }
  return newCells;
};

function Board() {
  const columnsNumber = getColumnsNumber(boardCofiguration);
  const rowsNumber = getRowsNumber(boardCofiguration);
  const [cells, setCells] = useState(() =>
    getInitialState(rowsNumber, columnsNumber)
  );

  useEffect(() => {
    const getNewCells = async () => {
      const newCells = await new Promise((resolve) =>
        setTimeout(() => {
          const newCells = rule1(cells);
          resolve(newCells);
        }, 1000)
      );
      setCells(newCells);
    };

    getNewCells();
  }, [cells]);

  return (
    <Grid
      width={boardCofiguration.width}
      height={boardCofiguration.height}
      color={boardCofiguration.color}
      cellSize={boardCofiguration.cellSize}
      columnsNumber={columnsNumber}
      rowsNumber={rowsNumber}
    >
      {cells.map((row) => row.map((cell) => <Cell alive={cell} />))}
    </Grid>
  );
}

export default Board;
