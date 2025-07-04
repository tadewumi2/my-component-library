import React, { useState } from "react";
import styled, { css } from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 300px;
`;

const StyledSelect = styled.select<Omit<DropdownProps, "options" | "onChange">>`
  width: 100%;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border: 2px solid
    ${({ borderColor, error }) => {
      if (error) return "#e74c3c";
      return borderColor || "#dee2e6";
    }};
  border-radius: 8px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#ffffff"};
  color: ${({ color }) => color || "#333333"};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 16px;

  ${({ size = "medium" }) => {
    switch (size) {
      case "small":
        return css`
          font-size: 12px;
          padding: 8px 36px 8px 12px;
          min-height: 32px;
        `;
      case "large":
        return css`
          font-size: 16px;
          padding: 16px 44px 16px 16px;
          min-height: 56px;
        `;
      default:
        return css`
          font-size: 14px;
          padding: 12px 40px 12px 14px;
          min-height: 44px;
        `;
    }
  }}

  &:focus {
    outline: none;
    border-color: ${({ error }) => (error ? "#e74c3c" : "#1ea7fd")};
    box-shadow: 0 0 0 3px ${({ error }) => (error ? "#e74c3c33" : "#1ea7fd33")};
  }

  &:hover {
    border-color: ${({ error, disabled }) => {
      if (disabled) return "#dee2e6";
      if (error) return "#c0392b";
      return "#1ea7fd";
    }};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
      background-color: #f8f9fa;
      color: #999999;
      border-color: #dee2e6;

      &:hover {
        border-color: #dee2e6;
      }
    `}

  @media (max-width: 768px) {
    max-width: 100%;

    ${({ size = "medium" }) => {
      switch (size) {
        case "small":
          return css`
            font-size: 11px;
            padding: 6px 32px 6px 10px;
            min-height: 28px;
          `;
        case "large":
          return css`
            font-size: 14px;
            padding: 12px 36px 12px 12px;
            min-height: 48px;
          `;
        default:
          return css`
            font-size: 13px;
            padding: 10px 36px 10px 12px;
            min-height: 40px;
          `;
      }
    }}
  }
`;

const StyledOption = styled.option<{ disabled?: boolean }>`
  padding: 8px 12px;
  color: ${({ disabled }) => (disabled ? "#999999" : "#333333")};
  background-color: ${({ disabled }) => (disabled ? "#f8f9fa" : "#ffffff")};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#f8f9fa" : "#f0f0f0")};
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  defaultValue,
  placeholder = "Select an option",
  onChange,
  disabled = false,
  size = "medium",
  backgroundColor,
  color,
  borderColor,
  error = false,
  className,
  id,
  name,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(
    value || defaultValue || ""
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <DropdownContainer className={className}>
      <StyledSelect
        value={selectedValue}
        onChange={handleChange}
        disabled={disabled}
        backgroundColor={backgroundColor}
        color={color}
        borderColor={borderColor}
        error={error}
        id={id}
        name={name}
        {...props}
      >
        {placeholder && (
          <StyledOption value="" disabled>
            {placeholder}
          </StyledOption>
        )}
        {options.map((option) => (
          <StyledOption
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </StyledOption>
        ))}
      </StyledSelect>
    </DropdownContainer>
  );
};
