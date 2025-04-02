
import React from 'react';
import { Character } from '../types/character';
import { Lock, Unlock, Star, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CharacterCardProps {
  character: Character;
  onSelect: (character: Character) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onSelect }) => {
  // Function to fallback to a generated avatar if the image fails to load
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Create a consistent but random color based on the character name
    const stringToColor = (str: string) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      let color = '#';
      for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xFF;
        color += ('00' + value.toString(16)).substr(-2);
      }
      return color;
    };
    
    // Generate a data URL for a colorful placeholder with initials
    const generateAvatar = (name: string, color: string) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 200;
      canvas.height = 200;
      
      if (context) {
        // Background
        context.fillStyle = color;
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Text
        context.font = 'bold 80px Arial';
        context.fillStyle = 'white';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(
          name.split(' ').map(n => n[0]).join(''),
          canvas.width / 2,
          canvas.height / 2
        );
      }
      
      return canvas.toDataURL('image/png');
    };
    
    const backgroundColor = stringToColor(character.name);
    e.currentTarget.src = generateAvatar(character.name, backgroundColor);
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
      <div className="h-40 overflow-hidden relative">
        <img 
          src={character.image} 
          alt={character.name} 
          className="w-full h-full object-cover object-center"
          onError={handleImageError}
        />
        {!character.unlocked && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <Lock size={32} className="text-white" />
          </div>
        )}
        <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1">
          {character.unlocked ? (
            <Unlock size={18} className="text-crypto-green" />
          ) : (
            <Lock size={18} className="text-crypto-orange" />
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-display font-bold text-crypto-blue">
            {character.name}
          </h3>
        </div>
        
        <div className="text-foreground/70 mb-3">{character.role}</div>
        
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Trophy size={16} className="text-crypto-orange mr-2" />
            <span className="text-sm">Level {character.level}</span>
          </div>
          <div className="flex items-center">
            <Star size={16} className="text-crypto-yellow mr-2" />
            <span className="text-sm">Popularity: {character.popularity}%</span>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-foreground/80 text-sm line-clamp-3">
            {character.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {character.traits.map((trait, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10"
            >
              {trait}
            </span>
          ))}
        </div>
        
        <Button 
          className={`w-full ${character.unlocked ? 'bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity' : 'bg-gray-700 text-gray-300'}`}
          onClick={() => onSelect(character)}
          disabled={!character.unlocked}
        >
          {character.unlocked ? 'Select Character' : 'Unlock Soon'}
        </Button>
      </div>
    </div>
  );
};

export default CharacterCard;
