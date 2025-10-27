import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  icon?: ReactNode;
}

export function Button({
  variant = 'primary',
  children,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105';

  const variants = {
    primary: 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/50 hover:shadow-teal-500/70',
    secondary: 'bg-slate-800 text-white hover:bg-slate-700',
    outline: 'border-2 border-teal-500 text-teal-400 hover:bg-teal-500/10'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
