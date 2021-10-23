import styled from "styled-components";

export const StyledAppContainer = styled.div`
  display: flex;
  font-size: 12px;
`;

export const StyledGridContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  margin-bottom: 3em;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledFormHead = styled.div`
  font-size: 1.7em;
  font-weight: bold;
  margin-bottom: 1em;
`;

export const StyledLabel = styled.label`
  font-size: 1em;
  margin-bottom: 0.5em;
`;

export const StyledInput = styled.input`
  font-size: 1em;
  margin-bottom: 1em;
  max-width: 5em;
`;

export const StyledSelect = styled.select`
  font-size: 1em;
  margin-bottom: 1em;
  width: fit-content;
  padding-right: 0.5em;
`;

export const StyledSubmit = styled.input`
  margin-top: 1em;
  width: fit-content;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
`;

export const StyledButton = styled.button`
  width: fit-content;
  font-size: 0.9em;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  padding-left: 0.4em;
  padding-right: 0.4em;
`;

export const Grid = styled.div`
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

export const Cell = styled.div`
  background: ${(props) => (props.alive ? "white" : "black")};
  border-top: 1px solid grey;
  border-left: 1px solid grey;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5em;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5em;
  align-items: center;
  justify-content: flex-end;
`;

export const PatternsBlock = styled.div`
  display: flex;
`;

export const CustomStyledSelect = styled(StyledSelect)`
  padding-top: 0.1em;
  padding-bottom: 0.1em;
  margin-bottom: 0;
`;

export const CustomStyledInput = styled(StyledInput)`
  max-width: 3em;
  margin-bottom: 0;
  text-align: right;
`;

export const CustomStyledLabel = styled(StyledLabel)``;

export const StyledButtonAdd = styled(StyledButton)`
  margin-left: 0.5em;
`;
