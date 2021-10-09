import { useState, useEffect } from "react";
import styled from "styled-components";
import { getStick, getWalker } from "./initialStates.js";

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
  return getWalker(initialState, 10, 10);
};

const countNeighbours = neighbours => {
  const alive = neighbours.filter((n) => n);
  const dead = neighbours.filter((n) => !n);
  return { alive: alive.length, dead: dead.length };
};

const getNeighbours = ({cells, row, column, rowsNumber, columnsNumber}) => {
  const neighbours = [];
  const x = row + rowsNumber;
  const y = column + columnsNumber;
  neighbours.push(cells[((x - 1)) % rowsNumber][(y - 1) % columnsNumber]);
  neighbours.push(cells[x % rowsNumber][(y - 1) % columnsNumber]);
  neighbours.push(cells[(x + 1) % rowsNumber][(y - 1) % columnsNumber]);
  neighbours.push(cells[(x + 1) % rowsNumber][y % columnsNumber]);
  neighbours.push(cells[(x + 1) % rowsNumber][(y + 1) % columnsNumber]);
  neighbours.push(cells[x % rowsNumber][(y + 1) % columnsNumber]);
  neighbours.push(cells[(x - 1) % rowsNumber][(y + 1) % columnsNumber]);
  neighbours.push(cells[(x - 1) % rowsNumber][y % columnsNumber]);
  return countNeighbours(neighbours);
};

// If current cell
const rule1 = ({cells, row, column, rowsNumber, columnsNumber}) => {
  const { alive } = getNeighbours({cells, row, column, rowsNumber, columnsNumber});
  return (alive === 2 || alive === 3) ? 1 : 0;
};

// If current cell is dead and has 3 neighbours alive, then it back to life.
const rule2 = ({cells, row, column, rowsNumber, columnsNumber}) => {
  const { alive } = getNeighbours({cells, row, column, rowsNumber, columnsNumber});
  return alive === 3 ? 1 : 0;
};

const applyRules = (cells, rowsNumber, columnsNumber) => {
  const newCells = cells.map((row) => [...row]);
  for (let row = 0; row < cells.length; row++) {
    for (let column = 0; column < cells.length; column++) {
      const currentCell = cells[row][column];
      const isAlive = currentCell;
      if (isAlive) {
        newCells[row][column] = rule1({cells, row, column, rowsNumber, columnsNumber});
      } else {
        newCells[row][column] = rule2({cells, row, column, rowsNumber, columnsNumber});
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
          const newCells = applyRules(cells, rowsNumber, columnsNumber);
          resolve(newCells);
        }, 200)
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
