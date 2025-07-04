import React from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  transition: all 0.2s ease-in-out;

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          font-size: 12px;
          padding: 10px 16px;
        `;
      case "large":
        return css`
          font-size: 16px;
          padding: 12px 24px;
        `;
      default:
        return css`
          font-size: 14px;
          padding: 11px 20px;
        `;
    }
  }}

  ${({ variant, backgroundColor, color }) => {
    if (variant === "primary") {
      return css`
        color: ${color || "white"};
        background-color: ${backgroundColor || "#1ea7fd"};
        &:hover {
          background-color: ${backgroundColor
            ? `${backgroundColor}dd`
            : "#1593db"};
        }
      `;
    }
    if (variant === "secondary") {
      return css`
        color: ${color || "#333"};
        background-color: ${backgroundColor || "transparent"};
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        &:hover {
          background-color: ${backgroundColor || "rgba(0, 0, 0, 0.05)"};
        }
      `;
    }
    if (variant === "outline") {
      return css`
        color: ${color || "#1ea7fd"};
        background-color: transparent;
        border: 2px solid ${backgroundColor || "#1ea7fd"};
        &:hover {
          background-color: ${backgroundColor || "#1ea7fd"};
          color: white;
        }
      `;
    }
    return css`
      color: ${color || "white"};
      background-color: ${backgroundColor || "#1ea7fd"};
    `;
  }}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
      background-color: #cccccc !important;
      color: #666666 !important;
      &:hover {
        background-color: #cccccc !important;
        color: #666666 !important;
      }
    `}

  @media (max-width: 768px) {
    font-size: ${({ size }) => {
      switch (size) {
        case "small":
          return "10px";
        case "large":
          return "14px";
        default:
          return "12px";
      }
    }};
    padding: ${({ size }) => {
      switch (size) {
        case "small":
          return "8px 12px";
        case "large":
          return "10px 18px";
        default:
          return "9px 16px";
      }
    }};
  }
`;

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  backgroundColor,
  color,
  disabled = false,
  children,
  className,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      size={size}
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
