import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

export const StyledFormHead = styled.div`
  font-size: 1.7em;
  font-weight: bold;
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