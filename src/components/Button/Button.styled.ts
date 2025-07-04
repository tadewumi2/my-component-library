import styled from "styled-components";

export const StyledButton = styled.button<{ disabled?: boolean }>`
  padding: 10px 20px;
  border: none;
  font-size: 1rem;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "" : "#007BFF")};
    color: ${({ disabled }) => (disabled ? "" : "white")};
  }
`;
