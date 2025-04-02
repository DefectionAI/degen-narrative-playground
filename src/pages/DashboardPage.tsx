
import React from 'react';
import { Button } from '@/components/ui/button';
import { BarChart2 } from 'lucide-react';

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">Your Dashboard</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12">
          Track your journey, contributions, and rewards in the Defection ecosystem.
        </p>
        
        <div className="glass-card p-12 rounded-2xl cyber-border">
          <p className="text-xl mb-6">Dashboard features under development!</p>
          <Button className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity">
            <BarChart2 className="mr-2" size={16} /> Coming Soon
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
