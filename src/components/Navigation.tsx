import React from 'react';
import { 
  Home, 
  User, 
  Briefcase, 
  Video, 
  FolderOpen, 
  Settings,
  Zap,
  GamepadIcon,
  Users,
  LogOut,
  Target,
  Cpu
} from 'lucide-react';
import { AppSection, UserMode } from '../types';

interface NavigationProps {
  activeSection: AppSection;
  onSectionChange: (section: AppSection) => void;
  userMode: UserMode;
  onModeToggle: () => void;
  onLogout: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onSectionChange,
  userMode,
  onModeToggle,
  onLogout
}) => {
  const navItems = [
    { id: 'home' as AppSection, icon: Home, label: 'Neural Hub' },
    { id: 'dashboard' as AppSection, icon: User, label: 'Cyber Profile' },
    { id: 'jobs' as AppSection, icon: Briefcase, label: 'Digital Jobs' },
    { id: 'streaming' as AppSection, icon: Video, label: 'Live Matrix' },
    { id: 'portfolio' as AppSection, icon: FolderOpen, label: 'Data Vault' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-black/20 backdrop-blur-xl border-b border-cyber-neon-cyan/20 shadow-cyber-glow">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <GamepadIcon className="w-8 h-8 text-cyber-neon-cyan group-hover:scale-110 transition-transform duration-500 animate-neon-pulse" />
              <div className="absolute inset-0 w-8 h-8 bg-cyber-neon-cyan/20 rounded-full blur-md group-hover:bg-cyber-neon-cyan/40 transition-all duration-500 animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple bg-clip-text text-transparent font-orbitron animate-neon-pulse">
              GameNet
            </span>
          </div>

          {/* Enhanced Navigation Items */}
          <div className="flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`
                    relative px-4 py-2 rounded-xl transition-all duration-300 
                    flex items-center space-x-2 group transform hover:scale-105 font-rajdhani
                    ${isActive 
                      ? 'bg-gradient-to-r from-cyber-neon-cyan/20 to-cyber-neon-purple/20 text-cyber-neon-cyan shadow-neon-blue border border-cyber-neon-cyan/30' 
                      : 'text-cyber-neon-cyan/60 hover:text-cyber-neon-cyan hover:bg-cyber-darker/50 border border-transparent hover:border-cyber-neon-cyan/20'
                    }
                  `}
                >
                  <Icon className="w-5 h-5 animate-neon-pulse" />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyber-neon-cyan/10 to-cyber-neon-purple/10 blur-sm animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Enhanced Mode Toggle & Settings */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onModeToggle}
              className={`
                relative px-4 py-2 rounded-xl transition-all duration-300 
                flex items-center space-x-2 border transform hover:scale-105 font-rajdhani shadow-cyber-glow
                ${userMode === 'creator' 
                  ? 'border-cyber-neon-cyan/50 bg-cyber-neon-cyan/10 text-cyber-neon-cyan shadow-neon-blue' 
                  : 'border-cyber-neon-purple/50 bg-cyber-neon-purple/10 text-cyber-neon-purple shadow-neon-purple'
                }
              `}
            >
              {userMode === 'creator' ? (
                <>
                  <Zap className="w-4 h-4 animate-electric" />
                  <span>Neural Creator</span>
                </>
              ) : (
                <>
                  <Cpu className="w-4 h-4 animate-neon-pulse" />
                  <span>Cyber Organizer</span>
                </>
              )}
              <div className={`
                absolute inset-0 rounded-xl blur-sm opacity-50 animate-pulse
                ${userMode === 'creator' ? 'bg-cyber-neon-cyan/20' : 'bg-cyber-neon-purple/20'}
              `}></div>
            </button>
            
            <button className="p-2 rounded-xl text-cyber-neon-cyan/60 hover:text-cyber-neon-cyan hover:bg-cyber-darker/50 hover:border-cyber-neon-cyan/20 border border-transparent transition-all duration-300 transform hover:scale-105">
              <Settings className="w-5 h-5 animate-neon-pulse" />
            </button>

            <button 
              onClick={onLogout}
              className="p-2 rounded-xl text-cyber-neon-cyan/60 hover:text-cyber-neon-pink hover:bg-cyber-neon-pink/10 hover:border-cyber-neon-pink/20 border border-transparent transition-all duration-300 transform hover:scale-105"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};