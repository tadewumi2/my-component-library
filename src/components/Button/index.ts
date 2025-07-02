export interface TableProps {
  children: React.ReactNode;
  striped?: boolean;
  bordered?: boolean;
  disabled?: boolean;
}

export interface TableHeaderProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export interface TableRowProps {
  children: React.ReactNode;
  onClick?: () => void;
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
