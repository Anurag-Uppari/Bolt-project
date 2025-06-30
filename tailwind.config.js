/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'exo': ['Exo 2', 'sans-serif'],
      },
      colors: {
        // Cyberpunk color palette
        'cyber': {
          'black': '#0a0a0f',
          'dark': '#0f0f1a',
          'darker': '#1a1a2e',
          'purple': '#16213e',
          'blue': '#0f3460',
          'teal': '#0e4b99',
          'neon-blue': '#00d4ff',
          'neon-cyan': '#00ffff',
          'neon-purple': '#bf00ff',
          'neon-pink': '#ff0080',
          'neon-green': '#00ff41',
          'neon-yellow': '#ffff00',
          'electric': '#7c3aed',
          'matrix': '#00ff41',
          'void': '#000014',
        },
        // Enhanced gradients
        'gradient': {
          'cyber-blue': 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
          'cyber-purple': 'linear-gradient(135deg, #bf00ff 0%, #7c3aed 100%)',
          'cyber-pink': 'linear-gradient(135deg, #ff0080 0%, #ff4081 100%)',
          'cyber-matrix': 'linear-gradient(135deg, #00ff41 0%, #00cc33 100%)',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'scale-pulse': 'scale-pulse 2s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'cyber-glitch': 'cyber-glitch 0.3s ease-in-out infinite alternate',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'hologram': 'hologram 3s ease-in-out infinite',
        'electric': 'electric 1.5s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.4), 0 0 40px rgba(0, 212, 255, 0.2), inset 0 0 20px rgba(0, 212, 255, 0.1)',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(0, 212, 255, 0.8), 0 0 80px rgba(0, 212, 255, 0.4), inset 0 0 40px rgba(0, 212, 255, 0.2)',
            transform: 'scale(1.02)'
          },
        },
        'neon-pulse': {
          '0%': { 
            textShadow: '0 0 5px rgba(0, 255, 255, 0.8), 0 0 10px rgba(0, 255, 255, 0.6), 0 0 15px rgba(0, 255, 255, 0.4)',
            filter: 'brightness(1)'
          },
          '100%': { 
            textShadow: '0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.6)',
            filter: 'brightness(1.2)'
          },
        },
        'cyber-glitch': {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-1px)' },
          '80%': { transform: 'translateX(1px)' },
          '100%': { transform: 'translateX(0)' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'hologram': {
          '0%, 100%': { 
            opacity: '0.8',
            transform: 'translateY(0px) rotateX(0deg)',
            filter: 'hue-rotate(0deg)'
          },
          '50%': { 
            opacity: '1',
            transform: 'translateY(-5px) rotateX(2deg)',
            filter: 'hue-rotate(90deg)'
          },
        },
        'electric': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(0, 255, 65, 0.5), inset 0 0 5px rgba(0, 255, 65, 0.2)',
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(0, 255, 65, 0.8), inset 0 0 10px rgba(0, 255, 65, 0.4)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        'scale-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'cyber-grid': `
          linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px),
          linear-gradient(rgba(191, 0, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(191, 0, 255, 0.05) 1px, transparent 1px)
        `,
        'matrix-pattern': `
          linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
        `,
        'neon-gradient': 'linear-gradient(135deg, #00d4ff 0%, #bf00ff 25%, #ff0080 50%, #00ff41 75%, #ffff00 100%)',
        'cyber-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0e4b99 100%)',
        'hologram-gradient': 'linear-gradient(45deg, rgba(0, 212, 255, 0.1) 0%, rgba(191, 0, 255, 0.1) 50%, rgba(255, 0, 128, 0.1) 100%)',
      },
      backgroundSize: {
        'cyber-grid': '50px 50px, 50px 50px, 100px 100px, 100px 100px',
        'matrix-grid': '30px 30px',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      transform: {
        'rotate-x-12': 'rotateX(12deg)',
        'rotate-y-12': 'rotateY(12deg)',
        'rotate-x-6': 'rotateX(6deg)',
        'rotate-y-6': 'rotateY(6deg)',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3), 0 0 60px rgba(0, 212, 255, 0.1)',
        'neon-purple': '0 0 20px rgba(191, 0, 255, 0.5), 0 0 40px rgba(191, 0, 255, 0.3), 0 0 60px rgba(191, 0, 255, 0.1)',
        'neon-pink': '0 0 20px rgba(255, 0, 128, 0.5), 0 0 40px rgba(255, 0, 128, 0.3), 0 0 60px rgba(255, 0, 128, 0.1)',
        'neon-green': '0 0 20px rgba(0, 255, 65, 0.5), 0 0 40px rgba(0, 255, 65, 0.3), 0 0 60px rgba(0, 255, 65, 0.1)',
        'cyber-glow': '0 0 30px rgba(0, 212, 255, 0.4), inset 0 0 30px rgba(0, 212, 255, 0.1)',
        'hologram': '0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(191, 0, 255, 0.2), inset 0 0 20px rgba(0, 212, 255, 0.1)',
      }
    },
  },
  plugins: [],
};