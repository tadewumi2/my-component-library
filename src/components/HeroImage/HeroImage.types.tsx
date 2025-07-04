export interface HeroImageProps {
  /**
   * Hero image source URL
   */
  src: string;
  /**
   * Alternative text for accessibility
   */
  alt: string;
  /**
   * Hero title text
   */
  title?: string;
  /**
   * Hero subtitle text
   */
  subtitle?: string;
  /**
   * Hero height
   */
  height?: string | number;
  /**
   * Text overlay position
   */
  overlayText?: string;
  textPosition?: "center" | "left" | "right" | "top" | "bottom";
  /**
   * Overlay background color
   */
  overlayColor?: string;
  /**
   * Text color
   */
  textColor?: string;
  /**
   * Is the hero image disabled?
   */
  disabled?: boolean;
  /**
   * Object fit for the image
   */
  objectFit?: "contain" | "cover" | "fill" | "scale-down" | "none";
  /**
   * Call to action button
   */
  ctaButton?: React.ReactNode;
  /**
   * Background gradient overlay
   */
  gradient?: boolean;
  /**
   * Additional CSS class
   */
  className?: string;
  /**
   * Click handler for the hero
   */
  onClick?: () => void;
}
