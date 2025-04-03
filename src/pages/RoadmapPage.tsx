
import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const RoadmapPage = () => {
  const phases = [
    {
      title: 'Phase 1: Foundation',
      status: 'completed',
      timeframe: 'Q1-Q2 2023',
      milestones: [
        'Initial concept development',
        'Core team formation',
        'Whitepaper release',
        'Website launch',
        'Community building initiatives'
      ]
    },
    {
      title: 'Phase 2: Development',
      status: 'in-progress',
      timeframe: 'Q3 2023 - Q1 2024',
      milestones: [
        'Daily script system implementation',
        'Role-playing mechanics development',
        'Smart contract audit',
        'Tokeconomics finalization',
        'Private beta testing'
      ]
    },
    {
      title: 'Phase 3: Expansion',
      status: 'upcoming',
      timeframe: 'Q2-Q4 2024',
      milestones: [
        'Public mainnet launch',
        'Token generation event',
        'DEX listings',
        'Strategic partnerships',
        'Advanced gameplay features'
      ]
    },
    {
      title: 'Phase 4: Evolution',
      status: 'planned',
      timeframe: '2025+',
      milestones: [
        'Mobile application release',
        'DAO governance implementation',
        'Cross-chain integration',
        'Metaverse presence',
        'Real-world asset integration'
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={24} className="text-green-500" />;
      case 'in-progress':
        return <Clock size={24} className="text-yellow-500 animate-pulse" />;
      default:
        return <Circle size={24} className="text-gray-400" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-crypto-purple to-crypto-blue">Project Roadmap</h1>
        <p className="text-foreground/70 mb-12">Our strategic path to revolutionizing crypto storytelling</p>
        
        <div className="space-y-16">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Connecting line between phases */}
              {index < phases.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-crypto-purple/50 to-crypto-blue/50 h-[calc(100%+4rem)]"></div>
              )}
              
              <div className="flex gap-8">
                <div className="flex-shrink-0 mt-1">
                  {getStatusIcon(phase.status)}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-2xl font-bold font-display">{phase.title}</h2>
                    <span className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      {phase.timeframe}
                    </span>
                  </div>
                  
                  <div className="glass-card p-6 rounded-lg border border-white/10">
                    <h3 className="text-lg font-semibold mb-3 text-crypto-blue">Milestones</h3>
                    <ul className="space-y-3">
                      {phase.milestones.map((milestone, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                            phase.status === 'completed' ? 'bg-green-500' : 
                            phase.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-400'
                          }`}></div>
                          <span>{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
