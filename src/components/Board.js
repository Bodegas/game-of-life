import React from "react";
import PropTypes from "prop-types";
import { getColumsNumber, getRowsNumber } from "../helpers";
import { Grid, Cell, StyledGridContainer } from "../styles";


const Board = ({ cells, cellSize, height, width }) => {
  const columnsNumber = getColumsNumber(width, cellSize);
  const rowsNumber = getRowsNumber(height, cellSize);
  return (
    <StyledGridContainer>
      <Grid
        width={width}
        height={height}
        color="black"
        cellSize={cellSize}
        columnsNumber={columnsNumber}
        rowsNumber={rowsNumber}
      >
        {cells.map((column) =>
          column.map((cell, index) => <Cell key={index} alive={cell} />)
        )}
      </Grid>
    </StyledGridContainer>
  );
};

Board.displayName = "Board";
Board.propTypes = {
  cells: PropTypes.array,
  cellSize: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Board;
