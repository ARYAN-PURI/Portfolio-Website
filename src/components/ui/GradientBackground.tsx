'use client';

const GradientBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Subtle gradient orbs - pure CSS, no JS tracking */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #7c3aed, transparent 70%)',
          left: '10%',
          top: '15%',
          animation: 'orb-float-1 25s ease-in-out infinite',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, #db2777, transparent 70%)',
          right: '10%',
          bottom: '20%',
          animation: 'orb-float-2 30s ease-in-out infinite',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, #6366f1, transparent 70%)',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'orb-float-1 35s ease-in-out infinite reverse',
          willChange: 'transform',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(148, 163, 184, 0.3) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  );
};

export default GradientBackground;
