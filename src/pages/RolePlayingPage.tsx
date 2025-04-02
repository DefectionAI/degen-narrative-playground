
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Filter, Users, HelpCircle, X, Check, ChevronRight, Clock } from 'lucide-react';
import { characters, scenarios } from '../data/characters';
import CharacterCard from '../components/CharacterCard';
import ScenarioCard from '../components/ScenarioCard';
import { Character, Scenario } from '../types/character';

type ActiveTab = 'characters' | 'scenarios';
type SelectionState = {
  character: Character | null;
  scenario: Scenario | null;
};

const RolePlayingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('characters');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'unlocked'>('all');
  const [selection, setSelection] = useState<SelectionState>({
    character: null,
    scenario: null
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const filteredCharacters = characters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          character.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          character.traits.some(trait => trait.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = filter === 'all' || (filter === 'unlocked' && character.unlocked);
    
    return matchesSearch && matchesFilter;
  });

  const filteredScenarios = scenarios.filter(scenario => {
    const matchesSearch = scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          scenario.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === 'all' || (filter === 'unlocked' && scenario.unlocked);
    
    return matchesSearch && matchesFilter;
  });

  const handleCharacterSelect = (character: Character) => {
    setSelection({...selection, character});
    // Auto switch to scenarios tab after selecting a character
    setActiveTab('scenarios');
  };

  const handleScenarioSelect = (scenario: Scenario) => {
    setSelection({...selection, scenario});
    setShowConfirmation(true);
  };

  const handleStartScenario = () => {
    // In a real app, this would navigate to the actual role-playing interface
    // For now, we'll just reset the state and show a success message
    setShowConfirmation(false);
    // Additional logic would go here
  };

  const clearSelections = () => {
    setSelection({character: null, scenario: null});
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen pt-32 px-4 bg-cyber-dots">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text text-center">Role Playing Hub</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12 text-center">
          Choose your character, join interactive scenarios, and shape the narrative with your decisions. Your choices affect the evolving storyline!
        </p>
        
        {/* Selection Preview Bar */}
        {(selection.character || selection.scenario) && (
          <div className="glass-card p-4 rounded-xl mb-8 border border-crypto-purple/30">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                {selection.character && (
                  <div className="flex items-center">
                    <img 
                      src={selection.character.image} 
                      alt={selection.character.name}
                      className="w-10 h-10 rounded-full object-cover mr-2"
                    />
                    <div>
                      <p className="text-sm text-foreground/70">Selected Character</p>
                      <p className="font-bold text-crypto-blue">{selection.character.name}</p>
                    </div>
                  </div>
                )}
                
                {selection.character && selection.scenario && (
                  <ChevronRight size={20} className="text-foreground/50" />
                )}
                
                {selection.scenario && (
                  <div className="flex items-center">
                    <img 
                      src={selection.scenario.image} 
                      alt={selection.scenario.title}
                      className="w-10 h-10 rounded object-cover mr-2"
                    />
                    <div>
                      <p className="text-sm text-foreground/70">Selected Scenario</p>
                      <p className="font-bold text-crypto-purple">{selection.scenario.title}</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-white/20 hover:bg-white/5"
                  onClick={clearSelections}
                >
                  <X size={16} className="mr-1" /> Clear
                </Button>
                
                {selection.character && selection.scenario && (
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity"
                    onClick={() => setShowConfirmation(true)}
                  >
                    <Check size={16} className="mr-1" /> Start
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Tabs */}
        <div className="flex mb-6">
          <button
            className={`py-2 px-4 font-medium rounded-t-lg ${activeTab === 'characters' ? 'bg-white/10 border-t border-l border-r border-white/20' : 'text-foreground/70'}`}
            onClick={() => setActiveTab('characters')}
          >
            <Users size={18} className="inline mr-2" />
            Characters
          </button>
          <button
            className={`py-2 px-4 font-medium rounded-t-lg ${activeTab === 'scenarios' ? 'bg-white/10 border-t border-l border-r border-white/20' : 'text-foreground/70'}`}
            onClick={() => setActiveTab('scenarios')}
          >
            <HelpCircle size={18} className="inline mr-2" />
            Scenarios
          </button>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="glass-card p-6 rounded-xl mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50" size={18} />
              <input
                type="text"
                placeholder={activeTab === 'characters' ? "Search characters, roles, or traits..." : "Search scenarios..."}
                className="w-full bg-white/5 border border-white/10 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-crypto-purple/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center bg-white/5 border border-white/10 rounded-md px-3">
              <Filter size={18} className="text-foreground/50 mr-2" />
              <select 
                className="bg-transparent focus:outline-none py-2" 
                value={filter}
                onChange={(e) => setFilter(e.target.value as 'all' | 'unlocked')}
              >
                <option value="all" className="bg-card text-foreground">Show All</option>
                <option value="unlocked" className="bg-card text-foreground">Unlocked Only</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {activeTab === 'characters' && filteredCharacters.map(character => (
            <CharacterCard 
              key={character.id} 
              character={character} 
              onSelect={handleCharacterSelect}
            />
          ))}
          
          {activeTab === 'scenarios' && filteredScenarios.map(scenario => (
            <ScenarioCard 
              key={scenario.id} 
              scenario={scenario} 
              onSelect={handleScenarioSelect}
            />
          ))}
        </div>
        
        {/* No Results Message */}
        {((activeTab === 'characters' && filteredCharacters.length === 0) ||
          (activeTab === 'scenarios' && filteredScenarios.length === 0)) && (
          <div className="text-center py-12">
            <p className="text-xl text-foreground/70">No {activeTab} found matching your filters.</p>
            <Button 
              className="mt-4 bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity"
              onClick={() => {
                setSearchTerm('');
                setFilter('all');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
      
      {/* Confirmation Modal */}
      {showConfirmation && selection.character && selection.scenario && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="glass-card cyber-border rounded-xl p-8 max-w-lg w-full">
            <h2 className="text-2xl font-display font-bold mb-4 neon-text">Begin Your Adventure</h2>
            
            <div className="mb-6">
              <p className="text-foreground/80 mb-4">You're about to start the following role-playing scenario:</p>
              
              <div className="flex items-center mb-4">
                <img 
                  src={selection.character.image} 
                  alt={selection.character.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-crypto-blue mr-4"
                />
                <div>
                  <h3 className="font-bold text-crypto-blue">{selection.character.name}</h3>
                  <p className="text-sm text-foreground/70">{selection.character.role}</p>
                </div>
              </div>
              
              <div className="glass-card p-4 rounded-lg mb-4">
                <h4 className="font-bold text-crypto-purple mb-2">{selection.scenario.title}</h4>
                <p className="text-sm text-foreground/80">{selection.scenario.description}</p>
                <div className="mt-3 text-sm text-foreground/70 flex items-center">
                  <Clock size={14} className="mr-1" /> {selection.scenario.duration}
                </div>
              </div>
              
              <p className="text-foreground/70 text-sm">Once you start, you'll be immersed in an interactive scenario where your choices will shape the outcome and potentially affect future scenarios.</p>
            </div>
            
            <div className="flex justify-end space-x-3">
              <Button 
                variant="outline" 
                className="border-white/20 hover:bg-white/5"
                onClick={() => setShowConfirmation(false)}
              >
                Cancel
              </Button>
              <Button 
                className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity"
                onClick={handleStartScenario}
              >
                Start Adventure
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RolePlayingPage;
