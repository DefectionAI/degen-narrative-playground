
import React from 'react';
import { Link } from 'react-router-dom';
import { Script } from '../types/script';
import { MessageCircle, Calendar, Star, Lock, Unlock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ScriptCardProps {
  script: Script;
}

const ScriptCard: React.FC<ScriptCardProps> = ({ script }) => {
  // Generate a consistent image placeholder based on the script ID
  const getImageUrl = (scriptId: string) => {
    const imageIds = [
      'photo-1639322537504-6427a16b0a28',
      'photo-1639762681485-074b7f938ba0',
      'photo-1611974789855-9c2a0a7236a3',
      'photo-1621504450181-5d356f61d307',
      'photo-1614854262318-831574f15f1f'
    ];
    
    // Use the numeric part of the ID to select an image consistently
    const idNumber = parseInt(scriptId.replace(/\D/g, '')) || 0;
    const imageId = imageIds[idNumber % imageIds.length];
    
    return `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=500&h=280&q=80`;
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
      <div className="h-40 overflow-hidden relative">
        <img 
          src={getImageUrl(script.id)} 
          alt={script.title} 
          className="w-full h-full object-cover"
        />
        {!script.unlocked && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <Lock size={32} className="text-white" />
          </div>
        )}
        <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1">
          {script.unlocked ? (
            <Unlock size={18} className="text-crypto-green" />
          ) : (
            <Lock size={18} className="text-crypto-orange" />
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3">
          <p className="text-xs flex items-center text-white/80">
            <Calendar size={14} className="mr-1" /> {script.date}
          </p>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-2 gradient-text line-clamp-1">
          {script.title}
        </h3>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-sm text-foreground/60">
            <MessageCircle size={14} className="mr-1" />
            {script.interactions} interactions
          </div>
          
          <div className="flex">
            {script.characters.slice(0, 3).map((char, idx) => (
              <div key={idx} className="w-6 h-6 rounded-full bg-gradient-to-br from-crypto-purple to-crypto-blue flex items-center justify-center text-xs -ml-1 first:ml-0 border border-black">
                {char.charAt(0)}
              </div>
            ))}
            {script.characters.length > 3 && (
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs -ml-1 border border-black">
                +{script.characters.length - 3}
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {script.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-crypto-purple/10 border border-crypto-purple/20 text-crypto-purple"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="text-sm text-foreground/80 mb-4 line-clamp-3">
          {script.content.substring(0, 120)}...
        </div>
        
        <Link to={`/scripts/${script.id}`}>
          <Button 
            className={`w-full ${script.unlocked 
              ? 'bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90' 
              : 'bg-gray-700 text-gray-300 cursor-not-allowed'}`}
            disabled={!script.unlocked}
          >
            {script.unlocked ? 'Read Script' : 'Coming Soon'}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ScriptCard;
