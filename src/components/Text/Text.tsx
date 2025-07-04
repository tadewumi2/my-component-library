import React from "react";
import styled, { css } from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.span<TextProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
  transition: all 0.2s ease-in-out;

  ${({ variant, size }) => {
    // Variant styles override size styles
    if (variant === "heading") {
      return css`
        font-size: 24px;
        font-weight: bold;
        line-height: 1.2;
        margin-bottom: 16px;
      `;
    }
    if (variant === "subheading") {
      return css`
        font-size: 18px;
        font-weight: 600;
        line-height: 1.3;
        margin-bottom: 12px;
      `;
    }
    if (variant === "caption") {
      return css`
        font-size: 12px;
        font-weight: normal;
        line-height: 1.4;
        opacity: 0.8;
      `;
    }
    if (variant === "overline") {
      return css`
        font-size: 10px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        line-height: 1.5;
      `;
    }

    // Default size styles when no variant is specified
    switch (size) {
      case "small":
        return css`
          font-size: 12px;
          line-height: 1.4;
        `;
      case "large":
        return css`
          font-size: 18px;
          line-height: 1.5;
        `;
      default:
        return css`
          font-size: 14px;
          line-height: 1.6;
        `;
    }
  }}

  color: ${({ color, disabled }) =>
    disabled ? "#999999" : color || "#333333"};

  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  text-align: ${({ align }) => align || "left"};
  text-decoration: ${({ decoration }) => decoration || "none"};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}

  @media (max-width: 768px) {
    ${({ variant, size }) => {
      if (variant === "heading") {
        return css`
          font-size: 20px;
        `;
      }
      if (variant === "subheading") {
        return css`
          font-size: 16px;
        `;
      }
      if (variant === "caption") {
        return css`
          font-size: 11px;
        `;
      }
      if (variant === "overline") {
        return css`
          font-size: 9px;
        `;
      }

      switch (size) {
        case "small":
          return css`
            font-size: 11px;
          `;
        case "large":
          return css`
            font-size: 16px;
          `;
        default:
          return css`
            font-size: 13px;
          `;
      }
    }}
  }
`;

export const Text: React.FC<TextProps> = ({
  children,
  variant = "body",
  size = "medium",
  color,
  fontWeight,
  align = "left",
  disabled = false,
  decoration = "none",
  as = "span",
  className,
  ...props
}) => {
  return (
    <StyledText
      as={as}
      variant={variant}
      size={size}
      color={color}
      fontWeight={fontWeight}
      align={align}
      disabled={disabled}
      decoration={decoration}
      className={className}
      {...props}
    >
      {children}
    </StyledText>
  );
};
