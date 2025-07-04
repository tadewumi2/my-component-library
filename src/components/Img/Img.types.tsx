export interface ImgProps {
  /**
   * Image source URL
   */
  src: string;
  /**
   * Alternative text for accessibility
   */
  alt: string;
  /**
   * Image width
   */
  width?: string | number;
  /**
   * Image height
   */
  height?: string | number;
  /**
   * Object fit property
   */
  objectFit?: "contain" | "cover" | "fill" | "scale-down" | "none";
  /**
   * Border radius
   */
  borderRadius?: string;
  /**
   * Is the image disabled?
   */
  disabled?: boolean;
  /**
   * Loading strategy
   */
  loading?: "eager" | "lazy";
  /**
   * Placeholder image URL
   */
  placeholder?: string;
  /**
   * Error callback
   */
  onError?: () => void;
  /**
   * Load callback
   */
  onLoad?: () => void;
  /**
   * Additional CSS class
   */
  className?: string;
  /**
   * Image title
   */
  title?: string;
}
