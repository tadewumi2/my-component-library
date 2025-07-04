import React from "react";
import styled, { css } from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: inline-block;
  margin-bottom: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease-in-out;

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          font-size: 12px;
          line-height: 1.3;
        `;
      case "large":
        return css`
          font-size: 18px;
          line-height: 1.4;
        `;
      default:
        return css`
          font-size: 14px;
          line-height: 1.4;
        `;
    }
  }}

  color: ${({ color, disabled }) =>
    disabled ? "#999999" : color || "#333333"};

  font-weight: ${({ fontWeight }) => fontWeight || "normal"};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
    `}

  @media (max-width: 768px) {
    font-size: ${({ size }) => {
      switch (size) {
        case "small":
          return "11px";
        case "large":
          return "16px";
        default:
          return "13px";
      }
    }};
    margin-bottom: 6px;
  }
`;

const RequiredAsterisk = styled.span`
  color: #e74c3c;
  margin-left: 4px;
  font-weight: bold;
`;

export const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  size = "medium",
  color,
  fontWeight = "normal",
  disabled = false,
  required = false,
  className,
  ...props
}) => {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      size={size}
      color={color}
      fontWeight={fontWeight}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
      {required && !disabled && <RequiredAsterisk>*</RequiredAsterisk>}
    </StyledLabel>
  );
};
