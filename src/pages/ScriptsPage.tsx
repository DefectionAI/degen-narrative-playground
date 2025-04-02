
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ScriptsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">Daily Script Drops</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12">
          Every day, new script fragments drop based on real crypto events. Read, engage, and shape the narrative!
        </p>
        
        <div className="glass-card p-12 rounded-2xl cyber-border">
          <p className="text-xl mb-6">Full page implementation coming soon!</p>
          <Button className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity">
            <ArrowRight className="mr-2" size={16} /> Check Back Soon
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScriptsPage;
