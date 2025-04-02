
import React from 'react';
import { Button } from '@/components/ui/button';
import { CircleDollarSign } from 'lucide-react';

const TokenomicsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">Tokenomics</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12">
          Fair Distribution for the People. Our approach ensures everyone has a fair opportunity to participate in the Defection ecosystem.
        </p>
        
        <div className="glass-card p-12 rounded-2xl cyber-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center p-4 rounded-xl bg-white/5">
              <div className="text-2xl font-display font-bold text-crypto-purple mb-2">10%</div>
              <div className="text-foreground/70">Airdrop</div>
              <p className="text-sm mt-2 text-foreground/50">Rewarding our early adopters and active community members</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-white/5">
              <div className="text-2xl font-display font-bold text-crypto-blue mb-2">10%</div>
              <div className="text-foreground/70">Dev Fund</div>
              <p className="text-sm mt-2 text-foreground/50">Fueling continuous innovation and keeping the project SAFU</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-white/5">
              <div className="text-2xl font-display font-bold text-crypto-green mb-2">80%</div>
              <div className="text-foreground/70">Fair Launch</div>
              <p className="text-sm mt-2 text-foreground/50">Ensuring everyone has a fair shot at getting in—no whale games here</p>
            </div>
          </div>
          
          <p className="text-xl mb-6">Detailed tokenomic charts and analysis coming soon!</p>
          <Button className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity">
            <CircleDollarSign className="mr-2" size={16} /> View Whitepaper
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsPage;
