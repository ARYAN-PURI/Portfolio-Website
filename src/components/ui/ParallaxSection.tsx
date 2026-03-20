'use client';

// This component is no longer needed - using CSS-based reveal animations instead
// Kept for backwards compatibility but renders children directly

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
}

const ParallaxSection = ({ children, className = '' }: ParallaxSectionProps) => {
  return <div className={className}>{children}</div>;
};

export default ParallaxSection;
