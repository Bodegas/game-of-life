import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import {
  StyledContainer,
  StyledForm,
  StyledFormHead,
  StyledLabel,
  StyledInput,
  StyledSelect,
} from "../styles";

const ConfigurationBoardForm = ({
  boardWidth,
  boardHeight,
  setBoardWidth,
  setBoardHeight,
  cellSize,
  setCellSize,
  refreshRate,
  setRefreshRate,
  running
}) => {
  const { register, } = useForm();

  const handleChangeWidth = event => {
    setBoardWidth(Number(event.target.value));
  };

  const handleChangeHeight = event => {
    setBoardHeight(Number(event.target.value));
  };

  const handleChangeCells = event => {
    setCellSize(Number(event.target.value));
  };

  const handleChangeRate = event => {
    setRefreshRate(Number(event.target.value));
  };

  return (
    <StyledContainer>
      <StyledFormHead>Board configuration</StyledFormHead>
      <StyledForm>
        <StyledLabel htmlFor="boardWidth">Width</StyledLabel>
        <StyledSelect
          {...register("boardWidth", { setValueAs: (v) => parseInt(v) })}
          defaultValue={boardWidth}
          onChange={handleChangeWidth}
          disabled={running}
        >
          <option value={700}>700</option>
          <option value={800}>800</option>
          <option value={900}>900</option>
        </StyledSelect>
        <StyledLabel htmlFor="boardHeight">Height</StyledLabel>
        <StyledSelect
          {...register("boardHeight", { setValueAs: (v) => parseInt(v) })}
          defaultValue={boardHeight}
          onChange={handleChangeHeight}
          disabled={running}
        >
          <option value={700}>700</option>
          <option value={800}>800</option>
          <option value={900}>900</option>
        </StyledSelect>
        <StyledLabel htmlFor="cellSize">Cell size</StyledLabel>
        <StyledSelect
          {...register("cellSize", { setValueAs: (v) => parseInt(v) })}
          type="number"
          defaultValue={cellSize}
          onChange={handleChangeCells}
          disabled={running}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
        </StyledSelect>
        <StyledLabel htmlFor="refreshRate">Refresh rate (ms)</StyledLabel>
        <StyledInput
          {...register("refreshRate", { setValueAs: (v) => parseInt(v) })}
          type="number"
          step={100}
          min={0}
          defaultValue={refreshRate}
          onChange={handleChangeRate}
          disabled={running}
        />
      </StyledForm>
    </StyledContainer>
  );
};

ConfigurationBoardForm.displayName = "ConfigurationBoardForm";
ConfigurationBoardForm.propTypes = {
  boardWidth: PropTypes.number,
  boardHeight: PropTypes.number,
  setBoardWidth: PropTypes.func,
  setBoardHeight: PropTypes.func,
  cellSize: PropTypes.number,
  setCellSize: PropTypes.func,
  refreshRate: PropTypes.number,
  setRefreshRate: PropTypes.func,
  running: PropTypes.bool,
};

export default ConfigurationBoardForm;
