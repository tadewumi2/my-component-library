export interface TableProps {
  striped?: boolean;
  bordered?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export interface TableHeaderProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export interface TableRowProps {
  children: React.ReactNode;
  backgroundColor?: string;
  disabled?: boolean;
}

export interface TableCellProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
}

export interface TableFooterProps {
  children: React.ReactNode;
  backgroundColor?: string;
}
