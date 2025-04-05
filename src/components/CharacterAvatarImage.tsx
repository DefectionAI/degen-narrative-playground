
import React, { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { UserRound } from 'lucide-react';

interface CharacterAvatarImageProps {
  src: string;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const CharacterAvatarImage: React.FC<CharacterAvatarImageProps> = ({ 
  src, 
  name, 
  size = 'md',
  className = '' 
}) => {
  const [imageError, setImageError] = useState(false);
  
  // Generate a consistent but random gradient colors based on the character name
  const generateGradient = (name: string) => {
    const hash = name.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    const h1 = Math.abs(hash % 360);
    const h2 = (h1 + 40 + Math.abs((hash >> 8) % 60)) % 360;
    
    return `linear-gradient(135deg, hsl(${h1}, 80%, 60%), hsl(${h2}, 80%, 50%))`;
  };

  // Size classes
  const sizeClasses = {
    sm: "h-10 w-10",
    md: "h-16 w-16",
    lg: "h-24 w-24",
    xl: "h-32 w-32"
  };

  // Icon sizes based on avatar size
  const iconSizes = {
    sm: 20,
    md: 32,
    lg: 48,
    xl: 64
  };
  
  // Generate a unique gradient for this character
  const backgroundGradient = generateGradient(name);
  
  return (
    <Avatar 
      className={`${sizeClasses[size]} rounded-full border-2 border-white/20 ${className}`}
      style={{ 
        boxShadow: '0 0 15px rgba(155, 135, 245, 0.5)' 
      }}
    >
      {!imageError && (
        <AvatarImage 
          src={src} 
          alt={name}
          className="object-cover"
          onError={() => setImageError(true)}
        />
      )}
      <AvatarFallback 
        delayMs={600}
        style={{ background: backgroundGradient }}
        className="text-white flex items-center justify-center"
      >
        <UserRound size={iconSizes[size]} className="text-white/90" />
      </AvatarFallback>
    </Avatar>
  );
};

export default CharacterAvatarImage;
