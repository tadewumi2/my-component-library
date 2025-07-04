import styled from "styled-components";

export const StyledInput = styled.input<{
  disabled?: boolean;
  width?: string;
  backgroundColor?: string;
}>`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: ${({ width }) => width || "100%"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
`;
