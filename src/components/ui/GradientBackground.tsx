'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GradientBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-purple-600 opacity-20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        style={{
          left: '10%',
          top: '20%',
        }}
      />
      
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-pink-600 opacity-20 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        style={{
          right: '10%',
          bottom: '20%',
        }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full bg-blue-600 opacity-20 blur-3xl"
        animate={{
          x: [0, 150, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Mouse-following gradient */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur-2xl"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 25,
          mass: 0.5,
        }}
      />

      {/* Animated mesh gradient */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <motion.g
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            transformOrigin: 'center',
          }}
        >
          <motion.circle
            cx="20%"
            cy="30%"
            r="100"
            fill="url(#gradient1)"
            filter="url(#glow)"
            animate={{
              r: [100, 120, 100],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          
          <motion.circle
            cx="80%"
            cy="70%"
            r="150"
            fill="url(#gradient2)"
            filter="url(#glow)"
            animate={{
              r: [150, 180, 150],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 1,
            }}
          />
          
          <motion.circle
            cx="50%"
            cy="50%"
            r="80"
            fill="url(#gradient3)"
            filter="url(#glow)"
            animate={{
              r: [80, 100, 80],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 2,
            }}
          />
        </motion.g>

        <defs>
          <radialGradient id="gradient1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="gradient2">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="gradient3">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GradientBackground;
