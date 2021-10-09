import { useState, useEffect } from "react";
import styled from "styled-components";
import { getInitialState1 } from "./initialStates.js";

const boardCofiguration = {
  width: 800,
  height: 800,
  color: "back",
  cellSize: 10,
};

const Grid = styled.div`
  background: black;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  display: grid;
  grid-auto-flow: column;
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
  let state = Array(columnsNumber)
    .fill()
    .map(() => Array(rowsNumber).fill(0));
  return getInitialState1(state);
};

const countNeighbours = (neighbours) => {
  const alive = neighbours.filter((n) => n);
  const dead = neighbours.filter((n) => !n);
  return { alive: alive.length, dead: dead.length };
};

const getNeighbours = ({ cells, column, row, columnsNumber, rowsNumber }) => {
  const neighbours = [];
  const x = column + columnsNumber;
  const y = row + rowsNumber;
  neighbours.push(cells[(x - 1) % columnsNumber][(y - 1) % rowsNumber]);
  neighbours.push(cells[x % columnsNumber][(y - 1) % rowsNumber]);
  neighbours.push(cells[(x + 1) % columnsNumber][(y - 1) % rowsNumber]);
  neighbours.push(cells[(x + 1) % columnsNumber][y % rowsNumber]);
  neighbours.push(cells[(x + 1) % columnsNumber][(y + 1) % rowsNumber]);
  neighbours.push(cells[x % columnsNumber][(y + 1) % rowsNumber]);
  neighbours.push(cells[(x - 1) % columnsNumber][(y + 1) % rowsNumber]);
  neighbours.push(cells[(x - 1) % columnsNumber][y % rowsNumber]);
  return countNeighbours(neighbours);
};

// If current cell
const rule1 = ({ cells, row, column, rowsNumber, columnsNumber }) => {
  const { alive } = getNeighbours({
    cells,
    column,
    row,
    columnsNumber,
    rowsNumber,
  });
  return alive === 2 || alive === 3 ? 1 : 0;
};

// If current cell is dead and has 3 neighbours alive, then it back to life.
const rule2 = ({ cells, column, row, columnsNumber, rowsNumber }) => {
  const { alive } = getNeighbours({
    cells,
    column,
    row,
    columnsNumber,
    rowsNumber,
  });
  return alive === 3 ? 1 : 0;
};

const applyRules = (cells, columnsNumber, rowsNumber) => {
  const newCells = cells.map((column) => [...column]);
  for (let column = 0; column < cells.length; column++) {
    for (let row = 0; row < cells.length; row++) {
      const currentCell = cells[column][row];
      const isAlive = currentCell;
      if (isAlive) {
        newCells[column][row] = rule1({
          cells,
          column,
          row,
          columnsNumber,
          rowsNumber,
        });
      } else {
        newCells[column][row] = rule2({
          cells,
          column,
          row,
          columnsNumber,
          rowsNumber,
        });
      }
    }
  }
  return newCells;
};

function Board() {
  const columnsNumber = getColumnsNumber(boardCofiguration);
  const rowsNumber = getRowsNumber(boardCofiguration);
  const [cells, setCells] = useState(() =>
    getInitialState(columnsNumber, rowsNumber)
  );
  const [running, setRunning] = useState(true);

  useEffect(() => {
    const getNewCells = async () => {
      const newCells = await new Promise((resolve) =>
        setTimeout(() => {
          const newCells = applyRules(cells, columnsNumber, rowsNumber);
          resolve(newCells);
        }, 200)
      );
      setCells(newCells);
    };

    if (running) {
      getNewCells();
    }
  }, [cells, running]);

  const toggleRunning = () => {
    setRunning(running => !running);
  };

  return (
    <Grid
      width={boardCofiguration.width}
      height={boardCofiguration.height}
      color={boardCofiguration.color}
      cellSize={boardCofiguration.cellSize}
      columnsNumber={columnsNumber}
      rowsNumber={rowsNumber}
      onClick={toggleRunning}
    >
      {cells.map((column) => column.map((cell) => <Cell alive={cell} />))}
    </Grid>
  );
}

export default Board;
