import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4em;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

const StyledFormHead = styled.div`
  font-size: 1.7em;
  font-weight: bold;
`;

const StyledLabel = styled.label`
  font-size: 1em;
  margin-bottom: 0.5em;
`;

const StyledInput = styled.input`
  font-size: 1em;
  margin-bottom: 1em;
  max-width: 5em;
`;

const StyledSelect = styled.select`
  font-size: 1em;
  margin-bottom: 1em;
  width: fit-content;
  padding-right: 0.5em;
`;

const StyledSubmit = styled.input`
  margin-top: 1em;
  width: fit-content;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
`;

const Form = ({
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
    console.log({ values });
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
          <option value={15}>15</option>
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

Form.displayName = "Form";
Form.propTypes = {
  boardWidth: PropTypes.number,
  boardHeight: PropTypes.number,
  setBoardWidth: PropTypes.func,
  setBoardHeight: PropTypes.func,
  cellSize: PropTypes.number,
  setCellSize: PropTypes.func,
  refreshRate: PropTypes.number,
  setRefreshRate: PropTypes.func,
};

export default Form;
