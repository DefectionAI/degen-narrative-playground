
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { User } from 'lucide-react';

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
  // Generate a consistent but random color based on the character name
  const stringToColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xFF;
      color += ('00' + value.toString(16)).slice(-2);
    }
    return color;
  };
  
  const getInitials = (name: string) => {
    return name.split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Size classes
  const sizeClasses = {
    sm: "h-10 w-10",
    md: "h-16 w-16",
    lg: "h-24 w-24",
    xl: "h-32 w-32"
  };
  
  const backgroundColor = stringToColor(name);
  
  return (
    <Avatar className={`${sizeClasses[size]} rounded-full ring-2 ring-offset-2 ring-offset-background ring-white/10 ${className}`}>
      <AvatarImage 
        src={src} 
        alt={name}
        className="object-cover"
      />
      <AvatarFallback 
        delayMs={600}
        className="bg-gradient-to-br from-crypto-purple to-crypto-blue text-white font-bold"
      >
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
};

export default CharacterAvatarImage;
