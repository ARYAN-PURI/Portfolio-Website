'use client';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

const MagneticButton = ({ children, className = '', onClick, href, target, rel }: MagneticButtonProps) => {
  const Component = href ? 'a' : 'button';
  const componentProps = href ? { href, target, rel } : { type: 'button' as const };

  return (
    <Component
      className={`relative inline-block group ${className}`}
      onClick={onClick}
      {...componentProps}
    >
      {/* Hover glow - CSS only */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
      <div className="relative z-10 transition-transform duration-300 group-hover:scale-[1.02]">
        {children}
      </div>
    </Component>
  );
};

export default MagneticButton;
