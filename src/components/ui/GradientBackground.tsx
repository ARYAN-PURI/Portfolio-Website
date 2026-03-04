'use client';

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
      <div
        className="absolute w-96 h-96 rounded-full bg-purple-600 opacity-20 blur-3xl animate-float"
        style={{
          left: '10%',
          top: '20%',
          animation: 'float-orb-1 20s ease-in-out infinite',
        }}
      />
      
      <div
        className="absolute w-96 h-96 rounded-full bg-pink-600 opacity-20 blur-3xl animate-float"
        style={{
          right: '10%',
          bottom: '20%',
          animation: 'float-orb-2 25s ease-in-out infinite',
        }}
      />

      <div
        className="absolute w-96 h-96 rounded-full bg-blue-600 opacity-20 blur-3xl animate-float"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'float-orb-3 30s ease-in-out infinite',
        }}
      />

      {/* Mouse-following gradient */}
      <div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur-2xl"
        style={{
          transform: `translate(${mousePosition.x - 128}px, ${mousePosition.y - 128}px)`,
          transition: 'transform 0.1s ease-out',
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
        
        <g
          style={{
            transformOrigin: 'center',
            animation: 'rotate 60s linear infinite',
          }}
        >
          <circle
            cx="20%"
            cy="30%"
            r="100"
            fill="url(#gradient1)"
            filter="url(#glow)"
            style={{
              animation: 'pulse-circle-1 4s ease-in-out infinite',
            }}
          />
          
          <circle
            cx="80%"
            cy="70%"
            r="150"
            fill="url(#gradient2)"
            filter="url(#glow)"
            style={{
              animation: 'pulse-circle-2 5s ease-in-out infinite',
              animationDelay: '1s',
            }}
          />
          
          <circle
            cx="50%"
            cy="50%"
            r="80"
            fill="url(#gradient3)"
            filter="url(#glow)"
            style={{
              animation: 'pulse-circle-3 3s ease-in-out infinite',
              animationDelay: '2s',
            }}
          />
        </g>

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
