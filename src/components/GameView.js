import { useState, useEffect } from "react";
import styled from "styled-components";
// import { getInitialState1, getInitialState2 } from "../initialStates.js";
import { getInitialState2 } from "../initialStates.js";
import Board from "./Board.js";
import Form from "./Form.js";

const StyledContainer = styled.div`
  display: flex;
  font-size: 12px;
`;

const getInitialState = (columnsNumber, rowsNumber) => {
  let state = Array(columnsNumber)
    .fill()
    .map(() => Array(rowsNumber).fill(0));
  return getInitialState2(state, columnsNumber, rowsNumber);
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
    for (let row = 0; row < cells?.[0]?.length; row++) {
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

function GameView() {
  const [boardWidth, setBoardWidth] = useState(900);
  const [boardHeight, setBoardHeight] = useState(900);
  const [cellSize, setCellSize] = useState(12);
  const [refreshRate, setRefreshRate] = useState(0);
  const columnsNumber = Math.floor(boardWidth / cellSize);
  const rowsNumber = Math.floor(boardHeight / cellSize);
  const [cells, setCells] = useState(() =>
    getInitialState(columnsNumber, rowsNumber)
  );
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const getNewCells = async () => {
      const newCells = await new Promise((resolve) =>
        setTimeout(() => {
          const newCells = applyRules(cells, columnsNumber, rowsNumber);
          resolve(newCells);
        }, refreshRate)
      );
      setCells(newCells);
    };

    if (running) {
      getNewCells();
    }
  }, [refreshRate, cells, running, columnsNumber, rowsNumber, setCells]);

  const toggleRunning = () => {
    setRunning((running) => !running);
  };

  return (
    <StyledContainer>
      <Board
        cells={cells}
        cellSize={cellSize}
        columnsNumber={columnsNumber}
        rowsNumber={rowsNumber}
        toggleRunning={toggleRunning}
      />
      <Form
        boardWidth={boardWidth}
        boardHeight={boardHeight}
        setBoardWidth={setBoardWidth}
        setBoardHeight={setBoardHeight}
        cellSize={cellSize}
        setCellSize={setCellSize}
        refreshRate={refreshRate}
        setRefreshRate={setRefreshRate}
      />
    </StyledContainer>
  );
}

export default GameView;
