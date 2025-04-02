
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

const RolePlayingPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">Role Playing Hub</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12">
          Choose your character, join interactive scenarios, and shape the narrative with your decisions. Your choices affect the evolving storyline!
        </p>
        
        <div className="glass-card p-12 rounded-2xl cyber-border">
          <p className="text-xl mb-6">Role-playing interface coming soon!</p>
          <Button className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity">
            <Users className="mr-2" size={16} /> Stay Tuned
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RolePlayingPage;
