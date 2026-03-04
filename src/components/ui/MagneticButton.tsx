'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

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
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
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

  const MotionComponent = href ? motion.a : motion.button;
  const motionProps = href ? { href, target, rel } : {};

  return (
    <MotionComponent
      ref={buttonRef}
      className={`relative inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: isHovered ? '0 20px 40px rgba(168, 85, 247, 0.3)' : '0 10px 20px rgba(168, 85, 247, 0.2)',
      }}
      whileTap={{
        scale: 0.95,
      }}
      {...motionProps}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0"
        animate={{
          opacity: isHovered ? 0.1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
      />
      <motion.div
        className="relative z-10"
        animate={{
          rotateX: mousePosition.y / 10,
          rotateY: mousePosition.x / 10,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      >
        {children}
      </motion.div>
    </MotionComponent>
  );
};

export default MagneticButton;
