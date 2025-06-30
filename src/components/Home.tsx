import React, { useState } from 'react';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Play,
  Trophy,
  Star,
  Users,
  Calendar,
  TrendingUp,
  Zap,
  Award,
  Eye,
  MoreHorizontal,
  Bookmark,
  Send,
  Target,
  Gamepad2
} from 'lucide-react';
import { Post, User } from '../types';

export const Home: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const mockUsers: User[] = [
    {
      id: '1',
      username: 'CyberNinja2024',
      displayName: 'Alex Chen',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
      level: 42,
      xp: 8750,
      maxXp: 10000,
      platforms: [],
      skills: [],
      achievements: [],
      isStreaming: true,
      followers: 12500,
      following: 890,
      bio: 'Professional Valorant player | Neural interface specialist'
    },
    {
      id: '2',
      username: 'NeonQueen',
      displayName: 'Sarah Kim',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
      level: 38,
      xp: 7200,
      maxXp: 8000,
      platforms: [],
      skills: [],
      achievements: [],
      isStreaming: false,
      followers: 8900,
      following: 1200,
      bio: 'Cyberpunk streamer | Digital architect'
    },
    {
      id: '3',
      username: 'MatrixLegend',
      displayName: 'Marcus Johnson',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
      level: 55,
      xp: 15000,
      maxXp: 16000,
      platforms: [],
      skills: [],
      achievements: [],
      isStreaming: false,
      followers: 25000,
      following: 450,
      bio: 'Former cyber-athlete | Tournament architect'
    }
  ];

  const mockPosts: Post[] = [
    {
      id: '1',
      user: mockUsers[0],
      content: 'Just achieved Radiant rank in the neural network! The cybernetic enhancement training paid off. Thanks to all my digital warriors who supported this journey! ⚡',
      type: 'achievement',
      game: 'Valorant',
      likes: 1247,
      comments: 89,
      shares: 34,
      timestamp: new Date('2024-01-15T10:30:00'),
      isLiked: false
    },
    {
      id: '2',
      user: mockUsers[1],
      content: 'Working on a new cyberpunk indie project! Here\'s a sneak peek of the neon-enhanced character design. What do you think of this digital aesthetic?',
      type: 'image',
      media: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      game: 'Cyber Development',
      likes: 892,
      comments: 156,
      shares: 67,
      timestamp: new Date('2024-01-14T15:45:00'),
      isLiked: true
    },
    {
      id: '3',
      user: mockUsers[2],
      content: 'Organizing the biggest cyber-esports tournament of the digital age! Neural link registration opens next cycle. Prize pool: 500K credits 💎',
      type: 'text',
      likes: 2156,
      comments: 234,
      shares: 189,
      timestamp: new Date('2024-01-14T09:15:00'),
      isLiked: false
    },
    {
      id: '4',
      user: mockUsers[0],
      content: 'Epic neural clutch from last night\'s stream! 1v5 ace with pure cybernetic reflexes 🔥',
      type: 'video',
      media: 'https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=600',
      game: 'Valorant',
      likes: 3421,
      comments: 445,
      shares: 278,
      timestamp: new Date('2024-01-13T20:30:00'),
      isLiked: true
    },
    {
      id: '5',
      user: mockUsers[1],
      content: 'Going live in the matrix in 10 minutes! Tonight we\'re exploring the new cyber-reality mode. Join the digital revolution! 🌐',
      type: 'stream',
      likes: 567,
      comments: 78,
      shares: 23,
      timestamp: new Date('2024-01-13T18:50:00'),
      isLiked: false
    }
  ];

  const filters = [
    { id: 'all', label: 'Neural Feed', icon: TrendingUp },
    { id: 'achievements', label: 'Cyber Wins', icon: Trophy },
    { id: 'streams', label: 'Live Matrix', icon: Play },
    { id: 'content', label: 'Digital Art', icon: Star }
  ];

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case 'achievement': return Trophy;
      case 'stream': return Play;
      case 'video': return Play;
      case 'image': return Eye;
      default: return MessageCircle;
    }
  };

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case 'achievement': return 'from-cyber-neon-yellow to-cyber-neon-green';
      case 'stream': return 'from-cyber-neon-pink to-cyber-neon-purple';
      case 'video': return 'from-cyber-neon-purple to-cyber-electric';
      case 'image': return 'from-cyber-neon-green to-cyber-matrix';
      default: return 'from-cyber-neon-blue to-cyber-neon-cyan';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-void via-cyber-black to-cyber-dark pt-24 px-6 relative overflow-hidden">
      {/* Enhanced Cyberpunk Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,255,0.1),transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(191,0,255,0.1),transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,0,128,0.08),transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-cyber-grid opacity-10 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-neon-cyan via-cyber-neon-purple to-cyber-neon-pink bg-clip-text text-transparent font-orbitron animate-neon-pulse">
            Cyber Community Matrix
          </h1>
          <p className="text-xl text-cyber-neon-cyan/80 max-w-2xl mx-auto font-rajdhani">
            Stay connected with the latest from your digital network
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Enhanced Quick Stats */}
            <div className="bg-gradient-to-br from-cyber-darker/30 to-cyber-black/30 backdrop-blur-sm border border-cyber-neon-blue/20 rounded-3xl p-6 hover:bg-cyber-darker/40 hover:border-cyber-neon-cyan/40 transition-all duration-500 transform hover:scale-105 shadow-cyber-glow">
              <h3 className="text-xl font-bold text-cyber-neon-cyan mb-4 flex items-center gap-2 font-orbitron">
                <Zap className="w-5 h-5 text-cyber-neon-cyan animate-electric" />
                Neural Stats
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Level', value: '42', color: 'cyan', icon: Target },
                  { label: 'Followers', value: '12.5K', color: 'purple', icon: Users },
                  { label: 'Posts', value: '89', color: 'pink', icon: Gamepad2 }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between group">
                    <div className="flex items-center gap-2">
                      <stat.icon className={`
                        w-4 h-4 animate-neon-pulse
                        ${stat.color === 'cyan' ? 'text-cyber-neon-cyan' :
                          stat.color === 'purple' ? 'text-cyber-neon-purple' :
                          'text-cyber-neon-pink'}
                      `} />
                      <span className="text-cyber-neon-cyan/60 font-rajdhani">{stat.label}</span>
                    </div>
                    <span className={`
                      font-bold text-lg font-orbitron animate-neon-pulse
                      ${stat.color === 'cyan' ? 'text-cyber-neon-cyan' :
                        stat.color === 'purple' ? 'text-cyber-neon-purple' :
                        'text-cyber-neon-pink'}
                    `}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Filters */}
            <div className="bg-gradient-to-br from-cyber-darker/30 to-cyber-black/30 backdrop-blur-sm border border-cyber-neon-blue/20 rounded-3xl p-6 shadow-cyber-glow">
              <h3 className="text-xl font-bold text-cyber-neon-cyan mb-4 font-orbitron">Neural Filters</h3>
              <div className="space-y-2">
                {filters.map(filter => {
                  const Icon = filter.icon;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedFilter(filter.id)}
                      className={`
                        w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-medium transition-all duration-300 font-rajdhani
                        ${selectedFilter === filter.id
                          ? 'bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple text-white shadow-neon-blue transform scale-105'
                          : 'text-cyber-neon-cyan/60 hover:text-cyber-neon-cyan hover:bg-cyber-darker/50 hover:border-cyber-neon-cyan/30 border border-transparent'
                        }
                      `}
                    >
                      <Icon className="w-5 h-5 animate-neon-pulse" />
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Trending Games */}
            <div className="bg-gradient-to-br from-cyber-darker/30 to-cyber-black/30 backdrop-blur-sm border border-cyber-neon-blue/20 rounded-3xl p-6 shadow-cyber-glow">
              <h3 className="text-xl font-bold text-cyber-neon-cyan mb-4 flex items-center gap-2 font-orbitron">
                <TrendingUp className="w-5 h-5 text-cyber-neon-green animate-electric" />
                Trending Matrix
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Cyber Valorant', players: '2.1M', trend: '+12%', color: 'cyan' },
                  { name: 'Neural Legends', players: '1.8M', trend: '+8%', color: 'purple' },
                  { name: 'Matrix Strike', players: '1.5M', trend: '+15%', color: 'pink' },
                  { name: 'Digital Royale', players: '1.2M', trend: '+5%', color: 'green' }
                ].map((game, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-xl hover:bg-cyber-darker/50 transition-colors duration-300 border border-transparent hover:border-cyber-neon-blue/20">
                    <div>
                      <div className="text-cyber-neon-cyan font-medium font-rajdhani">{game.name}</div>
                      <div className="text-cyber-neon-cyan/60 text-sm">{game.players} neural links</div>
                    </div>
                    <div className={`
                      text-sm font-semibold font-orbitron animate-neon-pulse
                      ${game.color === 'cyan' ? 'text-cyber-neon-cyan' :
                        game.color === 'purple' ? 'text-cyber-neon-purple' :
                        game.color === 'pink' ? 'text-cyber-neon-pink' :
                        'text-cyber-neon-green'}
                    `}>
                      {game.trend}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Main Feed */}
          <div className="lg:col-span-2 space-y-8">
            {/* Enhanced Create Post */}
            <div className="bg-gradient-to-br from-cyber-darker/30 to-cyber-black/30 backdrop-blur-sm border border-cyber-neon-blue/20 rounded-3xl p-6 hover:bg-cyber-darker/40 hover:border-cyber-neon-cyan/40 transition-all duration-500 shadow-cyber-glow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-cyber-neon-cyan/50 shadow-neon-blue">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="Your avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Share your cyber achievements..."
                  className="flex-1 px-4 py-3 bg-cyber-darker/50 border border-cyber-neon-blue/30 rounded-2xl text-cyber-neon-cyan placeholder-cyber-neon-cyan/40 focus:outline-none focus:border-cyber-neon-cyan focus:shadow-neon-blue transition-all duration-300 font-rajdhani backdrop-blur-sm"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple text-white rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2 shadow-neon-blue font-rajdhani">
                  <Send className="w-4 h-4 animate-neon-pulse" />
                  Transmit
                </button>
              </div>
            </div>

            {/* Enhanced Posts */}
            {mockPosts.map(post => {
              const PostIcon = getPostTypeIcon(post.type);
              return (
                <div
                  key={post.id}
                  className="group bg-gradient-to-br from-cyber-darker/30 to-cyber-black/30 backdrop-blur-sm border border-cyber-neon-blue/20 rounded-3xl p-6 hover:bg-cyber-darker/40 hover:border-cyber-neon-cyan/40 hover:scale-[1.02] transition-all duration-500 shadow-cyber-glow"
                >
                  {/* Enhanced Post Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-cyber-neon-cyan/50 group-hover:border-cyber-neon-cyan group-hover:shadow-neon-blue transition-all duration-300">
                          <img 
                            src={post.user.avatar} 
                            alt={post.user.displayName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {post.user.isStreaming && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyber-neon-pink rounded-full border-2 border-cyber-black animate-neon-pulse shadow-neon-pink"></div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-cyber-neon-cyan font-semibold hover:text-cyber-neon-purple transition-colors duration-300 cursor-pointer font-rajdhani">
                            {post.user.displayName}
                          </h4>
                          <div className="w-1 h-1 bg-cyber-neon-blue rounded-full animate-pulse"></div>
                          <span className="text-cyber-neon-cyan/60 text-sm font-orbitron">Level {post.user.level}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-cyber-neon-cyan/60 font-rajdhani">
                          <span>@{post.user.username}</span>
                          <div className="w-1 h-1 bg-cyber-neon-blue/50 rounded-full"></div>
                          <span>{post.timestamp.toLocaleDateString()}</span>
                          {post.game && (
                            <>
                              <div className="w-1 h-1 bg-cyber-neon-blue/50 rounded-full"></div>
                              <span className="text-cyber-neon-purple animate-neon-pulse">{post.game}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className={`
                        p-2 rounded-xl bg-gradient-to-r ${getPostTypeColor(post.type)} text-white shadow-cyber-glow
                      `}>
                        <PostIcon className="w-4 h-4 animate-neon-pulse" />
                      </div>
                      <button className="p-2 rounded-xl text-cyber-neon-cyan/60 hover:text-cyber-neon-cyan hover:bg-cyber-darker/50 transition-all duration-300">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Enhanced Post Content */}
                  <div className="mb-4">
                    <p className="text-cyber-neon-cyan leading-relaxed mb-4 font-rajdhani">{post.content}</p>
                    
                    {post.media && (
                      <div className="relative rounded-2xl overflow-hidden group/media border border-cyber-neon-blue/20">
                        <img 
                          src={post.media} 
                          alt="Post media"
                          className="w-full h-64 object-cover group-hover/media:scale-105 transition-transform duration-500"
                        />
                        {post.type === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-cyber-black/50 backdrop-blur-sm rounded-full flex items-center justify-center group-hover/media:scale-110 transition-transform duration-300 border border-cyber-neon-cyan/30 shadow-neon-blue">
                              <Play className="w-8 h-8 text-cyber-neon-cyan ml-1 animate-neon-pulse" />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Enhanced Post Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-cyber-neon-blue/20">
                    <div className="flex items-center gap-6">
                      <button className={`
                        flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 hover:scale-105 font-rajdhani
                        ${post.isLiked 
                          ? 'text-cyber-neon-pink bg-cyber-neon-pink/20 shadow-neon-pink' 
                          : 'text-cyber-neon-cyan/60 hover:text-cyber-neon-pink hover:bg-cyber-neon-pink/10'
                        }
                      `}>
                        <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current animate-neon-pulse' : ''}`} />
                        <span className="font-semibold">{post.likes.toLocaleString()}</span>
                      </button>
                      
                      <button className="flex items-center gap-2 px-3 py-2 rounded-xl text-cyber-neon-cyan/60 hover:text-cyber-neon-cyan hover:bg-cyber-neon-cyan/10 transition-all duration-300 hover:scale-105 font-rajdhani">
                        <MessageCircle className="w-5 h-5" />
                        <span className="font-semibold">{post.comments}</span>
                      </button>
                      
                      <button className="flex items-center gap-2 px-3 py-2 rounded-xl text-cyber-neon-cyan/60 hover:text-cyber-neon-green hover:bg-cyber-neon-green/10 transition-all duration-300 hover:scale-105 font-rajdhani">
                        <Share2 className="w-5 h-5" />
                        <span className="font-semibold">{post.shares}</span>
                      </button>
                    </div>
                    
                    <button className="p-2 rounded-xl text-cyber-neon-cyan/60 hover:text-cyber-neon-yellow hover:bg-cyber-neon-yellow/10 transition-all duration-300 hover:scale-105">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Enhanced Load More */}
            <div className="text-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyber-darker/50 to-cyber-black/50 border border-cyber-neon-blue/30 text-cyber-neon-cyan rounded-2xl font-semibold hover:bg-cyber-darker/70 hover:border-cyber-neon-cyan/50 hover:scale-105 transition-all duration-300 backdrop-blur-sm shadow-cyber-glow font-rajdhani">
                Load More Neural Data
              </button>
            </div>
          </div>

          {/* Enhanced Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Enhanced Suggested Connections */}
            <div className="bg-gradient-to-br from-cyber-darker/30 to-cyber-black/30 backdrop-blur-sm border border-cyber-neon-blue/20 rounded-3xl p-6 shadow-cyber-glow">
              <h3 className="text-xl font-bold text-cyber-neon-cyan mb-4 flex items-center gap-2 font-orbitron">
                <Users className="w-5 h-5 text-cyber-neon-purple animate-neon-pulse" />
                Neural Links
              </h3>
              <div className="space-y-4">
                {mockUsers.slice(1).map(user => (
                  <div key={user.id} className="flex items-center gap-3 p-3 rounded-2xl hover:bg-cyber-darker/50 transition-colors duration-300 border border-transparent hover:border-cyber-neon-blue/20">
                    <div className="w-10 h-10 rounded-xl overflow-hidden border border-cyber-neon-cyan/30 shadow-neon-blue">
                      <img 
                        src={user.avatar} 
                        alt={user.displayName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-cyber-neon-cyan font-medium text-sm truncate font-rajdhani">{user.displayName}</div>
                      <div className="text-cyber-neon-cyan/60 text-xs font-orbitron">Level {user.level}</div>
                    </div>
                    <button className="px-3 py-1 bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple text-white rounded-lg text-xs font-semibold hover:scale-105 transition-transform duration-300 shadow-neon-blue font-rajdhani">
                      Connect
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Live Streams */}
            <div className="bg-gradient-to-br from-cyber-darker/30 to-cyber-black/30 backdrop-blur-sm border border-cyber-neon-blue/20 rounded-3xl p-6 shadow-cyber-glow">
              <h3 className="text-xl font-bold text-cyber-neon-cyan mb-4 flex items-center gap-2 font-orbitron">
                <Play className="w-5 h-5 text-cyber-neon-pink animate-neon-pulse" />
                Live Matrix
              </h3>
              <div className="space-y-4">
                {[
                  { streamer: 'CyberNinja2024', game: 'Neural Valorant', viewers: 1247, color: 'cyan' },
                  { streamer: 'NeonQueen', game: 'Digital Legends', viewers: 892, color: 'purple' },
                  { streamer: 'MatrixLegend', game: 'Cyber Strike', viewers: 2156, color: 'pink' }
                ].map((stream, index) => (
                  <div key={index} className="p-3 rounded-2xl bg-gradient-to-r from-cyber-neon-pink/10 to-cyber-neon-purple/10 border border-cyber-neon-pink/20 hover:bg-cyber-neon-pink/20 transition-colors duration-300 cursor-pointer shadow-neon-pink">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-cyber-neon-pink rounded-full animate-neon-pulse shadow-neon-pink"></div>
                      <span className="text-cyber-neon-cyan font-medium text-sm font-rajdhani">{stream.streamer}</span>
                    </div>
                    <div className="text-cyber-neon-cyan/60 text-xs mb-1 font-rajdhani">{stream.game}</div>
                    <div className="text-cyber-neon-pink text-xs font-semibold font-orbitron animate-neon-pulse">{stream.viewers.toLocaleString()} neural links</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Recent Achievements */}
            <div className="bg-gradient-to-br from-cyber-darker/30 to-cyber-black/30 backdrop-blur-sm border border-cyber-neon-blue/20 rounded-3xl p-6 shadow-cyber-glow">
              <h3 className="text-xl font-bold text-cyber-neon-cyan mb-4 flex items-center gap-2 font-orbitron">
                <Award className="w-5 h-5 text-cyber-neon-yellow animate-electric" />
                Cyber Achievements
              </h3>
              <div className="space-y-3">
                {[
                  { user: 'CyberNinja2024', achievement: 'Neural Radiant', rarity: 'legendary', color: 'yellow' },
                  { user: 'NeonQueen', achievement: '1K Digital Links', rarity: 'epic', color: 'purple' },
                  { user: 'MatrixLegend', achievement: 'Cyber Champion', rarity: 'legendary', color: 'green' }
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-xl hover:bg-cyber-darker/50 transition-colors duration-300 border border-transparent hover:border-cyber-neon-blue/20">
                    <div className={`
                      w-8 h-8 rounded-lg flex items-center justify-center shadow-cyber-glow
                      ${achievement.color === 'yellow' ? 'bg-gradient-to-r from-cyber-neon-yellow to-cyber-neon-green shadow-neon-green' : 
                        achievement.color === 'purple' ? 'bg-gradient-to-r from-cyber-neon-purple to-cyber-electric shadow-neon-purple' :
                        'bg-gradient-to-r from-cyber-neon-green to-cyber-matrix shadow-neon-green'}
                    `}>
                      <Trophy className="w-4 h-4 text-white animate-neon-pulse" />
                    </div>
                    <div>
                      <div className="text-cyber-neon-cyan text-sm font-medium font-rajdhani">{achievement.user}</div>
                      <div className="text-cyber-neon-cyan/60 text-xs font-rajdhani">{achievement.achievement}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};