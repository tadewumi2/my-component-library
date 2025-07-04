export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  /**
   * Dropdown options
   */
  options: DropdownOption[];
  /**
   * Selected value
   */
  value?: string;
  /**
   * Default selected value
   */
  defaultValue?: string;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Change handler
   */
  onChange?: (value: string) => void;
  /**
   * Is the dropdown disabled?
   */
  disabled?: boolean;
  /**
   * Dropdown size
   */
  size?: "small" | "medium" | "large";
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  color?: string;
  /**
   * Border color
   */
  borderColor?: string;
  /**
   * Is the dropdown in error state?
   */
  error?: boolean;
  /**
   * Additional CSS class
   */
  className?: string;
  /**
   * HTML id attribute
   */
  id?: string;
  /**
   * HTML name attribute
   */
  name?: string;
}
