
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Discord, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 mt-20 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 bg-gradient-to-r from-crypto-purple to-crypto-blue rounded-full"></div>
                <div className="absolute inset-0 bg-background rounded-full m-0.5 flex items-center justify-center text-xl font-display font-bold">D</div>
              </div>
              <span className="text-2xl font-display font-bold gradient-text">Defection</span>
            </Link>
            <p className="mt-4 text-foreground/70">
              The ultimate degen playground where crypto meets interactive storytelling.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/5 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/5 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/5 transition-colors">
                <Discord size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-foreground/70 hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/scripts" className="text-foreground/70 hover:text-foreground transition-colors">Daily Scripts</Link></li>
              <li><Link to="/role-playing" className="text-foreground/70 hover:text-foreground transition-colors">Role Playing</Link></li>
              <li><Link to="/dashboard" className="text-foreground/70 hover:text-foreground transition-colors">Dashboard</Link></li>
              <li><Link to="/news" className="text-foreground/70 hover:text-foreground transition-colors">News</Link></li>
              <li><Link to="/tokenomics" className="text-foreground/70 hover:text-foreground transition-colors">Tokenomics</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/roadmap" className="text-foreground/70 hover:text-foreground transition-colors">Roadmap</Link></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors flex items-center">Whitepaper <ExternalLink size={14} className="ml-1" /></a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors flex items-center">Documentation <ExternalLink size={14} className="ml-1" /></a></li>
              <li><Link to="/faq" className="text-foreground/70 hover:text-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Stay Updated</h3>
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
