import styled from "styled-components";

export const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
`;

export const StyledHeader = styled.thead`
  background-color: #f4f4f4;
`;

export const StyledFooter = styled.tfoot`
  background-color: #f4f4f4;
`;

export const StyledRow = styled.tr`
  &:nth-child(even) {
    background-color: #fafafa;
  }
`;

export const StyledCell = styled.td<{ $header?: boolean }>`
  padding: 12px;
  border: 1px solid #ccc;
  font-weight: ${({ $header }) => ($header ? "bold" : "normal")};
  text-align: left;
`;
