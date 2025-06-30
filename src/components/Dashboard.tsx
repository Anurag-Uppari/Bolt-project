import React from 'react';
import { 
  Trophy, 
  Star, 
  Zap, 
  Users, 
  Calendar,
  TrendingUp,
  Play,
  Settings,
  Badge,
  Award,
  Target,
  Cpu,
  Shield,
  Gamepad2
} from 'lucide-react';
import { User } from '../types';

interface DashboardProps {
  userMode: 'creator' | 'organizer';
}

export const Dashboard: React.FC<DashboardProps> = ({ userMode }) => {
  const mockUser: User = {
    id: '1',
    username: 'CyberNinja2024',
    displayName: 'Alex Chen',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    level: 42,
    xp: 8750,
    maxXp: 10000,
    platforms: [
      { name: 'Neural Twitch', username: 'cyberninja2024', icon: '🎮', verified: true },
      { name: 'Matrix Steam', username: 'CyberNinja2024', icon: '🎯', verified: true },
      { name: 'Digital Discord', username: 'CyberNinja#2024', icon: '💬', verified: false }
    ],
    skills: [
      { name: 'Neural FPS', level: 95, category: 'Combat Systems' },
      { name: 'Stream Matrix', level: 88, category: 'Digital Content' },
      { name: 'Cyber Community', level: 92, category: 'Social Networks' },
      { name: 'Data Editing', level: 76, category: 'Technical Arts' }
    ],
    achievements: [],
    isStreaming: true
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
        {/* Enhanced Profile Header */}
        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-cyber-neon-cyan/10 via-cyber-neon-purple/10 to-cyber-neon-pink/10 rounded-3xl p-8 backdrop-blur-sm border border-cyber-neon-blue/20 shadow-cyber-glow">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              {/* Enhanced Avatar & Basic Info */}
              <div className="relative group">
                <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-cyber-neon-cyan/50 group-hover:border-cyber-neon-cyan group-hover:shadow-neon-blue transition-all duration-300">
                  <img 
                    src={mockUser.avatar} 
                    alt={mockUser.displayName}
                    className="w-full h-full object-cover"
                  />
                </div>
                {mockUser.isStreaming && (
                  <div className="absolute -top-2 -right-2 bg-cyber-neon-pink text-white px-3 py-1 rounded-xl text-sm font-semibold flex items-center gap-1 animate-neon-pulse shadow-neon-pink font-rajdhani">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    NEURAL LINK ACTIVE
                  </div>
                )}
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-cyber-neon-cyan/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h1 className="text-3xl font-bold text-cyber-neon-cyan font-orbitron animate-neon-pulse">{mockUser.displayName}</h1>
                  <Shield className="w-6 h-6 text-cyber-neon-cyan animate-electric" />
                </div>
                <p className="text-cyber-neon-purple text-lg mb-4 font-rajdhani">@{mockUser.username}</p>
                
                {/* Enhanced Level & XP */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-cyber-neon-yellow animate-electric" />
                      <span className="text-cyber-neon-cyan font-semibold font-orbitron">Neural Level {mockUser.level}</span>
                    </div>
                    <span className="text-cyber-neon-cyan/60 font-rajdhani">{mockUser.xp} / {mockUser.maxXp} XP</span>
                  </div>
                  <div className="w-full bg-cyber-darker/50 rounded-full h-3 overflow-hidden border border-cyber-neon-blue/20">
                    <div 
                      className="h-full bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple rounded-full transition-all duration-1000 shadow-neon-blue"
                      style={{ width: `${(mockUser.xp / mockUser.maxXp) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Enhanced Platform Links */}
                <div className="flex gap-4">
                  {mockUser.platforms.map((platform, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyber-darker/30 border border-cyber-neon-blue/20 hover:bg-cyber-darker/50 hover:border-cyber-neon-cyan/40 transition-all duration-300 backdrop-blur-sm shadow-cyber-glow"
                    >
                      <span className="text-xl animate-bounce-slow">{platform.icon}</span>
                      <span className="text-cyber-neon-cyan text-sm font-medium font-rajdhani">{platform.name}</span>
                      {platform.verified && (
                        <div className="w-4 h-4 bg-cyber-neon-green rounded-full flex items-center justify-center shadow-neon-green">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Quick Actions */}
              <div className="flex flex-col gap-3">
                <button className="px-6 py-3 bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2 shadow-neon-blue font-rajdhani">
                  <Play className="w-5 h-5 animate-neon-pulse" />
                  {mockUser.isStreaming ? 'Manage Neural Link' : 'Activate Matrix'}
                </button>
                <button className="px-6 py-3 border border-cyber-neon-blue/30 text-cyber-neon-cyan rounded-xl font-semibold hover:bg-cyber-darker/50 hover:border-cyber-neon-cyan/50 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm font-rajdhani">
                  <Settings className="w-5 h-5 animate-neon-pulse" />
                  Edit Neural Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Enhanced Skills Panel */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-cyber-darker/30 to-cyber-black/30 backdrop-blur-sm border border-cyber-neon-blue/20 rounded-3xl p-8 shadow-cyber-glow">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-cyber-neon-cyan animate-electric" />
                <h2 className="text-2xl font-bold text-cyber-neon-cyan font-orbitron">Neural Skills & Expertise</h2>
              </div>
              
              <div className="space-y-6">
                {mockUser.skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-cyber-neon-cyan font-medium font-rajdhani">{skill.name}</span>
                      <span className="text-cyber-neon-purple font-semibold font-orbitron animate-neon-pulse">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-cyber-darker/50 rounded-full h-3 overflow-hidden border border-cyber-neon-blue/20">
                      <div 
                        className="h-full bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple rounded-full transition-all duration-1000 group-hover:from-cyber-neon-purple group-hover:to-cyber-neon-pink shadow-neon-blue"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-cyber-neon-cyan/60 mt-1 font-rajdhani">{skill.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Stats Panel */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-cyber-darker/30 to-cyber-black/30 backdrop-blur-sm border border-cyber-neon-blue/20 rounded-3xl p-6 shadow-cyber-glow">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-6 h-6 text-cyber-neon-yellow animate-electric" />
                <h3 className="text-xl font-bold text-cyber-neon-cyan font-orbitron">Cyber Achievements</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: 'Neural Champion', rarity: 'legendary', icon: Award, color: 'yellow' },
                  { name: 'Stream Veteran', rarity: 'epic', icon: Star, color: 'purple' },
                  { name: 'Matrix Builder', rarity: 'rare', icon: Users, color: 'cyan' }
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-cyber-darker/30 hover:bg-cyber-darker/50 transition-colors duration-300 border border-cyber-neon-blue/10 hover:border-cyber-neon-cyan/30">
                    <div className={`
                      w-10 h-10 rounded-xl flex items-center justify-center shadow-cyber-glow
                      ${achievement.color === 'yellow' ? 'bg-gradient-to-r from-cyber-neon-yellow to-cyber-neon-green shadow-neon-green' : 
                        achievement.color === 'purple' ? 'bg-gradient-to-r from-cyber-neon-purple to-cyber-electric shadow-neon-purple' :
                        'bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-blue shadow-neon-blue'}
                    `}>
                      <achievement.icon className="w-5 h-5 text-white animate-neon-pulse" />
                    </div>
                    <div>
                      <div className="text-cyber-neon-cyan font-medium font-rajdhani">{achievement.name}</div>
                      <div className={`
                        text-xs capitalize font-orbitron animate-neon-pulse
                        ${achievement.color === 'yellow' ? 'text-cyber-neon-yellow' : 
                          achievement.color === 'purple' ? 'text-cyber-neon-purple' :
                          'text-cyber-neon-cyan'}
                      `}>
                        {achievement.rarity}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyber-darker/30 to-cyber-black/30 backdrop-blur-sm border border-cyber-neon-blue/20 rounded-3xl p-6 shadow-cyber-glow">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-cyber-neon-purple animate-neon-pulse" />
                <h3 className="text-xl font-bold text-cyber-neon-cyan font-orbitron">Neural Activity</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                {[
                  { action: 'Completed neural match', time: '2h ago', color: 'green', icon: Target },
                  { action: 'Updated data vault', time: '1d ago', color: 'blue', icon: Settings },
                  { action: 'Gained 50 neural links', time: '2d ago', color: 'purple', icon: Users },
                  { action: 'Streamed for 4 cycles', time: '3d ago', color: 'pink', icon: Play }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-cyber-darker/30 transition-colors duration-200 border border-transparent hover:border-cyber-neon-blue/20">
                    <div className={`
                      w-8 h-8 rounded-lg flex items-center justify-center
                      ${activity.color === 'green' ? 'bg-cyber-neon-green/20 text-cyber-neon-green' :
                        activity.color === 'blue' ? 'bg-cyber-neon-blue/20 text-cyber-neon-blue' :
                        activity.color === 'purple' ? 'bg-cyber-neon-purple/20 text-cyber-neon-purple' :
                        'bg-cyber-neon-pink/20 text-cyber-neon-pink'}
                    `}>
                      <activity.icon className="w-4 h-4 animate-neon-pulse" />
                    </div>
                    <div className="flex-1">
                      <div className="text-cyber-neon-cyan font-rajdhani">{activity.action}</div>
                      <div className="text-cyber-neon-cyan/60 text-xs font-rajdhani">{activity.time}</div>
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