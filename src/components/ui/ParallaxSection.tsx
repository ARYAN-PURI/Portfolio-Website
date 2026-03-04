'use client';

import { useRef, useEffect, useState } from 'react';

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
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Calculate scroll progress
      let scrollProgress = 0;
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        scrollProgress = (windowHeight - elementTop) / (windowHeight + elementHeight);
      }

      // Calculate transform based on direction and speed
      let newTransform = 0;
      switch (direction) {
        case 'down':
          newTransform = scrollProgress * speed * 100;
          break;
        case 'left':
          newTransform = -scrollProgress * speed * 100;
          break;
        case 'right':
          newTransform = scrollProgress * speed * 100;
          break;
        default: // up
          newTransform = -scrollProgress * speed * 100;
      }

      setTransform(newTransform);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div
        style={{
          transform: `${direction === 'left' || direction === 'right' ? 'translateX' : 'translateY'}(${transform}px)`,
          transition: 'transform 0.1s ease-out',
        }}
        className="relative"
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
