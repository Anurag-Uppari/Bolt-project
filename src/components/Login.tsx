import React, { useState } from 'react';
import { 
  GamepadIcon, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  Zap,
  Star,
  Users,
  Play,
  ArrowRight,
  Trophy,
  Target,
  Gamepad2
} from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-void via-cyber-black to-cyber-dark relative overflow-hidden flex items-center justify-center">
      {/* Enhanced Cyberpunk Background */}
      <div className="absolute inset-0">
        {/* Primary neon gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,255,0.15),transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(191,0,255,0.15),transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,0,128,0.1),transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(0,255,65,0.08),transparent_50%)] animate-pulse-slow"></div>
        
        {/* Matrix-style floating particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            >
              <div className="w-1 h-8 bg-gradient-to-b from-cyber-neon-green to-transparent opacity-60"></div>
            </div>
          ))}
        </div>
        
        {/* Floating cyber elements */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            >
              <div className={`
                w-2 h-2 rounded-full animate-neon-pulse
                ${i % 4 === 0 ? 'bg-cyber-neon-blue shadow-neon-blue' :
                  i % 4 === 1 ? 'bg-cyber-neon-purple shadow-neon-purple' :
                  i % 4 === 2 ? 'bg-cyber-neon-pink shadow-neon-pink' :
                  'bg-cyber-neon-green shadow-neon-green'}
              `}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Cyber Grid Background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 animate-pulse bg-cyber-grid"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Enhanced 3D Gaming Animation */}
        <div className="text-center lg:text-left relative">
          {/* 3D Gaming Scene */}
          <div className="relative mb-12 group perspective-1000">
            {/* Main gaming setup visualization */}
            <div className="relative transform-gpu preserve-3d animate-hologram">
              {/* Gaming monitor */}
              <div className="relative w-80 h-48 mx-auto lg:mx-0 mb-8 transform rotate-y-6 hover:rotate-y-12 transition-transform duration-700">
                <div className="w-full h-full bg-gradient-to-br from-cyber-darker to-cyber-black rounded-2xl border-2 border-cyber-neon-blue shadow-neon-blue overflow-hidden">
                  {/* Screen content */}
                  <div className="w-full h-full bg-gradient-to-br from-cyber-neon-blue/20 via-cyber-neon-purple/20 to-cyber-neon-pink/20 p-4 relative">
                    {/* Game UI elements */}
                    <div className="absolute top-2 left-2 flex gap-1">
                      <div className="w-3 h-3 bg-cyber-neon-green rounded-full animate-electric"></div>
                      <div className="w-3 h-3 bg-cyber-neon-yellow rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-cyber-neon-pink rounded-full animate-neon-pulse"></div>
                    </div>
                    
                    {/* Victory message */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Trophy className="w-12 h-12 text-cyber-neon-yellow mx-auto mb-2 animate-bounce-slow" />
                        <div className="text-cyber-neon-green font-bold text-lg animate-neon-pulse">VICTORY!</div>
                        <div className="text-cyber-neon-blue text-sm">+2500 XP</div>
                      </div>
                    </div>
                    
                    {/* Game stats */}
                    <div className="absolute bottom-2 left-2 text-xs text-cyber-neon-cyan">
                      <div>K/D: 24/3</div>
                      <div>Rank: Immortal</div>
                    </div>
                  </div>
                </div>
                
                {/* Monitor stand */}
                <div className="w-16 h-8 bg-gradient-to-b from-cyber-darker to-cyber-black mx-auto mt-2 rounded-b-lg border border-cyber-neon-blue/30"></div>
              </div>
              
              {/* Gaming peripherals */}
              <div className="flex justify-center lg:justify-start gap-8 mb-8">
                {/* Keyboard */}
                <div className="w-24 h-8 bg-gradient-to-br from-cyber-darker to-cyber-black rounded-lg border border-cyber-neon-purple/50 shadow-neon-purple transform rotate-x-6 hover:rotate-x-12 transition-transform duration-500">
                  <div className="w-full h-full p-1">
                    <div className="grid grid-cols-6 gap-0.5 h-full">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className={`
                          rounded-sm animate-electric
                          ${i % 3 === 0 ? 'bg-cyber-neon-blue/30' :
                            i % 3 === 1 ? 'bg-cyber-neon-purple/30' :
                            'bg-cyber-neon-pink/30'}
                        `}></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Mouse */}
                <div className="w-12 h-16 bg-gradient-to-br from-cyber-darker to-cyber-black rounded-2xl border border-cyber-neon-green/50 shadow-neon-green transform rotate-x-6 hover:rotate-x-12 transition-transform duration-500">
                  <div className="w-full h-full p-1">
                    <div className="w-2 h-2 bg-cyber-neon-green/50 rounded-full mx-auto mt-2 animate-neon-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating achievement notifications */}
            <div className="absolute -top-10 -right-10 animate-float">
              <div className="bg-gradient-to-r from-cyber-neon-green/20 to-cyber-neon-blue/20 backdrop-blur-sm border border-cyber-neon-green/50 rounded-2xl p-3 shadow-neon-green">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-cyber-neon-yellow animate-neon-pulse" />
                  <div className="text-cyber-neon-green text-sm font-semibold">Achievement Unlocked!</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-5 -left-5 animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-gradient-to-r from-cyber-neon-purple/20 to-cyber-neon-pink/20 backdrop-blur-sm border border-cyber-neon-purple/50 rounded-2xl p-3 shadow-neon-purple">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-cyber-neon-pink animate-neon-pulse" />
                  <div className="text-cyber-neon-purple text-sm font-semibold">Headshot!</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Branding */}
          <div className="relative mb-8 group">
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
              <div className="relative">
                <GamepadIcon className="w-16 h-16 text-cyber-neon-cyan group-hover:scale-110 transition-transform duration-500 animate-neon-pulse" />
                <div className="absolute inset-0 w-16 h-16 bg-cyber-neon-cyan/20 rounded-full blur-xl group-hover:bg-cyber-neon-cyan/40 transition-all duration-500 animate-pulse"></div>
              </div>
              <span className="text-6xl font-bold font-orbitron bg-gradient-to-r from-cyber-neon-cyan via-cyber-neon-purple to-cyber-neon-pink bg-clip-text text-transparent animate-neon-pulse">
                GameNet
              </span>
            </div>
            
            {/* Floating 3D Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-cyber-neon-purple/20 to-cyber-neon-pink/20 rounded-3xl backdrop-blur-sm border border-cyber-neon-purple/30 animate-float transform rotate-12 hover:rotate-0 transition-transform duration-700 shadow-neon-purple"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-gradient-to-r from-cyber-neon-cyan/20 to-cyber-neon-blue/20 rounded-2xl backdrop-blur-sm border border-cyber-neon-cyan/30 animate-pulse transform -rotate-12 hover:rotate-0 transition-transform duration-700 shadow-neon-blue"></div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight font-orbitron">
            <span className="bg-gradient-to-r from-cyber-neon-cyan via-cyber-neon-purple to-cyber-neon-pink bg-clip-text text-transparent animate-neon-pulse">
              Connect.
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyber-neon-purple via-cyber-neon-pink to-cyber-neon-cyan bg-clip-text text-transparent animate-neon-pulse">
              Stream.
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyber-neon-pink via-cyber-neon-cyan to-cyber-neon-purple bg-clip-text text-transparent animate-neon-pulse">
              Evolve.
            </span>
          </h1>

          <p className="text-xl text-cyber-neon-cyan/80 mb-8 leading-relaxed font-rajdhani">
            The ultimate cyberpunk professional network for gamers, streamers, and esports professionals. 
            Level up your career in the digital realm.
          </p>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {[
              { icon: Users, value: '50K+', label: 'Cyber Gamers', color: 'cyan' },
              { icon: Play, value: '10K+', label: 'Live Streams', color: 'purple' },
              { icon: Star, value: '1K+', label: 'Tech Corps', color: 'pink' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group text-center p-4 rounded-2xl bg-gradient-to-br from-cyber-darker/50 to-cyber-black/50 backdrop-blur-sm border border-cyber-neon-blue/20 hover:border-cyber-neon-cyan/50 hover:bg-cyber-darker/70 hover:scale-105 transition-all duration-500 shadow-cyber-glow"
              >
                <div className={`
                  w-12 h-12 mx-auto mb-3 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                  ${stat.color === 'cyan' ? 'bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-blue shadow-neon-blue' :
                    stat.color === 'purple' ? 'bg-gradient-to-r from-cyber-neon-purple to-cyber-electric shadow-neon-purple' :
                    'bg-gradient-to-r from-cyber-neon-pink to-cyber-neon-purple shadow-neon-pink'}
                `}>
                  <stat.icon className="w-6 h-6 text-white animate-neon-pulse" />
                </div>
                <div className="text-2xl font-bold text-cyber-neon-cyan mb-1 font-orbitron animate-neon-pulse">{stat.value}</div>
                <div className="text-cyber-neon-blue/80 text-sm font-rajdhani">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Enhanced Login Form */}
        <div className="relative">
          {/* Enhanced 3D Container */}
          <div className="relative bg-gradient-to-br from-cyber-darker/30 to-cyber-black/30 backdrop-blur-xl border border-cyber-neon-blue/30 rounded-3xl p-8 shadow-hologram transform hover:scale-[1.02] transition-all duration-500">
            {/* Enhanced Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyber-neon-cyan/10 via-cyber-neon-purple/10 to-cyber-neon-pink/10 blur-xl opacity-50 animate-pulse"></div>
            
            <div className="relative z-10">
              {/* Enhanced Toggle Buttons */}
              <div className="flex mb-8 bg-cyber-darker/50 rounded-2xl p-1 border border-cyber-neon-blue/20">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`
                    flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 font-rajdhani
                    ${isLogin 
                      ? 'bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple text-white shadow-neon-blue transform scale-105' 
                      : 'text-cyber-neon-cyan/60 hover:text-cyber-neon-cyan'
                    }
                  `}
                >
                  <Zap className="w-4 h-4 animate-electric" />
                  Neural Link
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`
                    flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 font-rajdhani
                    ${!isLogin 
                      ? 'bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple text-white shadow-neon-blue transform scale-105' 
                      : 'text-cyber-neon-cyan/60 hover:text-cyber-neon-cyan'
                    }
                  `}
                >
                  <Star className="w-4 h-4 animate-neon-pulse" />
                  Jack In
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Enhanced Email Field */}
                <div className="relative group">
                  <label className="block text-cyber-neon-cyan/80 mb-2 font-medium font-rajdhani">Neural ID</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyber-neon-cyan/60 group-focus-within:text-cyber-neon-cyan transition-colors duration-300 animate-neon-pulse" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-cyber-darker/50 border border-cyber-neon-blue/30 rounded-2xl text-cyber-neon-cyan placeholder-cyber-neon-cyan/40 focus:outline-none focus:border-cyber-neon-cyan focus:bg-cyber-darker/70 focus:shadow-neon-blue transition-all duration-300 hover:bg-cyber-darker/60 font-rajdhani backdrop-blur-sm"
                      placeholder="Enter your neural ID"
                      required
                    />
                  </div>
                </div>

                {/* Enhanced Password Field */}
                <div className="relative group">
                  <label className="block text-cyber-neon-cyan/80 mb-2 font-medium font-rajdhani">Access Code</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyber-neon-cyan/60 group-focus-within:text-cyber-neon-cyan transition-colors duration-300 animate-electric" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-12 py-4 bg-cyber-darker/50 border border-cyber-neon-blue/30 rounded-2xl text-cyber-neon-cyan placeholder-cyber-neon-cyan/40 focus:outline-none focus:border-cyber-neon-cyan focus:bg-cyber-darker/70 focus:shadow-neon-blue transition-all duration-300 hover:bg-cyber-darker/60 font-rajdhani backdrop-blur-sm"
                      placeholder="Enter your access code"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyber-neon-cyan/60 hover:text-cyber-neon-cyan transition-colors duration-300"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Enhanced Remember Me & Forgot Password */}
                {isLogin && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-cyber-neon-cyan/60 cursor-pointer hover:text-cyber-neon-cyan transition-colors duration-300 font-rajdhani">
                      <input type="checkbox" className="rounded border-cyber-neon-blue/30 bg-cyber-darker/50 text-cyber-neon-cyan focus:ring-cyber-neon-cyan" />
                      Remember neural pattern
                    </label>
                    <button type="button" className="text-cyber-neon-purple hover:text-cyber-neon-pink transition-colors duration-300 font-rajdhani animate-neon-pulse">
                      Reset access?
                    </button>
                  </div>
                )}

                {/* Enhanced Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full py-4 bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple text-white rounded-2xl font-semibold text-lg hover:scale-105 hover:shadow-neon-blue transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden font-orbitron"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Establishing Connection...
                      </>
                    ) : (
                      <>
                        {isLogin ? 'Enter The Matrix' : 'Join The Network'}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 animate-neon-pulse" />
                      </>
                    )}
                  </span>
                  
                  {/* Enhanced animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </button>

                {/* Enhanced Social Login */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-cyber-neon-blue/30"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-cyber-black text-cyber-neon-cyan/60 font-rajdhani">Or sync with platforms</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: 'Steam', icon: '🎮', color: 'from-cyber-neon-blue to-cyber-neon-cyan' },
                    { name: 'Discord', icon: '💬', color: 'from-cyber-neon-purple to-cyber-electric' },
                    { name: 'Twitch', icon: '📺', color: 'from-cyber-neon-pink to-cyber-neon-purple' }
                  ].map((platform, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`
                        p-4 rounded-2xl bg-gradient-to-r ${platform.color} text-white font-semibold 
                        hover:scale-105 hover:shadow-neon-blue transition-all duration-300 flex flex-col items-center gap-2
                        border border-cyber-neon-blue/20 backdrop-blur-sm font-rajdhani
                      `}
                    >
                      <span className="text-2xl animate-bounce-slow">{platform.icon}</span>
                      <span className="text-xs">{platform.name}</span>
                    </button>
                  ))}
                </div>
              </form>
            </div>
          </div>

          {/* Enhanced Floating 3D Elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-cyber-neon-cyan/30 to-cyber-neon-purple/30 rounded-2xl backdrop-blur-sm border border-cyber-neon-cyan/50 animate-float transform rotate-45 shadow-neon-blue"></div>
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-cyber-neon-purple/30 to-cyber-neon-pink/30 rounded-3xl backdrop-blur-sm border border-cyber-neon-purple/50 animate-pulse transform -rotate-12 shadow-neon-purple"></div>
          <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-cyber-neon-green/30 to-cyber-matrix/30 rounded-xl backdrop-blur-sm border border-cyber-neon-green/50 animate-electric transform rotate-12 shadow-neon-green"></div>
        </div>
      </div>
    </div>
  );
};