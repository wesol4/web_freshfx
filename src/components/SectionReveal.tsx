import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type AnimationType = 'fade-up' | 'fade-left' | 'fade-right' | 'fade-in';

interface SectionRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

const INITIAL_STYLES: Record<AnimationType, React.CSSProperties> = {
  'fade-up':    { opacity: 0, transform: 'translateY(40px)' },
  'fade-left':  { opacity: 0, transform: 'translateX(-40px)' },
  'fade-right': { opacity: 0, transform: 'translateX(40px)' },
  'fade-in':    { opacity: 0, transform: 'none' },
};

const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.15,
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold });

  const style: React.CSSProperties = {
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    ...(isVisible
      ? { opacity: 1, transform: 'none' }
      : INITIAL_STYLES[animation]),
  };

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} style={style} className={className}>
      {children}
    </div>
  );
};

export default SectionReveal;
