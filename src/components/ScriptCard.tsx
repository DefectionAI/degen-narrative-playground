
import React from 'react';
import { Script } from '../types/script';
import { Lock, Unlock, MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ScriptCardProps {
  script: Script;
}

const ScriptCard: React.FC<ScriptCardProps> = ({ script }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all hover:shadow-xl">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-display font-bold text-crypto-blue">
            {script.title}
          </h3>
          {script.unlocked ? (
            <Unlock size={20} className="text-crypto-green" />
          ) : (
            <Lock size={20} className="text-crypto-orange" />
          )}
        </div>
        
        <div className="flex items-center space-x-3 mb-4 text-foreground/70 text-sm">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {script.date}
          </div>
          <div className="flex items-center">
            <MessageCircle size={14} className="mr-1" />
            {script.interactions}
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-foreground/80">
            {script.content.slice(0, 120)}...
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {script.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {script.characters.map((character, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-crypto-purple/10 text-crypto-purple border border-crypto-purple/20"
            >
              {character}
            </span>
          ))}
        </div>
        
        <Link to={`/scripts/${script.id}`}>
          <Button 
            className="w-full bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity"
            disabled={!script.unlocked}
          >
            {script.unlocked ? 'Read Script' : 'Unlock Soon'}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ScriptCard;
