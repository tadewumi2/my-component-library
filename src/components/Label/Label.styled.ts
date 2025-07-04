import styled from "styled-components";

export const StyledLabel = styled.label<{ disabled?: boolean; color?: string }>`
  font-size: 1rem;
  color: ${({ color }) => color || "#000"};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  transition: all 0.2s ease;
`;
