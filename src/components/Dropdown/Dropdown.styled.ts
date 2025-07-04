import styled from "styled-components";

export const StyledSelect = styled.select<{
  disabled?: boolean;
  width?: string;
}>`
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: ${({ width }) => width || "100%"};
  background-color: ${({ disabled }) => (disabled ? "#f5f5f5" : "#fff")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
