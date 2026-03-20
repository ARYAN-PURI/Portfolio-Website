'use client';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText = ({ text, className = '', delay = 0 }: AnimatedTextProps) => {
  return (
    <span
      className={className}
      style={{
        opacity: 0,
        animation: `hero-text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s forwards`,
        display: 'inline-block',
      }}
    >
      {text}
    </span>
  );
};

export default AnimatedText;
