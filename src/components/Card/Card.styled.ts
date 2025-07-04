import styled from "styled-components";

export const CardContainer = styled.div<{ disabled?: boolean }>`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: transform 0.2s;

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.02)")};
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin: 16px;
`;

export const CardDescription = styled.p`
  font-size: 0.95rem;
  margin: 0 16px 16px 16px;
  color: #555;
`;
