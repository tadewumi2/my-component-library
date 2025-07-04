import styled from "styled-components";

export const StyledImage = styled.img<{
  width?: string;
  height?: string;
  rounded?: boolean;
  disabled?: boolean;
}>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  border-radius: ${({ rounded }) => (rounded ? "8px" : "0")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  object-fit: cover;
`;
