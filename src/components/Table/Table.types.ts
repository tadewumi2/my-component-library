export interface TableProps {
  /**
   * Table contents
   */
  children: React.ReactNode;
  /**
   * Table variant
   */
  variant?: "default" | "striped" | "bordered";
  /**
   * Table size
   */
  size?: "small" | "medium" | "large";
  /**
   * Is the table disabled?
   */
  disabled?: boolean;
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Additional CSS class
   */
  className?: string;
}

export interface TableHeaderProps {
  /**
   * Header contents
   */
  children: React.ReactNode;
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  color?: string;
  /**
   * Is the header disabled?
   */
  disabled?: boolean;
  /**
   * Additional CSS class
   */
  className?: string;
}

export interface TableRowProps {
  /**
   * Row contents
   */
  children: React.ReactNode;
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Is the row disabled?
   */
  disabled?: boolean;
  /**
   * Is the row selected/highlighted?
   */
  selected?: boolean;
  /**
   * Additional CSS class
   */
  className?: string;
}

export interface TableCellProps {
  /**
   * Cell contents
   */
  children: React.ReactNode;
  /**
   * Text alignment
   */
  align?: "left" | "center" | "right";
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  color?: string;
  /**
   * Is the cell disabled?
   */
  disabled?: boolean;
  /**
   * Column span
   */
  colSpan?: number;
  /**
   * Row span
   */
  rowSpan?: number;
  /**
   * Additional CSS class
   */
  className?: string;
}

export interface TableFooterProps {
  /**
   * Footer contents
   */
  children: React.ReactNode;
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  color?: string;
  /**
   * Is the footer disabled?
   */
  disabled?: boolean;
  /**
   * Additional CSS class
   */
  className?: string;
}
