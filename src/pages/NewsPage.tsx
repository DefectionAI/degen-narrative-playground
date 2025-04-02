
import React from 'react';
import { Button } from '@/components/ui/button';
import { Newspaper } from 'lucide-react';

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">Crypto News Hub</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12">
          Stay informed with the latest happenings in the crypto, Web3, and blockchain realms. Knowledge is power!
        </p>
        
        <div className="glass-card p-12 rounded-2xl cyber-border">
          <p className="text-xl mb-6">News feeds being integrated!</p>
          <Button className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity">
            <Newspaper className="mr-2" size={16} /> Stay Connected
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
