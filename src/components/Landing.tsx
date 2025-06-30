import React from 'react';
import { 
  Play, 
  TrendingUp, 
  Users, 
  Star,
  ChevronDown,
  Gamepad2,
  Zap,
  Globe
} from 'lucide-react';

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main CTA */}
          <div className="relative mb-12">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Connect.
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Stream.
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Evolve.
              </span>
            </h1>
            
            {/* Glow effects */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl"></div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            The next-generation professional network for gamers, streamers, and esports professionals. 
            Build your career in the gaming industry.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Start Your Journey</span>
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </button>
            
            <button className="group relative px-8 py-4 rounded-2xl border-2 border-cyan-500/50 text-cyan-400 font-semibold text-lg transition-all duration-300 hover:bg-cyan-500/10 hover:border-cyan-400">
              <span className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Join Community</span>
              </span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Level Up Your Career
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to succeed in the gaming industry, all in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {[
              {
                icon: Gamepad2,
                title: "Professional Gaming Profiles",
                description: "Showcase your skills, achievements, and gaming portfolio with stunning 3D profiles",
                color: "cyan"
              },
              {
                icon: TrendingUp,
                title: "Industry Opportunities",
                description: "Discover jobs, collaborations, and events in the gaming industry with smart matching",
                color: "purple"
              },
              {
                icon: Zap,
                title: "Live Streaming Integration",
                description: "Stream directly from the platform and grow your audience with built-in tools",
                color: "pink"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              >
                <div className={`
                  w-16 h-16 rounded-2xl bg-gradient-to-r 
                  ${feature.color === 'cyan' ? 'from-cyan-500 to-cyan-600' : 
                    feature.color === 'purple' ? 'from-purple-500 to-purple-600' : 
                    'from-pink-500 to-pink-600'}
                  flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300
                `}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                
                {/* Hover glow effect */}
                <div className={`
                  absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500
                  ${feature.color === 'cyan' ? 'bg-cyan-500' : 
                    feature.color === 'purple' ? 'bg-purple-500' : 
                    'bg-pink-500'}
                  blur-xl
                `}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Active Gamers", icon: Users },
              { number: "1.2K+", label: "Companies", icon: Globe },
              { number: "10K+", label: "Job Matches", icon: TrendingUp },
              { number: "4.9", label: "User Rating", icon: Star }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                  
                  {/* Subtle glow */}
                  <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};