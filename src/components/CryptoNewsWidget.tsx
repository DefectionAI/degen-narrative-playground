
import React, { useState, useEffect } from 'react';
import { ExternalLink, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NewsItem {
  id: string;
  title: string;
  source: string;
  summary: string;
  url: string;
  imageUrl: string;
  date: string;
}

const CryptoNewsWidget: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([
    {
      id: '1',
      title: 'Bitcoin ETFs See Major Inflows as Market Sentiment Shifts',
      source: 'CoinTelegraph',
      summary: 'Institutional demand for Bitcoin ETFs has surged, with over $1.2 billion in inflows reported this week...',
      url: 'https://cointelegraph.com/',
      imageUrl: '/images/news/bitcoin-etf.jpg',
      date: new Date().toLocaleDateString()
    },
    {
      id: '2',
      title: 'Ethereum Layer-2 Solutions Break Transaction Volume Records',
      source: 'The Block',
      summary: 'Arbitrum and Optimism have processed more transactions in October than Ethereum mainnet for the first time...',
      url: 'https://www.theblock.co/',
      imageUrl: '/images/news/layer2.jpg',
      date: new Date().toLocaleDateString()
    },
    {
      id: '3',
      title: 'Regulatory Clarity Coming for Stablecoins, Says Treasury Official',
      source: 'CryptoNews',
      summary: 'A framework distinguishing between various stablecoin types is expected to be announced next month...',
      url: 'https://cryptonews.com/it/',
      imageUrl: '/images/news/regulation.jpg',
      date: new Date(Date.now() - 86400000).toLocaleDateString() // yesterday
    }
  ]);
  
  const [loading, setLoading] = useState(false);
  
  const refreshNews = () => {
    setLoading(true);
    // In a real app, this would fetch from an API
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  
  return (
    <div className="glass-card p-6 rounded-xl cyber-border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-display font-bold neon-text">Latest Crypto News</h2>
        <Button 
          variant="outline" 
          size="sm"
          className="border-white/20 hover:bg-white/5"
          onClick={refreshNews}
          disabled={loading}
        >
          <RefreshCw size={16} className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>
      
      <div className="space-y-4">
        {news.map(item => (
          <div key={item.id} className="flex gap-4 p-3 hover:bg-white/5 rounded-lg transition-colors">
            <div className="flex-shrink-0 h-24 w-24 rounded-md overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="h-full w-full object-cover"
                onError={(e) => {
                  // Fallback image if the main one fails to load
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=500';
                }}
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-crypto-blue hover:text-crypto-purple transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-foreground/60 mb-1">
                Source: {item.source} • {item.date}
              </p>
              <p className="text-sm text-foreground/80 mb-2 line-clamp-2">
                {item.summary}
              </p>
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs flex items-center text-crypto-purple hover:underline"
              >
                Read more <ExternalLink size={12} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoNewsWidget;
