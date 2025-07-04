export interface CardProps {
  /**
   * Card content
   */
  children: React.ReactNode;
  /**
   * Card title
   */
  title?: string;
  /**
   * Card subtitle
   */
  subtitle?: string;
  /**
   * Card image source
   */
  imageSrc?: string;
  /**
   * Card image alt text
   */
  imageAlt?: string;
  /**
   * Card variant
   */
  variant?: "default" | "elevated" | "outlined" | "filled";
  /**
   * Card size
   */
  size?: "small" | "medium" | "large";
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Border color
   */
  borderColor?: string;
  /**
   * Text color
   */
  textColor?: string;
  /**
   * Is the card disabled?
   */
  disabled?: boolean;
  /**
   * Is the card clickable?
   */
  clickable?: boolean;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Card actions (footer buttons)
   */
  actions?: React.ReactNode;
  /**
   * Card width
   */
  width?: string | number;
  /**
   * Card height
   */
  height?: string | number;
  /**
   * Additional CSS class
   */
  className?: string;
}
