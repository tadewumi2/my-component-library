import React from "react";
import { HeroImageProps } from "./HeroImage.types";
import { Container, StyledHeroImage, OverlayText } from "./HeroImage.styled";

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  height,
  overlayText,
  textColor,
  disabled,
}) => {
  return (
    <Container
      height={typeof height === "number" ? `${height}px` : height}
      disabled={disabled}
    >
      <StyledHeroImage src={src} alt={alt} />
      {overlayText && (
        <OverlayText textColor={textColor}>{overlayText}</OverlayText>
      )}
    </Container>
  );
};
