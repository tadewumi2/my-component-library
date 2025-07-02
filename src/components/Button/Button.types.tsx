export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "outline";
  primary?: boolean;
}
