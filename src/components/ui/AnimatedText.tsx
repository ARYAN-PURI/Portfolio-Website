'use client';

import { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: 'letters' | 'words' | 'lines';
}

const AnimatedText = ({ text, className = '', delay = 0, type = 'letters' }: AnimatedTextProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <span className={className}>{text}</span>;
  }

  const getSplitText = () => {
    switch (type) {
      case 'words':
        return text.split(' ').map((word, i) => ({ text: word, key: i }));
      case 'lines':
        return text.split('\n').map((line, i) => ({ text: line, key: i }));
      default:
        return text.split('').map((char, i) => ({ text: char, key: i }));
    }
  };

  const splitText = getSplitText();

  return (
    <span className={className}>
      {splitText.map((item, index) => (
        <span
          key={item.key}
          className={`${type === 'words' ? 'inline-block mr-1' : 'inline-block'} animate-fade-in-delay`}
          style={{ 
            animationDelay: `${delay + (index * (type === 'letters' ? 0.03 : type === 'words' ? 0.1 : 0.2))}s`,
            opacity: 0,
            animation: `fadeIn 0.4s ease-out ${delay + (index * (type === 'letters' ? 0.03 : type === 'words' ? 0.1 : 0.2))}s forwards`
          }}
        >
          {item.text}
          {type === 'words' && index < splitText.length - 1 && ' '}
          {type === 'lines' && index < splitText.length - 1 && <br />}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;
