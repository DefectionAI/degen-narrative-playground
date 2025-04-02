
import React from 'react';
import { Scenario } from '../types/character';
import { Lock, Unlock, Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ScenarioCardProps {
  scenario: Scenario;
  onSelect: (scenario: Scenario) => void;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, onSelect }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-crypto-green';
      case 'Medium': return 'text-crypto-blue';
      case 'Hard': return 'text-crypto-orange';
      case 'Expert': return 'text-crypto-red';
      default: return 'text-foreground';
    }
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all hover:shadow-xl">
      <div className="h-40 overflow-hidden relative">
        <img 
          src={scenario.image} 
          alt={scenario.title} 
          className="w-full h-full object-cover object-center"
        />
        {!scenario.unlocked && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Lock size={32} className="text-white" />
          </div>
        )}
        <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1">
          {scenario.unlocked ? (
            <Unlock size={18} className="text-crypto-green" />
          ) : (
            <Lock size={18} className="text-crypto-orange" />
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-display font-bold text-crypto-blue">
            {scenario.title}
          </h3>
        </div>
        
        <div className="flex items-center space-x-3 mb-3">
          <span className={`text-sm font-medium ${getDifficultyColor(scenario.difficulty)}`}>
            {scenario.difficulty}
          </span>
          <div className="flex items-center text-sm text-foreground/70">
            <Clock size={14} className="mr-1" />
            {scenario.duration}
          </div>
          <div className="flex items-center text-sm text-foreground/70">
            <Users size={14} className="mr-1" />
            {scenario.participants.toLocaleString()}
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-foreground/80 text-sm line-clamp-3">
            {scenario.description}
          </p>
        </div>
        
        <div className="mb-4">
          <div className="text-sm font-medium mb-2 text-crypto-yellow flex items-center">
            <Award size={16} className="mr-1" />
            Rewards:
          </div>
          <div className="flex flex-wrap gap-1">
            {scenario.rewards.map((reward, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-crypto-yellow/10 border border-crypto-yellow/20 text-crypto-yellow"
              >
                {reward}
              </span>
            ))}
          </div>
        </div>
        
        <Button 
          className="w-full bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity"
          onClick={() => onSelect(scenario)}
          disabled={!scenario.unlocked}
        >
          {scenario.unlocked ? 'Enter Scenario' : 'Coming Soon'}
        </Button>
      </div>
    </div>
  );
};

export default ScenarioCard;
