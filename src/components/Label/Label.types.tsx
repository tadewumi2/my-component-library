export interface LabelProps {
  /**
   * Label text content
   */
  children: React.ReactNode;
  /**
   * ID of the form element this label is for
   */
  htmlFor?: string;
  /**
   * Size of the label
   */
  size?: "small" | "medium" | "large";
  /**
   * Text color
   */
  color?: string;
  /**
   * Font weight
   */
  fontWeight?: "normal" | "bold" | "bolder";
  /**
   * Is the label disabled?
   */
  disabled?: boolean;
  /**
   * Is the field required?
   */
  required?: boolean;
  /**
   * Additional CSS class
   */
  className?: string;
}
