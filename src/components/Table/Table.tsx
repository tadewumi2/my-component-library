import React from "react";
import styled, { css } from "styled-components";
import {
  TableProps,
  TableHeaderProps,
  TableRowProps,
  TableCellProps,
  TableFooterProps,
} from "./Table.types";

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  transition: all 0.2s ease-in-out;

  ${({ variant }) => {
    switch (variant) {
      case "striped":
        return css`
          tbody tr:nth-child(even) {
            background-color: #f8f9fa;
          }
        `;
      case "bordered":
        return css`
          border: 1px solid #dee2e6;
          th,
          td {
            border: 1px solid #dee2e6;
          }
        `;
      default:
        return css`
          border-bottom: 1px solid #dee2e6;
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          font-size: 12px;
          th,
          td {
            padding: 4px 8px;
          }
        `;
      case "large":
        return css`
          font-size: 16px;
          th,
          td {
            padding: 16px 20px;
          }
        `;
      default:
        return css`
          font-size: 14px;
          th,
          td {
            padding: 12px 16px;
          }
        `;
    }
  }}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      * {
        cursor: not-allowed;
      }
    `}

  @media (max-width: 768px) {
    font-size: ${({ size }) => {
      switch (size) {
        case "small":
          return "11px";
        case "large":
          return "14px";
        default:
          return "12px";
      }
    }};

    th,
    td {
      padding: ${({ size }) => {
        switch (size) {
          case "small":
            return "3px 6px";
          case "large":
            return "12px 16px";
          default:
            return "8px 12px";
        }
      }};
    }

    overflow-x: auto;
    display: block;
    white-space: nowrap;
  }
`;

const StyledTableHeader = styled.thead<TableHeaderProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || "#f8f9fa"};
  color: ${({ color }) => color || "#495057"};
  font-weight: 600;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      color: #999999;
      cursor: not-allowed;
    `}
`;

const StyledTableRow = styled.tr<TableRowProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ disabled, selected }) => {
      if (disabled) return "transparent";
      if (selected) return "#e3f2fd";
      return "#f5f5f5";
    }};
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: #e3f2fd;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      color: #999999;
      &:hover {
        background-color: transparent;
      }
    `}
`;

const StyledTableCell = styled.td<TableCellProps>`
  text-align: ${({ align }) => align || "left"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  color: ${({ color }) => color || "inherit"};
  vertical-align: middle;
  border-bottom: 1px solid #dee2e6;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      color: #999999;
    `}
`;

const StyledTableHeaderCell = styled.th<TableCellProps>`
  text-align: ${({ align }) => align || "left"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  color: ${({ color }) => color || "inherit"};
  vertical-align: middle;
  font-weight: 600;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      color: #999999;
    `}
`;

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || "#f8f9fa"};
  color: ${({ color }) => color || "#495057"};
  font-weight: 500;
  border-top: 2px solid #dee2e6;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      color: #999999;
      cursor: not-allowed;
    `}
`;

export const Table: React.FC<TableProps> = ({
  children,
  variant = "default",
  size = "medium",
  disabled = false,
  backgroundColor,
  className,
  ...props
}) => {
  return (
    <StyledTable
      variant={variant}
      size={size}
      disabled={disabled}
      backgroundColor={backgroundColor}
      className={className}
      {...props}
    >
      {children}
    </StyledTable>
  );
};

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  backgroundColor,
  color,
  disabled = false,
  className,
  ...props
}) => {
  return (
    <StyledTableHeader
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </StyledTableHeader>
  );
};

export const TableRow: React.FC<TableRowProps> = ({
  children,
  backgroundColor,
  disabled = false,
  selected = false,
  className,
  ...props
}) => {
  return (
    <StyledTableRow
      backgroundColor={backgroundColor}
      disabled={disabled}
      selected={selected}
      className={className}
      {...props}
    >
      {children}
    </StyledTableRow>
  );
};

export const TableCell: React.FC<TableCellProps> = ({
  children,
  align = "left",
  backgroundColor,
  color,
  disabled = false,
  colSpan,
  rowSpan,
  className,
  ...props
}) => {
  return (
    <StyledTableCell
      align={align}
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={className}
      {...props}
    >
      {children}
    </StyledTableCell>
  );
};

export const TableHeaderCell: React.FC<TableCellProps> = ({
  children,
  align = "left",
  backgroundColor,
  color,
  disabled = false,
  colSpan,
  rowSpan,
  className,
  ...props
}) => {
  return (
    <StyledTableHeaderCell
      align={align}
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={className}
      {...props}
    >
      {children}
    </StyledTableHeaderCell>
  );
};

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  backgroundColor,
  color,
  disabled = false,
  className,
  ...props
}) => {
  return (
    <StyledTableFooter
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </StyledTableFooter>
  );
};
