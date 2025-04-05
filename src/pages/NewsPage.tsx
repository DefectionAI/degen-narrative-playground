import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Newspaper, ExternalLink, Search, Filter, ArrowDown, RefreshCw } from 'lucide-react';
import CryptoNewsWidget from '../components/CryptoNewsWidget';
import { Skeleton } from '@/components/ui/skeleton';

interface NewsSource {
  id: string;
  name: string;
  url: string;
}

interface NewsItem {
  id: string;
  title: string;
  source: string;
  summary: string;
  url: string;
  imageUrl: string;
  date: string;
  category: string;
}

const NewsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('latest');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  
  const sources: NewsSource[] = [
    {
      id: 'cointelegraph',
      name: 'CoinTelegraph',
      url: 'https://cointelegraph.com/'
    },
    {
      id: 'cryptonews',
      name: 'CryptoNews',
      url: 'https://cryptonews.com/it/'
    },
    {
      id: 'theblock',
      name: 'The Block',
      url: 'https://www.theblock.co/'
    }
  ];

  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'Bitcoin ETF Inflows Reach $500M After Week of Outflows',
      source: 'CoinTelegraph',
      summary: 'After a week of continuous outflows, Bitcoin ETFs have seen significant buying pressure with over $500 million in net inflows on Wednesday...',
      url: 'https://cointelegraph.com/',
      imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=500&h=280&q=80',
      date: new Date().toLocaleDateString(),
      category: 'Markets'
    },
    {
      id: '2',
      title: 'Ethereum Upgrade "Pectra" Scheduled for Q1 2025',
      source: 'The Block',
      summary: 'Ethereum developers have agreed on a timeline for the next major network upgrade, codenamed "Pectra," which will include EIP-4844 improvements...',
      url: 'https://www.theblock.co/',
      imageUrl: 'https://images.unsplash.com/photo-1622790698141-94e30457a379?auto=format&fit=crop&w=500&h=280&q=80',
      date: new Date().toLocaleDateString(),
      category: 'Technology'
    },
    {
      id: '3',
      title: 'SEC Commissioner Hints at Potential Ethereum ETF Approval',
      source: 'CryptoNews',
      summary: 'A commissioner at the SEC has suggested that Ethereum ETFs could receive regulatory approval in the coming months, following the successful launch of Bitcoin ETFs...',
      url: 'https://cryptonews.com/it/',
      imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=500&h=280&q=80',
      date: new Date().toLocaleDateString(),
      category: 'Regulation'
    },
    {
      id: '4',
      title: 'Major DeFi Protocol Announces Layer 2 Expansion',
      source: 'The Block',
      summary: 'One of the largest DeFi lending protocols has announced plans to deploy on multiple Ethereum Layer 2 networks to reduce transaction costs for users...',
      url: 'https://www.theblock.co/',
      imageUrl: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=500&h=280&q=80',
      date: new Date(Date.now() - 86400000).toLocaleDateString(), // yesterday
      category: 'DeFi'
    },
    {
      id: '5',
      title: 'Central Bank Digital Currencies Could Threaten Crypto, Report Warns',
      source: 'CoinTelegraph',
      summary: 'A new report from a major investment bank suggests that the widespread adoption of CBDCs could potentially undermine the value proposition of cryptocurrencies...',
      url: 'https://cointelegraph.com/',
      imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=500&h=280&q=80',
      date: new Date(Date.now() - 86400000).toLocaleDateString(), // yesterday
      category: 'CBDCs'
    },
    {
      id: '6',
      title: 'NFT Trading Volume Surges 230% Month-over-Month',
      source: 'CryptoNews',
      summary: 'After months of declining interest, NFT markets have seen a significant resurgence with trading volumes increasing by 230% in October compared to September...',
      url: 'https://cryptonews.com/it/',
      imageUrl: 'https://images.unsplash.com/photo-1645560859433-1bea339e16a6?auto=format&fit=crop&w=500&h=280&q=80',
      date: new Date(Date.now() - 86400000 * 2).toLocaleDateString(), // 2 days ago
      category: 'NFTs'
    }
  ];
  
  const categories = ['Markets', 'Technology', 'Regulation', 'DeFi', 'CBDCs', 'NFTs'];
  
  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === 'all' || item.category === filter;
    
    return matchesSearch && matchesFilter;
  });
  
  const sortedNews = [...filteredNews].sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      // Could implement other sorting methods
      return 0;
    }
  });
  
  const refreshNews = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };
  
  return (
    <div className="min-h-screen pt-32 px-4 bg-cyber-dots">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text text-center">Crypto News Hub</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12 text-center">
          Stay informed with the latest happenings in the crypto, Web3, and blockchain realms. Knowledge is power!
        </p>
        
        {/* Search and Filter Bar */}
        <div className="glass-card p-6 rounded-xl mb-8 cyber-border">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50" size={18} />
              <input
                type="text"
                placeholder="Search news articles..."
                className="w-full bg-white/5 border border-white/10 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-crypto-purple/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 flex-wrap md:flex-nowrap">
              <div className="flex items-center bg-white/5 border border-white/10 rounded-md px-3">
                <Filter size={18} className="text-foreground/50 mr-2" />
                <select 
                  className="bg-transparent focus:outline-none py-2" 
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all" className="bg-card text-foreground">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat} className="bg-card text-foreground">{cat}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center bg-white/5 border border-white/10 rounded-md px-3">
                <ArrowDown size={18} className="text-foreground/50 mr-2" />
                <select 
                  className="bg-transparent focus:outline-none py-2"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="latest" className="bg-card text-foreground">Latest First</option>
                  <option value="trending" className="bg-card text-foreground">Trending</option>
                </select>
              </div>
              
              <Button 
                variant="outline" 
                className="border-white/20 hover:bg-white/5"
                onClick={refreshNews}
                disabled={loading}
              >
                <RefreshCw size={16} className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
          </div>
        </div>
        
        {/* News Sources */}
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold mb-4 neon-text">News Sources</h2>
          <div className="flex flex-wrap gap-4">
            {sources.map(source => (
              <a 
                key={source.id} 
                href={source.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-lg flex items-center space-x-2 hover:bg-white/5 transition-colors"
              >
                <span className="text-sm">{source.name}</span>
                <ExternalLink size={14} className="text-foreground/50" />
              </a>
            ))}
          </div>
        </div>
        
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sortedNews.map(item => (
            <div key={item.id} className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=500&h=280&q=80';
                  }}
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-xs rounded-full bg-crypto-purple/10 border border-crypto-purple/20 text-crypto-purple">
                    {item.category}
                  </span>
                  <span className="text-xs text-foreground/60">{item.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{item.title}</h3>
                
                <div className="mb-4">
                  <span className="text-sm text-foreground/70">{item.source}</span>
                </div>
                
                <p className="text-sm text-foreground/80 mb-4 line-clamp-3">
                  {item.summary}
                </p>
                
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-gradient-to-r from-crypto-purple to-crypto-blue text-white py-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  Read Article <ExternalLink size={14} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {sortedNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-foreground/70">No news articles found matching your filters.</p>
            <Button 
              className="mt-4 bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity"
              onClick={() => {
                setSearchTerm('');
                setFilter('all');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
