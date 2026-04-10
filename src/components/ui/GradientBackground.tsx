'use client';

const GradientBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Subtle gradient orbs - pure CSS, no JS tracking */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, var(--orb-1-color), transparent 70%)',
          opacity: 'var(--orb-opacity-1)',
          left: '10%',
          top: '15%',
          animation: 'orb-float-1 25s ease-in-out infinite',
          willChange: 'transform',
          transition: 'opacity 0.5s ease',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, var(--orb-2-color), transparent 70%)',
          opacity: 'var(--orb-opacity-2)',
          right: '10%',
          bottom: '20%',
          animation: 'orb-float-2 30s ease-in-out infinite',
          willChange: 'transform',
          transition: 'opacity 0.5s ease',
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, var(--orb-3-color), transparent 70%)',
          opacity: 'var(--orb-opacity-3)',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'orb-float-1 35s ease-in-out infinite reverse',
          willChange: 'transform',
          transition: 'opacity 0.5s ease',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 'var(--grid-overlay-opacity)',
          backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(148, 163, 184, 0.3) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          transition: 'opacity 0.5s ease',
        }}
      />
    </div>
  );
};

export default GradientBackground;
