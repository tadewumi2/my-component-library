import styled from "styled-components";

export const Container = styled.div<{ height?: string; disabled?: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || "300px"};
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
`;

export const StyledHeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const OverlayText = styled.div<{ textColor?: string }>`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: ${({ textColor }) => textColor || "#ffffff"};
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
`;
