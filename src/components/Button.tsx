import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
};

const base =
  "rounded-lg font-semibold px-6 py-2 transition shadow focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center gap-2";
const variants = {
  primary:
    "bg-blue-700 text-white hover:bg-blue-800 active:bg-blue-900 disabled:bg-blue-200 disabled:text-gray-400",
  secondary:
    "bg-gray-100 text-blue-700 hover:bg-blue-50 active:bg-blue-100 border border-gray-200",
  outline:
    "bg-white text-blue-700 border border-blue-700 hover:bg-blue-50 active:bg-blue-100",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  disabled = false,
  loading = false,
  className = "",
  onClick,
  type = "button",
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      className={`${base} ${variants[variant]}${
        fullWidth ? " w-full" : ""
      } ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {loading && (
        <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></span>
      )}
      {children}
    </button>
  );
};

export default Button;
