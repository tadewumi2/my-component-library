import styled from "styled-components";

export const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  font-size: 1rem;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const StyledInput = styled.input`
  margin-right: 8px;
`;
