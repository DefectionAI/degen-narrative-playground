
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, MessageCircle, ExternalLink } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 mt-20 py-16 px-4 bg-cyber-dots">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Logo size="md" withText={true} />
            <p className="mt-4 text-foreground/70">
              The ultimate degen playground where crypto meets interactive storytelling.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/5 hover:text-crypto-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/5 hover:text-crypto-purple transition-colors">
                <Github size={20} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/5 hover:text-crypto-pink transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-bold mb-4 neon-text">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-foreground/70 hover:text-crypto-blue transition-colors">Home</Link></li>
              <li><Link to="/scripts" className="text-foreground/70 hover:text-crypto-blue transition-colors">Daily Scripts</Link></li>
              <li><Link to="/role-playing" className="text-foreground/70 hover:text-crypto-blue transition-colors">Role Playing</Link></li>
              <li><Link to="/dashboard" className="text-foreground/70 hover:text-crypto-blue transition-colors">Dashboard</Link></li>
              <li><Link to="/news" className="text-foreground/70 hover:text-crypto-blue transition-colors">News</Link></li>
              <li><Link to="/tokenomics" className="text-foreground/70 hover:text-crypto-blue transition-colors">Tokenomics</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-bold mb-4 neon-purple">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/roadmap" className="text-foreground/70 hover:text-crypto-purple transition-colors">Roadmap</Link></li>
              <li><Link to="/whitepaper" className="text-foreground/70 hover:text-crypto-purple transition-colors flex items-center">Whitepaper <ExternalLink size={14} className="ml-1" /></Link></li>
              <li><Link to="/faq" className="text-foreground/70 hover:text-crypto-purple transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-bold mb-4 neon-text">Stay Updated</h3>
            <p className="text-foreground/70 mb-4">Subscribe to our newsletter for the latest updates and degen alpha.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-crypto-purple/50 flex-grow"
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-crypto-purple to-crypto-blue px-4 py-2 rounded-r-md font-medium hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm">© {new Date().getFullYear()} Defection. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-foreground/50 text-sm hover:text-foreground/80 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-foreground/50 text-sm hover:text-foreground/80 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
