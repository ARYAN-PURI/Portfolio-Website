'use client';

import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: type === 'letters' ? 0.03 : type === 'words' ? 0.1 : 0.2,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: type === 'letters' ? 20 : 10,
      rotateX: type === 'letters' ? 90 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        duration: type === 'letters' ? 0.3 : 0.4,
      },
    },
  };

  const splitText = getSplitText();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {splitText.map((item, index) => (
        <motion.span
          key={item.key}
          variants={childVariants}
          className={type === 'words' ? 'inline-block mr-1' : 'inline-block'}
        >
          {item.text}
          {type === 'words' && index < splitText.length - 1 && ' '}
          {type === 'lines' && index < splitText.length - 1 && <br />}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
