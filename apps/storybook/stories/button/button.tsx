export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

const Button = ({ backgroundColor, label, ...props }: Readonly<ButtonProps>) => (
  <button type="button" className="bg-amber-500" style={{ backgroundColor }} {...props}>
    {label}
  </button>
);

export default Button;
