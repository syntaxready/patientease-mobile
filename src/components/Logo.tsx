
import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'h-8 md:h-10',
    medium: 'h-12 md:h-14',
    large: 'h-16 md:h-20'
  };

  return (
    <img 
      src="/lovable-uploads/292fdcb6-034f-42fc-bfa6-135eb6c2ba09.png" 
      alt="PMC Logo" 
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

export default Logo;
