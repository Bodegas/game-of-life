import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Formik } from "formik";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4em;
`;

const StyledForm = styled.div`
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

const StyledSubmitButton = styled.button`
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
  const initialValues = {
    boardWidth,
    boardHeight,
    cellSize,
    refreshRate,
  };

  const handleSubmit = (values) => {
    setBoardWidth(values.boardWidth);
    setBoardHeight(values.boardHeight);
    setCellSize(values.cellSize);
    setRefreshRate(values.refreshRate);
  };

  return (
    <StyledContainer>
      <StyledFormHead>Board setup</StyledFormHead>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleSubmit, setFieldValue }) => (
          <StyledForm onSubmit={handleSubmit}>
            <StyledLabel htmlFor="boardWidth">Width</StyledLabel>
            <StyledSelect
              name="boardWidth"
              value={values.boardWidth}
              onChange={(event) =>
                setFieldValue("boardWidth", event.target.value)
              }
            >
              <option value={700}>700</option>
              <option value={800}>800</option>
              <option value={900}>900</option>
            </StyledSelect>
            <StyledLabel htmlFor="boardHeight">Height</StyledLabel>
            <StyledSelect
              name="boardHeight"
              value={values.boardHeight}
              onChange={(event) =>
                setFieldValue("boardHeight", event.target.value)
              }
            >
              <option value={700}>700</option>
              <option value={800}>800</option>
              <option value={900}>900</option>
            </StyledSelect>
            <StyledLabel htmlFor="cellSize">Cell size</StyledLabel>
            <StyledSelect
              name="cellSize"
              value={values.cellSize}
              onChange={(event) =>
                setFieldValue("cellSize", event.target.value)
              }
            >
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </StyledSelect>
            <StyledLabel htmlFor="refreshRate">Refresh rate</StyledLabel>
            <StyledInput
              name="refreshRate"
              value={values.refreshRate}
              onChange={(event) =>
                setFieldValue("refreshRate", event.target.value)
              }
            />
            <StyledSubmitButton type="submit" onClick={handleSubmit}>
              Apply
            </StyledSubmitButton>
          </StyledForm>
        )}
      </Formik>
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
