import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { JobHub } from './components/JobHub';
import { StreamingInterface } from './components/StreamingInterface';
import { Portfolio } from './components/Portfolio';
import { AppSection, UserMode } from './types';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState<AppSection>('home');
  const [userMode, setUserMode] = useState<UserMode>('creator');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setActiveSection('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveSection('home');
  };

  const handleModeToggle = () => {
    setUserMode(prev => prev === 'creator' ? 'organizer' : 'creator');
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'dashboard':
        return <Dashboard userMode={userMode} />;
      case 'jobs':
        return <JobHub />;
      case 'streaming':
        return <StreamingInterface />;
      case 'portfolio':
        return <Portfolio />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.15),transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(236,72,153,0.1),transparent_50%)] animate-pulse-slow"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/20 rounded-full animate-bounce-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* 3D Grid Background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-5 animate-pulse pointer-events-none"></div>

      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        userMode={userMode}
        onModeToggle={handleModeToggle}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <main className="relative z-10">
        {renderActiveSection()}
      </main>
    </div>
  );
}

export default App;