
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CircleDollarSign } from 'lucide-react';
import Logo from '@/components/Logo';
import { Card, CardContent } from '@/components/ui/card';

const TokenomicsPage: React.FC = () => {
  // Initialize the progress bar animation when component mounts
  useEffect(() => {
    const progressBar = document.getElementById('unlock-progress');
    if (progressBar) {
      setTimeout(() => {
        progressBar.style.width = '0%';
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">Tokenomics</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12">
          Fair Distribution for the People. Our approach ensures everyone has a fair opportunity to participate in the Defection ecosystem.
        </p>

        {/* Large token logo */}
        <div className="mb-12 flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 relative">
            <Logo size="lg" withText={false} />
            <div className="mt-6 text-2xl font-display gradient-text">DFC TOKEN</div>
          </div>
        </div>
        
        <div className="glass-card p-12 rounded-2xl cyber-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="text-center p-6 rounded-xl bg-white/5 border-crypto-green/30 border-2">
              <CardContent className="p-6">
                <div className="text-5xl font-display font-bold text-crypto-green mb-2">95%</div>
                <div className="text-foreground/70 text-xl mb-2">Fair Launch</div>
                <p className="text-sm mt-2 text-foreground/50">Ensuring everyone has a fair shot at getting in—no whale games here</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 rounded-xl bg-white/5 border-crypto-purple/30 border-2">
              <CardContent className="p-6">
                <div className="text-5xl font-display font-bold text-crypto-purple mb-2">5%</div>
                <div className="text-foreground/70 text-xl mb-2">Dev Fund (Locked)</div>
                <p className="text-sm mt-2 text-foreground/50">Developer allocation locked for 12 months, ensuring long-term commitment to the project</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8 mt-12">
            <div className="bg-white/5 p-6 rounded-xl">
              <h2 className="text-2xl font-display font-bold mb-4">Token Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-white/10 rounded-lg">
                  <div className="text-sm text-foreground/60">Token Name</div>
                  <div className="font-semibold">Defection (DFC)</div>
                </div>
                <div className="p-4 border border-white/10 rounded-lg">
                  <div className="text-sm text-foreground/60">Total Supply</div>
                  <div className="font-semibold">1,000,000,000 DFC</div>
                </div>
                <div className="p-4 border border-white/10 rounded-lg">
                  <div className="text-sm text-foreground/60">Initial Price</div>
                  <div className="font-semibold">TBA</div>
                </div>
                <div className="p-4 border border-white/10 rounded-lg">
                  <div className="text-sm text-foreground/60">Blockchain</div>
                  <div className="font-semibold">Ethereum & Layer-2 Solutions</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-6 rounded-xl">
              <h2 className="text-2xl font-display font-bold mb-4">Dev Fund Lock Schedule</h2>
              <div className="relative pt-6">
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-crypto-purple to-crypto-blue w-0 rounded-full transition-all duration-1000" id="unlock-progress"></div>
                </div>
                <div className="flex justify-between text-xs text-foreground/60 mt-1">
                  <div>Launch</div>
                  <div>3 months</div>
                  <div>6 months</div>
                  <div>9 months</div>
                  <div>12 months</div>
                </div>
                <p className="text-sm mt-4">Dev tokens will be 100% locked for 12 months after launch, ensuring the team's long-term commitment to the project's success.</p>
              </div>
            </div>
          </div>
          
          <p className="text-xl mt-12 mb-6">Get detailed tokenomics information in our whitepaper</p>
          <Button className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity" asChild>
            <a href="/whitepaper">
              <CircleDollarSign className="mr-2" size={16} /> View Whitepaper
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsPage;
