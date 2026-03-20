'use client';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

const Card3D = ({ children, className = '' }: Card3DProps) => {
  return (
    <div className={`card-hover relative group ${className}`}>
      {/* Gradient border glow on hover */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-600/0 via-purple-500/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:via-purple-500/10 group-hover:to-pink-600/20 rounded-2xl transition-all duration-500 -z-10 blur-sm" />
      {children}
    </div>
  );
};

export default Card3D;
