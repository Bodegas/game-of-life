import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

const Board = ({
  cells,
  cellSize,
  columnsNumber,
  rowsNumber,
  toggleRunning,
}) => {
  return (
    <Grid
      width={columnsNumber * cellSize}
      height={rowsNumber * cellSize}
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
  columnsNumber: PropTypes.number,
  rowsNumber: PropTypes.number,
  toggleRunning: PropTypes.func,
};

export default Board;
