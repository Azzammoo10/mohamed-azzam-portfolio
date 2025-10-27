import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`
        bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-xl p-6
        shadow-lg shadow-slate-900/50
        ${hover ? 'transition-all duration-500 hover:scale-105 hover:border-teal-500/60 hover:shadow-[0_0_25px_rgba(45,255,196,0.25)] hover:bg-slate-800/70' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
