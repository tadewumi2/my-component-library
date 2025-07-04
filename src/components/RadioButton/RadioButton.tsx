import React from "react";
import styled, { css } from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 0.8;
  }
`;

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 0;
  height: 0;
`;

const StyledRadioButton = styled.div<RadioButtonProps>`
  position: relative;
  display: inline-block;
  border-radius: 50%;
  border: 2px solid
    ${({ color, error }) => {
      if (error) return "#e74c3c";
      return color || "#dee2e6";
    }};
  background-color: ${({ backgroundColor }) => backgroundColor || "#ffffff"};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          width: 16px;
          height: 16px;
        `;
      case "large":
        return css`
          width: 24px;
          height: 24px;
        `;
      default:
        return css`
          width: 20px;
          height: 20px;
        `;
    }
  }}

  ${({ checked, color, backgroundColor, error }) =>
    checked &&
    css`
      border-color: ${error ? "#e74c3c" : color || "#1ea7fd"};
      background-color: ${backgroundColor || "#ffffff"};

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        height: 60%;
        border-radius: 50%;
        background-color: ${error ? "#e74c3c" : color || "#1ea7fd"};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
      background-color: #f8f9fa;
      border-color: #dee2e6;

      &::after {
        background-color: #999999;
      }
    `}

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 3px
      ${({ error, color }) => (error ? "#e74c3c33" : `${color || "#1ea7fd"}33`)};
  }

  &:hover {
    border-color: ${({ error, disabled, color }) => {
      if (disabled) return "#dee2e6";
      if (error) return "#c0392b";
      return color || "#1ea7fd";
    }};
  }
`;

const RadioLabel = styled.label<{
  disabled?: boolean;
  textColor?: string;
  size?: "small" | "medium" | "large";
}>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: ${({ textColor, disabled }) => {
    if (disabled) return "#999999";
    return textColor || "#333333";
  }};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: color 0.2s ease-in-out;

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          font-size: 12px;
          line-height: 1.3;
        `;
      case "large":
        return css`
          font-size: 16px;
          line-height: 1.4;
        `;
      default:
        return css`
          font-size: 14px;
          line-height: 1.4;
        `;
    }
  }}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
    `}

  @media (max-width: 768px) {
    ${({ size }) => {
      switch (size) {
        case "small":
          return css`
            font-size: 11px;
          `;
        case "large":
          return css`
            font-size: 14px;
          `;
        default:
          return css`
            font-size: 13px;
          `;
      }
    }}
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  name,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  size = "medium",
  color,
  backgroundColor,
  textColor,
  error = false,
  className,
  id,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disabled) {
      onChange(event.target.value);
    }
  };

  const radioId = id || `radio-${name}-${value}`;

  return (
    <RadioContainer className={className}>
      <StyledRadioButton
        size={size}
        color={color}
        backgroundColor={backgroundColor}
        checked={checked}
        disabled={disabled}
        error={error}
        label={label}
        name={name}
        value={value}
        {...props}
      >
        <HiddenRadio
          id={radioId}
          name={name}
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={handleChange}
          disabled={disabled}
        />
      </StyledRadioButton>
      <RadioLabel
        htmlFor={radioId}
        disabled={disabled}
        textColor={textColor}
        size={size}
      >
        {label}
      </RadioLabel>
    </RadioContainer>
  );
};
