import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import {
  StyledButton,
  StyledContainer,
  StyledForm,
  StyledFormHead,
  StyledInput,
  StyledLabel,
  StyledSelect,
} from "../styles";
import { applyPattern } from "../helpers";
import * as PATTERNS from "../patterns";

const CustomStyledSelect = styled(StyledSelect)`
  padding-top: 0.1em;
  padding-bottom: 0.1em;
  margin-bottom: 0;
`;

const CustomStyledInput = styled(StyledInput)`
  max-width: 3em;
  margin-bottom: 0;
  text-align: right;
`;

const CustomStyledButton = styled(StyledButton)`
  margin-left: 0.5em;
`;

const CustomStyledLabel = styled(StyledLabel)``;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5em;
  align-items: center;
  justify-content: flex-end;
`;

const PatternsBlock = styled.div`
  display: flex;
`;

const PatternsForm = ({ cells, setCells }) => {
  const { register, handleSubmit } = useForm();

  const handleAddPattern = (values) => {
    const newState = applyPattern({
      pattern: PATTERNS[values.pattern],
      state: cells,
      initialX: values.x,
      initialY: values.y,
    });
    setCells(newState);
  };

  return (
    <StyledContainer>
      <StyledFormHead>Patterns</StyledFormHead>
      <StyledForm onSubmit={handleSubmit(handleAddPattern)}>
        <PatternsBlock>
          <Column>
            <CustomStyledLabel htmlFor="pattern">Pattern</CustomStyledLabel>
            <CustomStyledSelect {...register("pattern")} defaultValue={"block"}>
              <option value="BLOCK">Block</option>
              <option value="BEEHIVE">Beehive</option>
            </CustomStyledSelect>
          </Column>

          <Column>
            <CustomStyledLabel htmlFor="x">X</CustomStyledLabel>
            <CustomStyledInput
              {...register("x", { setValueAs: (v) => parseInt(v) })}
              type="text"
              defaultValue={0}
            />
          </Column>

          <Column>
            <CustomStyledLabel htmlFor="y">Y</CustomStyledLabel>
            <CustomStyledInput
              {...register("y", { setValueAs: (v) => parseInt(v) })}
              type="text"
              defaultValue={0}
            />
          </Column>

          <Column>
            <CustomStyledButton type="submit">Add</CustomStyledButton>
          </Column>
        </PatternsBlock>
      </StyledForm>
    </StyledContainer>
  );
};

PatternsForm.displayName = "PatternsForm";
PatternsForm.propTypes = {
  cells: PropTypes.array,
  setCells: PropTypes.func,
};

export default PatternsForm;
