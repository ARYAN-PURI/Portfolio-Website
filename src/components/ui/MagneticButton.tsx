'use client';

import { useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

const MagneticButton = ({ children, className = '', onClick, href, target, rel }: MagneticButtonProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / 4;
    const deltaY = (e.clientY - centerY) / 4;
    
    setMousePosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const Component = href ? 'a' : 'button';
  const componentProps = href ? { href, target, rel } : { type: 'button' as const };

  return (
    <Component
      className={`relative inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        transition: 'transform 0.1s ease-out',
      }}
      {...componentProps}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
        style={{
          opacity: isHovered ? 0.1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
      <div
        className="relative z-10"
        style={{
          transform: `rotateX(${mousePosition.y / 10}deg) rotateY(${mousePosition.x / 10}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {children}
      </div>
    </Component>
  );
};

export default MagneticButton;
