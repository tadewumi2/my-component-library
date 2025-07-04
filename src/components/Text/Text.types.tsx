export interface TextProps {
  /**
   * Text content
   */
  children: React.ReactNode;
  /**
   * Text variant/style
   */
  variant?: "body" | "caption" | "heading" | "subheading" | "overline";
  /**
   * Text size
   */
  size?: "small" | "medium" | "large";
  /**
   * Text color
   */
  color?: string;
  /**
   * Font weight
   */
  fontWeight?: "normal" | "bold" | "bolder" | "lighter";
  /**
   * Text alignment
   */
  align?: "left" | "center" | "right" | "justify";
  /**
   * Is the text disabled?
   */
  disabled?: boolean;
  /**
   * Text decoration
   */
  decoration?: "none" | "underline" | "line-through";
  /**
   * Element type to render
   */
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * Additional CSS class
   */
  className?: string;
}
