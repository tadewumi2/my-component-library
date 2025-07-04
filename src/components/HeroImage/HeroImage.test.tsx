import React from "react";
import styled, { css } from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const HeroContainer = styled.div<HeroImageProps>`
  position: relative;
  width: 100%;
  height: ${({ height }) =>
    typeof height === "number" ? `${height}px` : height || "400px"};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
  transition: all 0.3s ease-in-out;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      filter: grayscale(100%);
    `}

  &:hover {
    ${({ onClick, disabled }) =>
      onClick &&
      !disabled &&
      css`
        transform: scale(1.02);
      `}
  }

  @media (max-width: 768px) {
    height: ${({ height }) => {
      if (typeof height === "number") return `${Math.min(height, 300)}px`;
      return height || "250px";
    }};
  }
`;

const HeroImg = styled.img<{ objectFit?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit || "cover"};
  z-index: 1;
`;

const Overlay = styled.div<{ overlayColor?: string; gradient?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

  ${({ overlayColor, gradient }) => {
    if (gradient) {
      return css`
        background: linear-gradient(
          135deg,
          rgba(0, 0, 0, 0.6) 0%,
          rgba(0, 0, 0, 0.3) 50%,
          rgba(0, 0, 0, 0.1) 100%
        );
      `;
    }
    if (overlayColor) {
      return css`
        background-color: ${overlayColor};
      `;
    }
    return css`
      background-color: rgba(0, 0, 0, 0.3);
    `;
  }}
`;

const TextContainer = styled.div<{ textPosition?: string }>`
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 20px;
  max-width: 800px;

  ${({ textPosition }) => {
    switch (textPosition) {
      case "left":
        return css`
          position: absolute;
          left: 40px;
          top: 50%;
          transform: translateY(-50%);
          text-align: left;
          max-width: 50%;
        `;
      case "right":
        return css`
          position: absolute;
          right: 40px;
          top: 50%;
          transform: translateY(-50%);
          text-align: right;
          max-width: 50%;
        `;
      case "top":
        return css`
          position: absolute;
          top: 40px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          width: 80%;
        `;
      case "bottom":
        return css`
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          width: 80%;
        `;
      default:
        return css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          width: 80%;
        `;
    }
  }}

  @media (max-width: 768px) {
    padding: 16px;
    max-width: 90%;

    ${({ textPosition }) => {
      if (textPosition === "left" || textPosition === "right") {
        return css`
          position: relative;
          left: auto;
          right: auto;
          top: auto;
          transform: none;
          text-align: center;
          max-width: 90%;
        `;
      }
      return "";
    }}
  }
`;

const HeroTitle = styled.h1<{ textColor?: string }>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: ${({ textColor }) => textColor || "#ffffff"};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }
`;

const HeroSubtitle = styled.p<{ textColor?: string }>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 24px 0;
  color: ${({ textColor }) => textColor || "#ffffff"};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 16px;
  }
`;

const CtaContainer = styled.div`
  margin-top: 24px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  title,
  subtitle,
  height = "400px",
  textPosition = "center",
  overlayColor,
  textColor = "#ffffff",
  disabled = false,
  objectFit = "cover",
  ctaButton,
  gradient = false,
  className,
  onClick,
  ...props
}) => {
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <HeroContainer
      src={src}
      alt={alt}
      height={height}
      onClick={handleClick}
      disabled={disabled}
      className={className}
      {...props}
    >
      <HeroImg src={src} alt={alt} objectFit={objectFit} />

      {(overlayColor || gradient) && (
        <Overlay overlayColor={overlayColor} gradient={gradient} />
      )}

      {(title || subtitle || ctaButton) && (
        <TextContainer textPosition={textPosition}>
          {title && <HeroTitle textColor={textColor}>{title}</HeroTitle>}

          {subtitle && (
            <HeroSubtitle textColor={textColor}>{subtitle}</HeroSubtitle>
          )}

          {ctaButton && <CtaContainer>{ctaButton}</CtaContainer>}
        </TextContainer>
      )}
    </HeroContainer>
  );
};
