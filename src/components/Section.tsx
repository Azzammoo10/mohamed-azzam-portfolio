import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-4 bg-slate-900 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-300 text-lg">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
