import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { getColumsNumber, getRowsNumber } from "../helpers";

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
  margin-left: 4em;
  margin-right: 4em;
`;

const Cell = styled.div`
  background: ${(props) => (props.alive ? "white" : "black")};
  border-top: 1px solid grey;
  border-left: 1px solid grey;
`;

const Board = ({
  cells,
  cellSize,
  height,
  toggleRunning,
  width,
}) => {
  const columnsNumber = getColumsNumber(width, cellSize);
  const rowsNumber = getRowsNumber(height, cellSize);
  return (
    <Grid
      width={width}
      height={height}
      color="black"
      cellSize={cellSize}
      columnsNumber={columnsNumber}
      rowsNumber={rowsNumber}
      onClick={toggleRunning}
    >
      {cells.map((column) => column.map((cell, index) => <Cell key={index} alive={cell} />))}
    </Grid>
  );
};

Board.displayName = "Board";
Board.propTypes = {
  cells: PropTypes.array,
  cellSize: PropTypes.number,
  height: PropTypes.number,
  toggleRunning: PropTypes.func,
  width: PropTypes.number,
};

export default Board;
