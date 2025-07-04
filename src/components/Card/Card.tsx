import React from "react";
import styled, { css } from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<CardProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  width: ${({ width }) =>
    typeof width === "number" ? `${width}px` : width || "auto"};
  height: ${({ height }) =>
    typeof height === "number" ? `${height}px` : height || "auto"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#ffffff"};
  color: ${({ textColor }) => textColor || "#333333"};

  ${({ variant, borderColor, backgroundColor }) => {
    switch (variant) {
      case "elevated":
        return css`
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: none;
          &:hover {
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            transform: translateY(-2px);
          }
        `;
      case "outlined":
        return css`
          border: 1px solid ${borderColor || "#e0e0e0"};
          box-shadow: none;
          &:hover {
            border-color: ${borderColor || "#1ea7fd"};
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
        `;
      case "filled":
        return css`
          background-color: ${backgroundColor || "#f5f5f5"};
          border: none;
          box-shadow: none;
          &:hover {
            background-color: ${backgroundColor || "#eeeeee"};
          }
        `;
      default:
        return css`
          border: 1px solid #e0e0e0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          &:hover {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transform: translateY(-1px);
          }
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          padding: 12px;
          max-width: 250px;
        `;
      case "large":
        return css`
          padding: 24px;
          max-width: 450px;
        `;
      default:
        return css`
          padding: 16px;
          max-width: 350px;
        `;
    }
  }}

  ${({ clickable, onClick }) =>
    (clickable || onClick) &&
    css`
      cursor: pointer;
      &:hover {
        transform: translateY(-2px);
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      background-color: #f8f9fa;
      color: #999999;

      &:hover {
        transform: none;
        box-shadow: none;
      }
    `}

  @media (max-width: 768px) {
    max-width: 100%;

    ${({ size }) => {
      switch (size) {
        case "small":
          return css`
            padding: 10px;
          `;
        case "large":
          return css`
            padding: 20px;
          `;
        default:
          return css`
            padding: 14px;
          `;
      }
    }}
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: -16px -16px 16px -16px;

  @media (max-width: 768px) {
    height: 150px;
    margin: -14px -14px 14px -14px;
  }
`;

const CardHeader = styled.div`
  margin-bottom: 12px;
`;

const CardTitle = styled.h3<{ textColor?: string }>`
  margin: 0 0 8px 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
  color: ${({ textColor }) => textColor || "#333333"};

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CardSubtitle = styled.p<{ textColor?: string }>`
  margin: 0;
  font-size: 0.875rem;
  color: ${({ textColor }) => textColor || "#666666"};
  opacity: 0.8;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CardContent = styled.div`
  flex: 1;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CardActions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;

    > * {
      width: 100%;
    }
  }
`;

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  variant = "default",
  size = "medium",
  backgroundColor,
  borderColor,
  textColor,
  disabled = false,
  clickable = false,
  onClick,
  actions,
  width,
  height,
  className,
  ...props
}) => {
  const handleClick = () => {
    if ((clickable || onClick) && !disabled && onClick) {
      onClick();
    }
  };

  return (
    <StyledCard
      variant={variant}
      size={size}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      textColor={textColor}
      disabled={disabled}
      clickable={clickable}
      onClick={handleClick}
      width={width}
      height={height}
      className={className}
      {...props}
    >
      {imageSrc && <CardImage src={imageSrc} alt={imageAlt || "Card image"} />}

      {(title || subtitle) && (
        <CardHeader>
          {title && <CardTitle textColor={textColor}>{title}</CardTitle>}
          {subtitle && (
            <CardSubtitle textColor={textColor}>{subtitle}</CardSubtitle>
          )}
        </CardHeader>
      )}

      <CardContent>{children}</CardContent>

      {actions && <CardActions>{actions}</CardActions>}
    </StyledCard>
  );
};
