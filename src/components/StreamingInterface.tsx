import React, { useState } from 'react';
import { 
  Play, 
  Pause,
  Video,
  VideoOff,
  Mic,
  MicOff,
  Users,
  Heart,
  MessageCircle,
  Settings,
  Monitor,
  Camera,
  Volume2,
  Share2,
  Gift,
  Star
} from 'lucide-react';

export const StreamingInterface: React.FC = () => {
  const [isLive, setIsLive] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [viewers] = useState(1247);
  const [likes] = useState(89);

  const chatMessages = [
    { user: 'GamerPro123', message: 'Great stream!', time: '1m ago', isSuper: false },
    { user: 'StreamFan99', message: 'Can you show that combo again?', time: '2m ago', isSuper: false },
    { user: 'EpicViewer', message: 'Amazing gameplay! 🔥', time: '3m ago', isSuper: true },
    { user: 'NoobSlayer', message: 'What settings are you using?', time: '4m ago', isSuper: false },
    { user: 'SuperFan2024', message: 'Keep it up! Love the content', time: '5m ago', isSuper: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Stream Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-white">Streaming Control Center</h1>
            <div className="flex items-center gap-4">
              {isLive && (
                <div className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl font-semibold animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  LIVE
                </div>
              )}
              <div className="flex items-center gap-2 text-cyan-400">
                <Users className="w-5 h-5" />
                <span className="font-semibold">{viewers.toLocaleString()} viewers</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Stream Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Video Preview */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border-2 border-white/10">
              {!isLive ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Monitor className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Stream Preview</h3>
                    <p className="text-gray-400 mb-6">Set up your stream and go live when ready</p>
                    <button
                      onClick={() => setIsLive(true)}
                      className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-semibold text-lg hover:scale-105 transition-transform duration-300 flex items-center gap-3 mx-auto"
                    >
                      <Play className="w-6 h-6" />
                      Start Streaming
                    </button>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0">
                  {/* Simulated game footage */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold mb-2">🎮 LIVE GAMEPLAY</div>
                      <div className="text-xl opacity-75">Valorant - Competitive Match</div>
                    </div>
                  </div>
                  
                  {/* Stream overlay */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-cyan-500">
                        <img 
                          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100" 
                          alt="Streamer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-white font-semibold">ProGamer2024</div>
                        <div className="text-cyan-400 text-sm">Level 42 • 1.2K followers</div>
                      </div>
                    </div>
                  </div>

                  {/* Live stats overlay */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <div className="bg-black/50 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-cyan-400" />
                      <span className="text-white font-semibold">{viewers}</span>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span className="text-white font-semibold">{likes}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Stream Controls */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Main Controls */}
                  <button
                    onClick={() => setIsLive(!isLive)}
                    className={`
                      px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 transition-all duration-300
                      ${isLive 
                        ? 'bg-red-500 hover:bg-red-600 text-white' 
                        : 'bg-gradient-to-r from-green-500 to-green-600 hover:scale-105 text-white'
                      }
                    `}
                  >
                    {isLive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    {isLive ? 'End Stream' : 'Go Live'}
                  </button>

                  {/* Camera Toggle */}
                  <button
                    onClick={() => setIsCameraOn(!isCameraOn)}
                    className={`
                      p-3 rounded-2xl transition-all duration-300
                      ${isCameraOn 
                        ? 'bg-white/10 text-white hover:bg-white/20' 
                        : 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                      }
                    `}
                  >
                    {isCameraOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                  </button>

                  {/* Mic Toggle */}
                  <button
                    onClick={() => setIsMicOn(!isMicOn)}
                    className={`
                      p-3 rounded-2xl transition-all duration-300
                      ${isMicOn 
                        ? 'bg-white/10 text-white hover:bg-white/20' 
                        : 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                      }
                    `}
                  >
                    {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <button className="p-3 rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-colors duration-300">
                    <Volume2 className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-colors duration-300">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-colors duration-300">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Stream Info */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Stream Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 mb-2">Stream Title</label>
                  <input
                    type="text"
                    defaultValue="Ranked Valorant - Road to Radiant!"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Category</label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300">
                    <option>Valorant</option>
                    <option>League of Legends</option>
                    <option>Counter-Strike 2</option>
                    <option>Just Chatting</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Chat & Activity Panel */}
          <div className="space-y-6">
            {/* Live Chat */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 h-96 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-white">Live Chat</h3>
                <div className="ml-auto bg-green-500/20 text-green-400 px-2 py-1 rounded-lg text-xs font-semibold">
                  {chatMessages.length} messages
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                {chatMessages.map((msg, index) => (
                  <div key={index} className="group hover:bg-white/5 rounded-lg p-2 transition-colors duration-200">
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0">
                        {msg.isSuper && <Star className="w-4 h-4 text-yellow-400" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`font-semibold text-sm ${msg.isSuper ? 'text-yellow-400' : 'text-cyan-400'}`}>
                            {msg.user}
                          </span>
                          <span className="text-xs text-gray-500">{msg.time}</span>
                        </div>
                        <p className="text-white text-sm leading-relaxed">{msg.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 bg-white/5 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:scale-105 transition-transform duration-300">
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Recent Followers & Donations */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="w-5 h-5 text-purple-400" />
                <h3 className="font-bold text-white">Recent Activity</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  { type: 'follow', user: 'NewGamer123', action: 'followed you' },
                  { type: 'donation', user: 'SuperFan99', action: 'donated $5.00' },
                  { type: 'follow', user: 'ProPlayer456', action: 'followed you' },
                  { type: 'sub', user: 'StreamLover', action: 'subscribed' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200">
                    <div className={`
                      w-8 h-8 rounded-lg flex items-center justify-center
                      ${activity.type === 'follow' ? 'bg-blue-500/20 text-blue-400' :
                        activity.type === 'donation' ? 'bg-green-500/20 text-green-400' :
                        'bg-purple-500/20 text-purple-400'}
                    `}>
                      {activity.type === 'follow' ? <Users className="w-4 h-4" /> :
                       activity.type === 'donation' ? <Gift className="w-4 h-4" /> :
                       <Star className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{activity.user}</div>
                      <div className="text-gray-400 text-xs">{activity.action}</div>
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