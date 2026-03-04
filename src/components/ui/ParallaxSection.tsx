'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ParallaxSection = ({ 
  children, 
  className = '', 
  speed = 0.5, 
  direction = 'up' 
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const getTransform = () => {
    switch (direction) {
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [0, -speed * 100]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
      default:
        return useTransform(scrollYProgress, [0, 1], [0, -speed * 100]);
    }
  };

  const transform = getTransform();

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        style={{
          [direction === 'left' || direction === 'right' ? 'x' : 'y']: transform,
        }}
        className="relative"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;
