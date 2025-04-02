
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Filter, ArrowDown, CalendarDays } from 'lucide-react';
import { scripts } from '../data/scripts';
import ScriptCard from '../components/ScriptCard';
import CryptoNewsWidget from '../components/CryptoNewsWidget';

const ScriptsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'interactions'>('date');

  const filteredScripts = scripts.filter(script => {
    // Filter by search term
    const matchesSearch = script.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          script.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          script.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Filter by unlock status
    const matchesFilter = filter === 'all' || 
                         (filter === 'unlocked' && script.unlocked) || 
                         (filter === 'locked' && !script.unlocked);
    
    return matchesSearch && matchesFilter;
  });

  const sortedScripts = [...filteredScripts].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return b.interactions - a.interactions;
    }
  });

  return (
    <div className="min-h-screen pt-32 px-4 bg-cyber-dots">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text text-center">Daily Script Drops</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12 text-center">
          Every day, new script fragments drop based on real crypto events. Read, engage, and shape the narrative!
        </p>
        
        {/* Grid layout for main content and news widget */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Main content area - 2/3 width on large screens */}
          <div className="lg:col-span-2 space-y-8">
            {/* Search and Filter Bar */}
            <div className="glass-card p-6 rounded-xl cyber-border">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50" size={18} />
                  <input
                    type="text"
                    placeholder="Search scripts, characters, or tags..."
                    className="w-full bg-white/5 border border-white/10 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-crypto-purple/50"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-2">
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-md px-3">
                    <Filter size={18} className="text-foreground/50 mr-2" />
                    <select 
                      className="bg-transparent focus:outline-none py-2" 
                      value={filter}
                      onChange={(e) => setFilter(e.target.value as 'all' | 'unlocked' | 'locked')}
                    >
                      <option value="all" className="bg-card text-foreground">All Scripts</option>
                      <option value="unlocked" className="bg-card text-foreground">Unlocked Only</option>
                      <option value="locked" className="bg-card text-foreground">Coming Soon</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-md px-3">
                    <ArrowDown size={18} className="text-foreground/50 mr-2" />
                    <select 
                      className="bg-transparent focus:outline-none py-2"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as 'date' | 'interactions')}
                    >
                      <option value="date" className="bg-card text-foreground">Latest First</option>
                      <option value="interactions" className="bg-card text-foreground">Most Interactions</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Script Calendar */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-display font-bold neon-text">Script Calendar</h2>
                <Button variant="outline" className="border-white/20 hover:bg-white/5">
                  <CalendarDays size={16} className="mr-2" />
                  View Full Calendar
                </Button>
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none">
                {Array.from({ length: 7 }, (_, i) => {
                  const date = new Date();
                  date.setDate(date.getDate() - i);
                  const dateStr = date.toISOString().split('T')[0];
                  const isToday = i === 0;
                  const hasScript = scripts.some(script => script.date === dateStr);
                  
                  return (
                    <div 
                      key={i} 
                      className={`flex-shrink-0 w-20 h-20 flex flex-col items-center justify-center rounded-lg cursor-pointer transition-all
                        ${isToday ? 'bg-crypto-purple/20 border border-crypto-purple' : hasScript ? 'bg-white/10 border border-white/20' : 'bg-white/5 border border-white/10'}
                        hover:border-crypto-blue
                      `}
                    >
                      <span className="text-sm text-foreground/70">{date.toLocaleString('default', { weekday: 'short' })}</span>
                      <span className={`text-xl font-bold ${isToday ? 'text-crypto-purple' : hasScript ? 'text-crypto-blue' : 'text-foreground'}`}>
                        {date.getDate()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Scripts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedScripts.map(script => (
                <ScriptCard key={script.id} script={script} />
              ))}
            </div>
            
            {sortedScripts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-foreground/70">No scripts found matching your filters.</p>
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
          
          {/* News sidebar - 1/3 width on large screens */}
          <div className="space-y-6">
            <CryptoNewsWidget />
            
            <div className="glass-card p-6 rounded-xl cyber-border">
              <h2 className="text-xl font-display font-bold neon-text mb-4">Hot Topics</h2>
              <div className="flex flex-wrap gap-2">
                {['Bitcoin ETF', 'Ethereum', 'Layer 2', 'DeFi', 'NFT', 'Regulation', 'Stablecoins', 'Meme Coins', 'Institutional', 'Scaling'].map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-2 text-sm rounded-full bg-white/5 border border-white/10 hover:bg-crypto-purple/10 hover:border-crypto-purple/30 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptsPage;
