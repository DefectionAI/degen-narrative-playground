
import React from 'react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Book, BookOpen, Code, FileText, Github, Globe, PenTool } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const DocumentationPage = () => {
  const sections = [
    {
      title: 'Getting Started',
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Welcome to Defection</h2>
          <p className="leading-relaxed text-foreground/80">
            Defection is a groundbreaking platform that combines blockchain technology with interactive storytelling.
            This documentation will guide you through the various features and components of our ecosystem.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="glass-card p-6 rounded-lg border border-white/10 hover:border-crypto-blue/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="bg-crypto-purple/20 p-2 rounded-lg">
                  <BookOpen size={24} className="text-crypto-purple" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Create an Account</h3>
                  <p className="text-foreground/70 text-sm mt-1">Set up your wallet and character profile</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg border border-white/10 hover:border-crypto-blue/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="bg-crypto-blue/20 p-2 rounded-lg">
                  <PenTool size={24} className="text-crypto-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Daily Scripts</h3>
                  <p className="text-foreground/70 text-sm mt-1">Learn how to participate in daily narratives</p>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mt-8 mb-3">System Requirements</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
            <li>Web3 wallet (MetaMask, WalletConnect, or similar)</li>
            <li>Stable internet connection</li>
            <li>Recommended: Desktop or laptop for optimal experience</li>
          </ul>
        </div>
      )
    },
    {
      title: 'User Guide',
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">User Guide</h2>
          <p className="leading-relaxed text-foreground/80">
            This comprehensive guide covers everything you need to know to make the most of your Defection experience,
            from basic navigation to advanced features.
          </p>
          
          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Navigating the Platform</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The Defection interface is designed to be intuitive and immersive. The main sections are:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Home:</strong> Your dashboard and personalized recommendations</li>
                <li><strong>Daily Scripts:</strong> Access the latest interactive stories</li>
                <li><strong>Role Playing:</strong> Create and manage your character profiles</li>
                <li><strong>Dashboard:</strong> Track your progress, rewards, and portfolio</li>
                <li><strong>News:</strong> Stay updated on platform developments and crypto trends</li>
                <li><strong>Tokenomics:</strong> Understand the economic model and token utility</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Connecting Your Wallet</h3>
              <p className="text-foreground/80 leading-relaxed">
                To fully access Defection features, you'll need to connect a Web3 wallet. We support various wallet providers
                including MetaMask, WalletConnect, Coinbase Wallet, and more. Simply click the "Connect Wallet" button
                in the navigation bar and follow the prompts to authorize the connection.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Participating in Scripts</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Daily scripts are interactive narratives that allow you to earn rewards based on your participation:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Browse the available scripts on the Daily Scripts page</li>
                <li>Select a script that interests you</li>
                <li>Read the scenario and make choices that affect the narrative</li>
                <li>Complete the script to earn DFC tokens and experience points</li>
                <li>Return daily for new scripts and continued storylines</li>
              </ol>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'API Reference',
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          <p className="leading-relaxed text-foreground/80">
            For developers looking to build on top of the Defection platform, our comprehensive API
            provides access to various functionalities, including narratives, characters, and economic data.
          </p>
          
          <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Code size={20} className="text-crypto-blue" /> Authentication
            </h3>
            <p className="text-sm text-foreground/80 mb-3">
              All API calls require authentication via JWT tokens or API keys.
            </p>
            <div className="bg-black/30 p-3 rounded-md">
              <code className="text-xs text-foreground/90">
                <pre>{`// Example Authentication Header
{
  "Authorization": "Bearer YOUR_API_KEY_HERE",
  "Content-Type": "application/json"
}`}</pre>
              </code>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Code size={20} className="text-crypto-purple" /> Endpoint: Get Available Scripts
            </h3>
            <p className="text-sm text-foreground/80 mb-3">
              Returns a list of currently available scripts.
            </p>
            <div className="bg-black/30 p-3 rounded-md">
              <code className="text-xs text-foreground/90">
                <pre>{`GET /api/v1/scripts
  
Response:
{
  "success": true,
  "data": [
    {
      "id": "script_123",
      "title": "The Ethereum Enigma",
      "difficulty": "medium",
      "rewards": {
        "dfc": 50,
        "xp": 100
      },
      "availableUntil": "2023-12-31T23:59:59Z"
    },
    // ...more scripts
  ]
}`}</pre>
              </code>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-3">Rate Limits</h3>
            <p className="text-foreground/80 leading-relaxed">
              To ensure fair usage and system stability, the following rate limits apply:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Free tier: 100 requests per hour</li>
              <li>Developer tier: 1,000 requests per hour</li>
              <li>Enterprise tier: Custom limits based on requirements</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const [activeSection, setActiveSection] = React.useState(sections[0]);

  return (
    <div className="container mx-auto px-4 py-16 mt-16 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8">
          <div>
            <h1 className="text-4xl font-display font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-crypto-purple to-crypto-blue">
              Documentation
            </h1>
            <p className="text-foreground/70">Everything you need to know about the Defection platform</p>
          </div>
          
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <a href="#" className="flex items-center gap-2 text-sm hover:text-crypto-blue transition-colors">
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <Separator orientation="vertical" className="h-6 bg-white/10" />
            <a href="#" className="flex items-center gap-2 text-sm hover:text-crypto-blue transition-colors">
              <Globe size={16} />
              <span>Community</span>
            </a>
            <Separator orientation="vertical" className="h-6 bg-white/10" />
            <a href="#" className="flex items-center gap-2 text-sm hover:text-crypto-blue transition-colors">
              <Book size={16} />
              <span>Tutorials</span>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <nav className="space-y-1">
                {sections.map((section, index) => (
                  <button 
                    key={index}
                    className={cn(
                      "flex items-center w-full px-4 py-2 text-left rounded-lg transition-colors",
                      activeSection.title === section.title 
                        ? "bg-white/10 text-crypto-blue" 
                        : "hover:bg-white/5"
                    )}
                    onClick={() => setActiveSection(section)}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="font-bold mb-2">Need Help?</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Can't find what you're looking for? Our community is here to help.
                </p>
                <a 
                  href="#" 
                  className="text-xs bg-crypto-blue/20 text-crypto-blue px-3 py-1.5 rounded-full inline-flex items-center hover:bg-crypto-blue/30 transition-colors"
                >
                  Join Discord Community
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="glass-card p-6 rounded-lg border border-white/10">
              {activeSection.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
