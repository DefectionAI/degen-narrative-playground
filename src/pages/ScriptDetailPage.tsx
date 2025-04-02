import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageCircle, Heart, Share2, Bookmark, Calendar, Eye } from 'lucide-react';
import { scripts } from '../data/scripts';
import CharacterAvatarImage from '../components/CharacterAvatarImage';

const ScriptDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [script, setScript] = useState(scripts.find(s => s.id === id));
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<{id: number, user: string, text: string, timestamp: string}[]>([]);
  
  useEffect(() => {
    // Simulating loading comments
    setTimeout(() => {
      setComments([
        {
          id: 1,
          user: "VitalikFan420",
          text: "This scene perfectly captures the tension during The Merge! I remember staying up all night watching the block explorer.",
          timestamp: "2 days ago"
        },
        {
          id: 2,
          user: "SatoshisSon",
          text: "Bitcoin maxis would never admit Ethereum did something right, lol. Classic portrayal.",
          timestamp: "1 day ago"
        },
        {
          id: 3,
          user: "ETHmaxi",
          text: "That surprise Satoshi appearance at the end gave me chills! Great cliffhanger.",
          timestamp: "10 hours ago"
        }
      ]);
    }, 1000);
  }, []);
  
  if (!script) {
    return (
      <div className="min-h-screen pt-32 px-4 container mx-auto text-center">
        <h1 className="text-4xl font-display font-bold mb-6 gradient-text">Script Not Found</h1>
        <p className="mb-8 text-foreground/80">The script you're looking for doesn't exist or hasn't been unlocked yet.</p>
        <Link to="/scripts">
          <Button className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity">
            <ArrowLeft className="mr-2" size={16} /> Back to Scripts
          </Button>
        </Link>
      </div>
    );
  }
  
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    
    const newComment = {
      id: comments.length + 1,
      user: "YourUsername",
      text: commentText,
      timestamp: "Just now"
    };
    
    setComments([...comments, newComment]);
    setCommentText('');
  };
  
  return (
    <div className="min-h-screen pt-32 px-4 bg-cyber-dots">
      <div className="container mx-auto">
        <div className="mb-6">
          <Link to="/scripts" className="inline-flex items-center text-foreground/70 hover:text-crypto-blue transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Scripts
          </Link>
        </div>
        
        <div className="glass-card rounded-xl overflow-hidden cyber-border mb-8">
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-3xl md:text-4xl font-display font-bold neon-text">{script.title}</h1>
            </div>
            
            <div className="flex items-center space-x-4 mb-6 text-foreground/70">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                {script.date}
              </div>
              <div className="flex items-center">
                <Eye size={16} className="mr-1" />
                {script.interactions} views
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {script.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 hover:bg-crypto-blue/10 hover:border-crypto-blue/30 cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
              <pre className="whitespace-pre-wrap font-sans text-foreground/90 leading-relaxed">{script.content}</pre>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex space-x-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`border-white/20 hover:bg-white/5 ${liked ? 'text-crypto-red bg-white/10' : ''}`}
                  onClick={() => setLiked(!liked)}
                >
                  <Heart size={18} className={`mr-2 ${liked ? 'fill-crypto-red' : ''}`} />
                  {liked ? 'Liked' : 'Like'}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`border-white/20 hover:bg-white/5 ${bookmarked ? 'text-crypto-yellow bg-white/10' : ''}`}
                  onClick={() => setBookmarked(!bookmarked)}
                >
                  <Bookmark size={18} className={`mr-2 ${bookmarked ? 'fill-crypto-yellow' : ''}`} />
                  {bookmarked ? 'Saved' : 'Save'}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-white/20 hover:bg-white/5"
                >
                  <Share2 size={18} className="mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Characters Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold mb-4 neon-purple">Characters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {script.characters.map((character, index) => (
              <div key={index} className="glass-card p-4 rounded-lg flex items-center">
                <CharacterAvatarImage 
                  src={`/images/characters/${character.toLowerCase().replace(/\s+/g, '-')}.png`} 
                  name={character}
                  size="sm"
                  className="mr-3"
                />
                <div>
                  <h3 className="font-bold">{character}</h3>
                  <p className="text-sm text-foreground/70">Character</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Comments Section */}
        <div>
          <h2 className="text-2xl font-display font-bold mb-4 neon-text flex items-center">
            <MessageCircle size={24} className="mr-2" /> Discussion ({comments.length})
          </h2>
          
          <form onSubmit={handleAddComment} className="glass-card p-4 rounded-lg mb-6">
            <textarea 
              className="w-full bg-white/5 border border-white/10 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-crypto-purple/50 mb-4 min-h-[100px]"
              placeholder="Share your thoughts on this script..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
            <Button 
              type="submit"
              className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity"
              disabled={!commentText.trim()}
            >
              Post Comment
            </Button>
          </form>
          
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="glass-card p-4 rounded-lg">
                <div className="flex items-start mb-2">
                  <CharacterAvatarImage 
                    src={`/images/avatars/default.png`} 
                    name={comment.user}
                    size="sm"
                    className="mr-3"
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-crypto-blue">{comment.user}</h3>
                      <span className="text-sm text-foreground/50">{comment.timestamp}</span>
                    </div>
                    <p className="text-foreground/80 mt-1">{comment.text}</p>
                  </div>
                </div>
                <div className="ml-13 pl-10 flex space-x-4 text-sm text-foreground/50">
                  <button className="hover:text-crypto-blue transition-colors">Like</button>
                  <button className="hover:text-crypto-blue transition-colors">Reply</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptDetailPage;
