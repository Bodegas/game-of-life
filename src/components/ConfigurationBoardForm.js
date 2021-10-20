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
  StyledSubmit,
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
}) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    setBoardWidth(values.boardWidth);
    setBoardHeight(values.boardHeight);
    setCellSize(values.cellSize);
    setRefreshRate(values.refreshRate);
  };

  return (
    <StyledContainer>
      <StyledFormHead>Board setup</StyledFormHead>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="boardWidth">Width</StyledLabel>
        <StyledSelect
          {...register("boardWidth", { setValueAs: (v) => parseInt(v) })}
          defaultValue={boardWidth}
        >
          <option value={700}>700</option>
          <option value={800}>800</option>
          <option value={900}>900</option>
        </StyledSelect>
        <StyledLabel htmlFor="boardHeight">Height</StyledLabel>
        <StyledSelect
          {...register("boardHeight", { setValueAs: (v) => parseInt(v) })}
          defaultValue={boardHeight}
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
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
        </StyledSelect>
        <StyledLabel htmlFor="refreshRate">Refresh rate</StyledLabel>
        <StyledInput
          {...register("refreshRate", { setValueAs: (v) => parseInt(v) })}
          type="number"
          defaultValue={refreshRate}
        />
        <StyledSubmit type="submit" value="Apply" />
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
};

export default ConfigurationBoardForm;
