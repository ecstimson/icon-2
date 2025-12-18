import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 ease-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow-lg border border-transparent",
    outline: "bg-transparent text-neutral-900 border border-neutral-900 hover:bg-neutral-900 hover:text-white hover:-translate-y-0.5",
    ghost: "bg-transparent text-neutral-900 hover:bg-neutral-100 border border-transparent"
  };

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;