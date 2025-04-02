
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', withText = true }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };
  
  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };
  
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className={`relative ${sizeClasses[size]}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-crypto-purple to-crypto-blue rounded-full animate-pulse"></div>
        <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center">
          <span className={`font-display text-transparent bg-clip-text bg-gradient-to-r from-crypto-purple to-crypto-blue ${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'}`}>D</span>
        </div>
      </div>
      {withText && (
        <span className={`font-display flicker-text ${textSizeClasses[size]}`}>Defection</span>
      )}
    </Link>
  );
};

export default Logo;
