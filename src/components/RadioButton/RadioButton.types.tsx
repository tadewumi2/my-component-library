export interface RadioButtonProps {
  /**
   * Radio button label
   */
  label: string;
  /**
   * Radio button value
   */
  value: string;
  /**
   * Radio button name (for grouping)
   */
  name: string;
  /**
   * Is the radio button checked?
   */
  checked?: boolean;
  /**
   * Default checked state
   */
  defaultChecked?: boolean;
  /**
   * Change handler
   */
  onChange?: (value: string) => void;
  /**
   * Is the radio button disabled?
   */
  disabled?: boolean;
  /**
   * Radio button size
   */
  size?: "small" | "medium" | "large";
  /**
   * Radio button color
   */
  color?: string;
  /**
   * Background color when checked
   */
  backgroundColor?: string;
  /**
   * Label text color
   */
  textColor?: string;
  /**
   * Is the radio button in error state?
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
}
