
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Character, Scenario } from '../types/character';
import { ArrowLeft, MessageCircle, ThumbsUp, ThumbsDown, Award } from 'lucide-react';
import CharacterAvatarImage from './CharacterAvatarImage';

interface AdventureModeProps {
  character: Character;
  scenario: Scenario;
  onExit: () => void;
}

interface DialogOption {
  id: string;
  text: string;
  outcome: string;
  affinity: number; // -5 to +5 influence on outcome
}

interface StoryBeat {
  id: string;
  text: string;
  speaker: 'system' | 'character' | 'npc';
  npcName?: string;
  npcImage?: string;
  options?: DialogOption[];
}

const AdventureMode: React.FC<AdventureModeProps> = ({ character, scenario, onExit }) => {
  const [currentBeatIndex, setCurrentBeatIndex] = useState(0);
  const [playerChoices, setPlayerChoices] = useState<string[]>([]);
  const [influence, setInfluence] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  
  // Mock story progression for initial implementation
  const storyBeats: StoryBeat[] = [
    {
      id: 'intro',
      text: `Welcome to "${scenario.title}". You are playing as ${character.name}, ${character.role}.`,
      speaker: 'system'
    },
    {
      id: 'context',
      text: scenario.description,
      speaker: 'system'
    },
    {
      id: 'npc-1',
      text: `Hello ${character.name}, we've been expecting you. Your expertise in this field is well known.`,
      speaker: 'npc',
      npcName: 'Guide',
      npcImage: '/images/scenarios/guide.png',
      options: [
        {
          id: 'humble',
          text: "I'm here to help, but I'll need your insights as well.",
          outcome: "Your humility is appreciated. The guide seems more willing to share information.",
          affinity: 3
        },
        {
          id: 'confident',
          text: "Yes, I'm quite knowledgeable in this area. Let's get to work.",
          outcome: "The guide nods, respecting your confidence but seeming slightly reserved.",
          affinity: 1
        }
      ]
    },
    {
      id: 'challenge-1',
      text: `We're facing a significant challenge in ${scenario.title}. The community is divided on how to proceed.`,
      speaker: 'npc',
      npcName: 'Community Leader',
      npcImage: '/images/scenarios/leader.png',
      options: [
        {
          id: 'analyze',
          text: "Let's analyze the data before making any decisions.",
          outcome: "Your analytical approach helps focus the discussion on facts rather than opinions.",
          affinity: 4
        },
        {
          id: 'decisive',
          text: "I've seen this before. Here's what we need to do immediately.",
          outcome: "Some appreciate your decisiveness, but others feel their input wasn't considered.",
          affinity: -2
        }
      ]
    },
    {
      id: 'technical-question',
      text: `What's your perspective on the technical implementation of ${scenario.title === 'The Bitcoin Halving' ? 'reducing block rewards' : 'this solution'}?`,
      speaker: 'npc',
      npcName: 'Tech Expert',
      npcImage: '/images/scenarios/expert.png',
      options: [
        {
          id: 'innovative',
          text: "I think we can innovate beyond the current approach with some new ideas I've been developing.",
          outcome: "The expert is intrigued by your fresh perspective and wants to collaborate further.",
          affinity: 5
        },
        {
          id: 'conservative',
          text: "We should stick to proven methods that have been battle-tested in the ecosystem.",
          outcome: "The expert appreciates your caution but seems slightly disappointed by the lack of innovation.",
          affinity: 2
        }
      ]
    },
    {
      id: 'conclusion',
      text: "Based on your approach to these challenges, you've made a significant impact on how this scenario unfolds.",
      speaker: 'system'
    }
  ];
  
  const currentBeat = storyBeats[currentBeatIndex];
  
  const handleChoiceSelection = (optionId: string, affinity: number) => {
    setPlayerChoices([...playerChoices, optionId]);
    setInfluence(influence + affinity);
    
    // Move to next story beat
    if (currentBeatIndex < storyBeats.length - 1) {
      setCurrentBeatIndex(currentBeatIndex + 1);
    } else {
      setGameCompleted(true);
    }
  };
  
  const handleNextBeat = () => {
    if (currentBeatIndex < storyBeats.length - 1) {
      setCurrentBeatIndex(currentBeatIndex + 1);
    } else {
      setGameCompleted(true);
    }
  };
  
  // Render completion screen with results
  if (gameCompleted) {
    return (
      <div className="adventure-mode h-full flex flex-col">
        <div className="py-6 px-8 border-b border-white/10 flex items-center">
          <ArrowLeft 
            className="mr-4 hover:text-crypto-blue cursor-pointer" 
            onClick={onExit}
            size={24}
          />
          <h2 className="text-2xl font-display font-bold gradient-text">Adventure Complete</h2>
        </div>
        
        <div className="flex-grow p-8 overflow-y-auto">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-display font-bold text-crypto-purple mb-6">Mission Accomplished!</h3>
            
            <div className="flex items-center mb-6">
              <CharacterAvatarImage 
                src={character.image} 
                name={character.name} 
                size="xl"
                className="mr-6"
              />
              <div>
                <h4 className="text-xl font-bold">{character.name}</h4>
                <p className="text-foreground/70">{character.role}</p>
                
                <div className="mt-4 flex items-center">
                  <Award size={20} className="text-crypto-yellow mr-2" />
                  <span className="text-crypto-yellow">
                    Earned {Math.abs(influence) * 50} Experience Points
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-2">Your Impact</h5>
              <div className="flex items-center">
                <div 
                  className={`h-2 flex-grow rounded-full bg-gradient-to-r ${
                    influence > 0 
                      ? 'from-crypto-blue to-crypto-purple' 
                      : 'from-crypto-orange to-crypto-red'
                  }`}
                />
                <span className="ml-3 font-medium">
                  {influence > 0 ? 'Positive' : influence < 0 ? 'Controversial' : 'Neutral'}
                </span>
              </div>
              <p className="mt-4 text-foreground/80">
                {influence > 3 
                  ? 'Your decisions were highly regarded by the community. Your influence has grown significantly.'
                  : influence > 0
                  ? 'Your contributions were well-received. You\'ve made a positive impression.'
                  : influence < 0
                  ? 'Your approach caused some controversy. There are mixed opinions about your influence.'
                  : 'Your cautious approach maintained the status quo.'}
              </p>
            </div>
            
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-2">Rewards</h5>
              <div className="grid grid-cols-2 gap-4">
                {scenario.rewards.map((reward, index) => (
                  <div 
                    key={index} 
                    className="glass-card bg-white/5 p-4 rounded-lg border border-white/10 flex items-center"
                  >
                    <Award size={20} className="text-crypto-yellow mr-3" />
                    <span>{reward}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              className="w-full bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity"
              onClick={onExit}
            >
              Return to Hub
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="adventure-mode h-full flex flex-col">
      <div className="py-6 px-8 border-b border-white/10 flex items-center">
        <ArrowLeft 
          className="mr-4 hover:text-crypto-blue cursor-pointer" 
          onClick={onExit}
          size={24}
        />
        <h2 className="text-2xl font-display font-bold gradient-text">{scenario.title}</h2>
      </div>
      
      <div className="flex-grow p-6 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          {/* Story beat display */}
          <div className="mb-8">
            {currentBeat.speaker === 'system' ? (
              <div className="glass-card p-6 mb-4 border-l-4 border-crypto-blue">
                <p className="text-foreground/90">{currentBeat.text}</p>
              </div>
            ) : currentBeat.speaker === 'npc' ? (
              <div className="flex mb-4">
                <div className="mr-4">
                  <CharacterAvatarImage 
                    src={currentBeat.npcImage || ''}
                    name={currentBeat.npcName || 'NPC'}
                    size="lg"
                  />
                </div>
                <div className="glass-card p-6 flex-grow rounded-tl-none">
                  <div className="font-medium text-crypto-blue mb-2">{currentBeat.npcName}</div>
                  <p className="text-foreground/90">{currentBeat.text}</p>
                </div>
              </div>
            ) : (
              <div className="flex justify-end mb-4">
                <div className="glass-card p-6 flex-grow max-w-xl rounded-tr-none bg-crypto-blue/10">
                  <div className="font-medium text-crypto-purple mb-2">{character.name}</div>
                  <p className="text-foreground/90">{currentBeat.text}</p>
                </div>
                <div className="ml-4">
                  <CharacterAvatarImage 
                    src={character.image}
                    name={character.name}
                    size="lg"
                  />
                </div>
              </div>
            )}
          </div>
          
          {/* Choice options */}
          {currentBeat.options ? (
            <div className="space-y-4 mb-6">
              <h3 className="text-xl font-display font-bold text-center mb-4">How will you respond?</h3>
              {currentBeat.options.map(option => (
                <button
                  key={option.id}
                  className="w-full text-left glass-card p-6 hover:bg-white/5 transition-colors border border-white/10 hover:border-crypto-blue/50"
                  onClick={() => handleChoiceSelection(option.id, option.affinity)}
                >
                  <div className="flex items-center">
                    <MessageCircle size={20} className="mr-3 text-crypto-blue" />
                    <span className="text-foreground/90">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="flex justify-center">
              <Button 
                className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity"
                onClick={handleNextBeat}
              >
                Continue
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Player status bar */}
      <div className="py-4 px-8 border-t border-white/10 flex justify-between items-center">
        <div className="flex items-center">
          <CharacterAvatarImage 
            src={character.image}
            name={character.name}
            size="sm"
            className="mr-3"
          />
          <span className="font-medium">{character.name}</span>
        </div>
        
        <div className="flex items-center">
          <div className="flex mr-4">
            <ThumbsUp size={18} className="text-crypto-green mr-1" />
            <span className="text-sm">{Math.max(0, influence)}</span>
          </div>
          <div className="flex">
            <ThumbsDown size={18} className="text-crypto-orange mr-1" />
            <span className="text-sm">{Math.abs(Math.min(0, influence))}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureMode;
