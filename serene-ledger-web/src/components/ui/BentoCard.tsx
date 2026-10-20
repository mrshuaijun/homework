import { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  hoverBorderClass?: string;
}

export default function BentoCard({ children, className = '', hoverBorderClass = '' }: BentoCardProps) {
  return (
    <div className={`bento-card rounded-2xl shadow-bento ${hoverBorderClass} transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}
