'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  glareIntensity?: number;
}

const Card3D = ({ children, className = '', tiltAmount = 15, glareIntensity = 0.4 }: Card3DProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);
    
    const newRotateX = deltaY * tiltAmount;
    const newRotateY = deltaX * tiltAmount;
    
    setRotateX(newRotateX);
    setRotateY(newRotateY);
    
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative transform-gpu ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      {/* Glare effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,${glareIntensity}), transparent 50%)`,
          opacity: rotateX !== 0 || rotateY !== 0 ? 1 : 0,
        }}
        transition={{ opacity: 0.2 }}
      />
      
      {/* Card content */}
      <div className="relative h-full">
        {children}
      </div>
      
      {/* Card shadow */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-black/20 -z-10"
        style={{
          transform: 'translateZ(-50px) scale(0.95)',
          filter: 'blur(20px)',
        }}
      />
    </motion.div>
  );
};

export default Card3D;
