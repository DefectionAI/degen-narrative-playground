
import React from 'react';
import { Character } from '../types/character';
import { Lock, Unlock, Star, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CharacterCardProps {
  character: Character;
  onSelect: (character: Character) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onSelect }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all hover:shadow-xl">
      <div className="h-40 overflow-hidden relative">
        <img 
          src={character.image} 
          alt={character.name} 
          className="w-full h-full object-cover object-center"
        />
        {!character.unlocked && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
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
          className="w-full bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity"
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
