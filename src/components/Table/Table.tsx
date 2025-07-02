import React from "react";
import styled from "styled-components";
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
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledTableHeader = styled.thead<TableHeaderProps>`
  background-color: ${(props) => props.backgroundColor || "#f8f9fa"};
`;

const StyledTableRow = styled.tr<TableRowProps>`
  cursor: ${(props) =>
    props.disabled ? "not-allowed" : props.onClick ? "pointer" : "default"};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "transparent" : "#f5f5f5"};
  }
`;

const StyledTableCell = styled.td<TableCellProps>`
  padding: 12px;
  text-align: ${(props) => props.align || "left"};
  border-bottom: 1px solid #dee2e6;
`;

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: ${(props) => props.backgroundColor || "#f8f9fa"};
`;

export const Table: React.FC<TableProps> = ({
  children,
  disabled,
  ...props
}) => (
  <StyledTable disabled={disabled} {...props}>
    {children}
  </StyledTable>
);

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  ...props
}) => <StyledTableHeader {...props}>{children}</StyledTableHeader>;

export const TableRow: React.FC<TableRowProps> = ({
  children,
  disabled,
  ...props
}) => (
  <StyledTableRow disabled={disabled} {...props}>
    {children}
  </StyledTableRow>
);

export const TableCell: React.FC<TableCellProps> = ({ children, ...props }) => (
  <StyledTableCell {...props}>{children}</StyledTableCell>
);

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  ...props
}) => <StyledTableFooter {...props}>{children}</StyledTableFooter>;
