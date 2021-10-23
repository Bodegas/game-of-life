import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import {
  StyledContainer,
  StyledForm,
  StyledFormHead,
  PatternsBlock,
  Column,
  CustomStyledSelect,
  StyledButtonAdd,
} from "../styles";
import SETUPS from "../setups";

const SetupsForm = ({ cells, setCells, running, toogleRunning }) => {
  const { register, handleSubmit } = useForm();

  const handleApplySetup = (values) => {
    const newState = SETUPS[values.setup](cells);
    setCells(newState);
  };

  return (
    <StyledContainer>
      <StyledFormHead>Setups</StyledFormHead>
      <StyledForm onSubmit={handleSubmit(handleApplySetup)}>
        <PatternsBlock>
          <Column>
            <CustomStyledSelect
              {...register("setup")}
              defaultValue={"block"}
              disabled={running}
            >
              {Object.keys(SETUPS).map((setup) => (
                <option key={setup} value={setup}>
                  {`${setup.charAt(0) + setup.slice(1).toLowerCase()}`}
                </option>
              ))}
            </CustomStyledSelect>
          </Column>

          <Column>
            <StyledButtonAdd type="submit" disabled={running}>
              Apply
            </StyledButtonAdd>
          </Column>
        </PatternsBlock>
      </StyledForm>
    </StyledContainer>
  );
};

SetupsForm.displayName = "SetupsForm";
SetupsForm.propTypes = {
  cells: PropTypes.array,
  setCells: PropTypes.func,
  toogleRunning: PropTypes.func,
  running: PropTypes.bool,
};

export default SetupsForm;
