import React, { useState } from 'react';
import { 
  Upload, 
  Image, 
  Video, 
  FileText,
  Download,
  Eye,
  Heart,
  Share2,
  Filter,
  Grid3X3,
  List,
  Play,
  Star,
  Award,
  Calendar,
  TrendingUp
} from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isDragging, setIsDragging] = useState(false);

  const portfolioItems = [
    {
      id: '1',
      type: 'video',
      title: 'Epic Valorant Montage',
      description: 'My best plays from the last tournament',
      thumbnail: 'https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 12500,
      likes: 892,
      uploadDate: new Date('2024-01-10'),
      tags: ['Valorant', 'Montage', 'FPS', 'Highlights'],
      featured: true
    },
    {
      id: '2',
      type: 'image',
      title: 'Custom UI Design Concepts',
      description: 'Game interface designs for mobile RPG',
      thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 3200,
      likes: 245,
      uploadDate: new Date('2024-01-08'),
      tags: ['UI Design', 'Mobile', 'RPG', 'Concept Art'],
      featured: false
    },
    {
      id: '3',
      type: 'video',
      title: 'Tournament Commentary',
      description: 'Professional esports commentary reel',
      thumbnail: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 8700,
      likes: 567,
      uploadDate: new Date('2024-01-05'),
      tags: ['Commentary', 'Esports', 'Analysis', 'Professional'],
      featured: true
    },
    {
      id: '4',
      type: 'document',
      title: 'Game Design Document',
      description: 'Complete GDD for indie puzzle game',
      thumbnail: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=400',
      views: 1800,
      likes: 134,
      uploadDate: new Date('2024-01-03'),
      tags: ['Game Design', 'Documentation', 'Indie', 'Strategy'],
      featured: false
    },
    {
      id: '5',
      type: 'image',
      title: '3D Character Models',
      description: 'Original character designs for fantasy game',
      thumbnail: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 5400,
      likes: 412,
      uploadDate: new Date('2024-01-01'),
      tags: ['3D Modeling', 'Character Design', 'Fantasy', 'Art'],
      featured: false
    },
    {
      id: '6',
      type: 'video',
      title: 'Speedrun World Record',
      description: 'Personal best speedrun with commentary',
      thumbnail: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 25000,
      likes: 1850,
      uploadDate: new Date('2023-12-28'),
      tags: ['Speedrun', 'World Record', 'Gaming', 'Achievement'],
      featured: true
    }
  ];

  const filterOptions = ['all', 'video', 'image', 'document'];

  const filteredItems = portfolioItems.filter(item => 
    selectedFilter === 'all' || item.type === selectedFilter
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'image': return Image;
      case 'document': return FileText;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'from-red-500 to-red-600';
      case 'image': return 'from-green-500 to-green-600';
      case 'document': return 'from-blue-500 to-blue-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              My Portfolio
            </h1>
            <p className="text-xl text-gray-400">
              Showcase your best work and achievements
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-6 lg:mt-0">
            <div className="flex items-center gap-2 bg-white/5 rounded-2xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`
                  p-2 rounded-xl transition-all duration-300
                  ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-cyan-400'}
                `}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`
                  p-2 rounded-xl transition-all duration-300
                  ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-cyan-400'}
                `}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Upload Area */}
        <div
          className={`
            relative mb-12 p-12 border-2 border-dashed rounded-3xl transition-all duration-300 cursor-pointer
            ${isDragging 
              ? 'border-cyan-500 bg-cyan-500/10' 
              : 'border-gray-600 hover:border-cyan-500/50 hover:bg-white/5'
            }
          `}
          onDragOver={(e) => {e.preventDefault(); setIsDragging(true);}}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {e.preventDefault(); setIsDragging(false);}}
        >
          <div className="text-center">
            <div className={`
              w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center transition-all duration-300
              ${isDragging ? 'bg-cyan-500 scale-110' : 'bg-gradient-to-r from-cyan-500 to-purple-500'}
            `}>
              <Upload className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {isDragging ? 'Drop your files here' : 'Upload Your Work'}
            </h3>
            <p className="text-gray-400 mb-6">
              Drag and drop your videos, images, or documents to showcase your skills
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-2xl font-semibold hover:scale-105 transition-transform duration-300">
              Browse Files
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Views', value: '127K', icon: Eye, color: 'cyan' },
            { label: 'Total Likes', value: '8.9K', icon: Heart, color: 'red' },
            { label: 'Uploads', value: '47', icon: Upload, color: 'green' },
            { label: 'Achievements', value: '23', icon: Award, color: 'yellow' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className={`
                w-12 h-12 mx-auto mb-4 rounded-2xl flex items-center justify-center
                ${stat.color === 'cyan' ? 'bg-gradient-to-r from-cyan-500 to-cyan-600' :
                  stat.color === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                  stat.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                  'bg-gradient-to-r from-yellow-500 to-yellow-600'}
              `}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-gray-400" />
            <div className="flex gap-2">
              {filterOptions.map(filter => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`
                    px-4 py-2 rounded-xl capitalize font-medium transition-all duration-300
                    ${selectedFilter === filter
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
                    }
                  `}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Grid/List */}
        <div className={`
          ${viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-6'
          }
        `}>
          {filteredItems.map(item => {
            const TypeIcon = getTypeIcon(item.type);
            
            if (viewMode === 'list') {
              return (
                <div
                  key={item.id}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:scale-[1.02] transition-all duration-500"
                >
                  <div className="flex gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-32 h-24 rounded-2xl overflow-hidden">
                        <img 
                          src={item.thumbnail} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Play className="w-4 h-4 text-white ml-0.5" />
                          </div>
                        </div>
                      )}
                      {item.featured && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-1 rounded-lg">
                          <Star className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <div className={`
                          px-3 py-1 rounded-xl text-xs font-semibold text-white bg-gradient-to-r ${getTypeColor(item.type)}
                        `}>
                          {item.type.toUpperCase()}
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-4 leading-relaxed">{item.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {item.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {item.likes.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.uploadDate.toLocaleDateString()}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-white/10 text-cyan-400 rounded-lg text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-300">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-300">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-300">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-500"
              >
                {item.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                )}
                
                <div className="relative aspect-video">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4">
                    <div className={`
                      p-2 rounded-xl bg-gradient-to-r ${getTypeColor(item.type)} text-white
                    `}>
                      <TypeIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{item.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {item.views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {item.likes.toLocaleString()}
                      </div>
                    </div>
                    <span>{item.uploadDate.toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-lg text-xs border border-cyan-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-gray-400 rounded-lg text-xs">
                        +{item.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                    <button className="p-2 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors duration-300">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};