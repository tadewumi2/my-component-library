import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "8px 16px";
      case "large":
        return "16px 32px";
      default:
        return "12px 24px";
    }
  }};
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor || "#007bff"};
  color: ${(props) => props.textColor || "white"};
  border: ${(props) =>
    props.variant === "outline" ? "2px solid #007bff" : "none"};
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "14px";
      case "large":
        return "18px";
      default:
        return "16px";
    }
  }};
  transition: all 0.3s ease;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? "#cccccc"
        : props.backgroundColor
        ? `${props.backgroundColor}dd`
        : "#0056b3"};
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  backgroundColor,
  textColor,
  size = "medium",
  variant = "primary",
  ...props
}) => {
  return (
    <StyledButton
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
      size={size}
      variant={variant}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
