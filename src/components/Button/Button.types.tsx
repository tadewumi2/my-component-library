export interface ButtonProps {
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What text color to use
   */
  color?: string;
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
  /**
   * Button variant
   */
  variant?: "primary" | "secondary" | "outline";
  /**
   * Additional CSS class
   */
  className?: string;
}
