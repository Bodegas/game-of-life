import { useState, useEffect } from "react";
import styled from "styled-components";
import { getColumsNumber, getRowsNumber } from "../helpers";
import Board from "./Board.js";
import ConfigurationBoardForm from "./ConfigurationBoardForm.js";
import PatternsForm from "./PatternsForm";

const StyledContainer = styled.div`
  display: flex;
  font-size: 12px;
`;

const getEmptyCellsState = (boardWidth, boardHeight, cellSize) => {
  const columnsNumber = getColumsNumber(boardWidth, cellSize);
  const rowsNumber = getRowsNumber(boardHeight, cellSize);
  let state = Array(columnsNumber)
    .fill()
    .map(() => Array(rowsNumber).fill(0));
  return state;
};

const countNeighbours = (neighbours) => {
  const alive = neighbours.filter((n) => n);
  const dead = neighbours.filter((n) => !n);
  return { alive: alive.length, dead: dead.length };
};

const getNeighbours = ({ cells, column, row }) => {
  const columnsNumber = cells.length;
  const rowsNumber = cells[0].length;
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
const rule1 = ({ cells, row, column }) => {
  const { alive } = getNeighbours({
    cells,
    column,
    row,
  });
  return alive === 2 || alive === 3 ? 1 : 0;
};

// If current cell is dead and has 3 neighbours alive, then it back to life.
const rule2 = ({ cells, column, row }) => {
  const { alive } = getNeighbours({
    cells,
    column,
    row,
  });
  return alive === 3 ? 1 : 0;
};

const applyRules = (cells) => {
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
        });
      } else {
        newCells[column][row] = rule2({
          cells,
          column,
          row,
        });
      }
    }
  }
  return newCells;
};

function GameView() {
  const [boardWidth, setBoardWidth] = useState(900);
  const [boardHeight, setBoardHeight] = useState(900);
  const [cellSize, setCellSize] = useState(10);
  const [refreshRate, setRefreshRate] = useState(0);
  const [cells, setCells] = useState(() =>
    getEmptyCellsState(boardWidth, boardHeight, cellSize)
  );
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const getNewCells = async () => {
      const newCells = await new Promise((resolve) =>
        setTimeout(() => {
          const newCells = applyRules(cells);
          resolve(newCells);
        }, refreshRate)
      );
      setCells(newCells);
    };

    if (running) {
      getNewCells();
    }
  }, [refreshRate, cells, running, setCells]);

  useEffect(() => {
    setCells(getEmptyCellsState(boardWidth, boardHeight, cellSize));
  }, [boardWidth, boardHeight, cellSize]);

  const toggleRunning = () => {
    setRunning((running) => !running);
  };

  return (
    <StyledContainer>
      <ConfigurationBoardForm
        boardHeight={boardHeight}
        boardWidth={boardWidth}
        cellSize={cellSize}
        refreshRate={refreshRate}
        setBoardHeight={setBoardHeight}
        setBoardWidth={setBoardWidth}
        setCellSize={setCellSize}
        setRefreshRate={setRefreshRate}
      />
      <Board
        cells={cells}
        cellSize={cellSize}
        height={boardHeight}
        toggleRunning={toggleRunning}
        width={boardWidth}
      />
      <PatternsForm cells={cells} setCells={setCells} />
    </StyledContainer>
  );
}

export default GameView;
