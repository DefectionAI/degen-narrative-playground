import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Zap, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text leading-tight">
            Welcome to Defection
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/80 max-w-3xl mx-auto">
            The ultimate degen playground where the crypto universe meets an ever-evolving narrative shaped by real-world events.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity">
              <Link to="/scripts" className="flex items-center">
                Get Started <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
              <Link to="/role-playing">Learn More</Link>
            </Button>
          </div>
          
          <div className="relative mx-auto mt-12 max-w-5xl">
            {/* Abstract shapes */}
            <div className="absolute -z-10 inset-0 blur-3xl opacity-30">
              <div className="absolute top-0 left-0 w-72 h-72 bg-crypto-purple rounded-full mix-blend-screen opacity-70 animate-float"></div>
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-crypto-blue rounded-full mix-blend-screen opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="glass-card cyber-border rounded-2xl overflow-hidden">
              <div className="bg-cyber-grid p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-display font-bold mb-4">A Never-Ending, Always-Changing Script</h2>
                    <p className="text-foreground/80">
                      In the wild west of crypto, things move fast. Defection embraces this chaos by delivering a dynamic script that morphs daily, reflecting the latest happenings in the crypto, Web3, and blockchain realms.
                    </p>
                    <div className="mt-6">
                      <Link to="/scripts" className="inline-flex items-center text-crypto-purple hover:text-crypto-blue transition-colors">
                        View Latest Scripts <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-square rounded-xl overflow-hidden border border-white/10 shine">
                      <div className="absolute inset-0 flex items-center justify-center text-4xl font-display font-bold p-6 text-center">
                        <span className="gradient-text">Latest Crypto Drama Unfolds Here</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">Core Gameplay: Be the Degen Hero</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Choose your character, ape into the storyline, and make moves on social platforms. Your responses can pump or dump future plotlines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 mb-4 rounded-lg bg-crypto-purple/20 flex items-center justify-center">
                <Zap size={24} className="text-crypto-purple" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Daily Script Drops</h3>
              <p className="text-foreground/70">
                Every day, you'll receive fresh, spicy script fragments featuring characters and events ripped straight from the crypto headlines.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 mb-4 rounded-lg bg-crypto-blue/20 flex items-center justify-center">
                <Users size={24} className="text-crypto-blue" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Role-Playing with Real Impact</h3>
              <p className="text-foreground/70">
                Choose your character and make moves that influence the narrative. Your choices affect future storylines and community events.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 mb-4 rounded-lg bg-crypto-pink/20 flex items-center justify-center">
                <Award size={24} className="text-crypto-pink" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Unlock Hidden Endings</h3>
              <p className="text-foreground/70">
                Predict the market—or at least the script—accurately, and you'll unlock secret endings. It's like finding that low-cap gem before it moons.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity">
              <Link to="/role-playing">Start Role Playing</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Live Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">Live Community Stats</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Watch the Defection ecosystem grow in real-time. These stats are based on actual community participation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-display font-bold text-crypto-purple mb-2">28.5K</div>
              <div className="text-foreground/70">Active Users</div>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-display font-bold text-crypto-blue mb-2">143</div>
              <div className="text-foreground/70">Scripts Created</div>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-display font-bold text-crypto-pink mb-2">12.7K</div>
              <div className="text-foreground/70">Role Play Sessions</div>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-display font-bold text-crypto-green mb-2">74%</div>
              <div className="text-foreground/70">Prediction Accuracy</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tokenomics Preview */}
      <section className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto glass-card p-8 rounded-2xl cyber-border">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold mb-4 gradient-text">Tokenomics: Fair Distribution for the People</h2>
              <p className="text-foreground/80">
                Our approach ensures everyone has a fair opportunity to participate in the Defection ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center p-4 rounded-xl bg-white/5">
                <div className="text-2xl font-display font-bold text-crypto-green mb-2">95%</div>
                <div className="text-foreground/70">Fair Launch</div>
                <p className="text-sm mt-2 text-foreground/50">Ensuring everyone has a fair shot at getting in—no whale games here</p>
              </div>
              
              <div className="text-center p-4 rounded-xl bg-white/5">
                <div className="text-2xl font-display font-bold text-crypto-purple mb-2">5%</div>
                <div className="text-foreground/70">Dev Fund (Locked)</div>
                <p className="text-sm mt-2 text-foreground/50">Developer allocation locked for 12 months, ensuring long-term commitment</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button variant="outline" className="border-white/20 hover:bg-white/5">
                <Link to="/tokenomics">Learn More About Tokenomics</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 gradient-text">Ready to Ape In?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Join the Defection community today and start shaping the narrative of this ever-evolving crypto universe. Let's WAGMI! 🚀
            </p>
            <Button size="lg" className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity">
              <Link to="/scripts">Join The Journey</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
