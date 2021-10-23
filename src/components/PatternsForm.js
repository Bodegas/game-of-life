import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import {
  StyledContainer,
  StyledForm,
  StyledFormHead,
  PatternsBlock,
  Column,
  CustomStyledLabel,
  CustomStyledSelect,
  CustomStyledInput,
  StyledButtonAdd
} from "../styles";
import { applyPattern } from "../helpers";
import * as PATTERNS from "../patterns";

const PatternsForm = ({ cells, setCells, running }) => {
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
            <CustomStyledSelect
              {...register("pattern")}
              defaultValue={"block"}
              disabled={running}
            >
              {Object.keys(PATTERNS).map((pattern) => (
                <option key={pattern} value={pattern}>
                  {`${pattern.charAt(0) + pattern.slice(1).toLowerCase()}`}
                </option>
              ))}
            </CustomStyledSelect>
          </Column>

          <Column>
            <CustomStyledLabel htmlFor="x">X</CustomStyledLabel>
            <CustomStyledInput
              {...register("x", { setValueAs: (v) => parseInt(v) })}
              type="text"
              defaultValue={0}
              disabled={running}
            />
          </Column>

          <Column>
            <CustomStyledLabel htmlFor="y">Y</CustomStyledLabel>
            <CustomStyledInput
              {...register("y", { setValueAs: (v) => parseInt(v) })}
              type="text"
              defaultValue={0}
              disabled={running}
            />
          </Column>

          <Column>
            <StyledButtonAdd type="submit" disabled={running}>
              Add
            </StyledButtonAdd>
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
  running: PropTypes.bool,
};

export default PatternsForm;
