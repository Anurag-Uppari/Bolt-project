import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Star,
  Filter,
  Search,
  Briefcase,
  Building,
  Calendar,
  TrendingUp
} from 'lucide-react';
import { Job } from '../types';

export const JobHub: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const mockJobs: Job[] = [
    {
      id: '1',
      title: 'Senior Game Developer',
      company: 'Epic Games',
      location: 'Remote / Cary, NC',
      type: 'full-time',
      salary: '$120K - $180K',
      tags: ['Unreal Engine', 'C++', 'Blueprint', 'Multiplayer'],
      description: 'Join our team building the next generation of gaming experiences.',
      requirements: ['5+ years game development', 'Unreal Engine expertise', 'C++ proficiency'],
      postedAt: new Date('2024-01-15'),
      featured: true
    },
    {
      id: '2',
      title: 'Esports Tournament Organizer',
      company: 'Riot Games',
      location: 'Los Angeles, CA',
      type: 'full-time',
      salary: '$80K - $120K',
      tags: ['Event Management', 'Esports', 'Production', 'Community'],
      description: 'Organize and manage world-class esports tournaments.',
      requirements: ['Event management experience', 'Esports knowledge', 'Project management'],
      postedAt: new Date('2024-01-14'),
      featured: true
    },
    {
      id: '3',
      title: 'Content Creator Specialist',
      company: 'Twitch',
      location: 'Remote',
      type: 'contract',
      salary: '$60K - $90K',
      tags: ['Content Strategy', 'Community Management', 'Analytics', 'Creative'],
      description: 'Help creators grow their communities and optimize their content.',
      requirements: ['Content creation experience', 'Social media expertise', 'Analytics skills'],
      postedAt: new Date('2024-01-13'),
      featured: false
    },
    {
      id: '4',
      title: 'UI/UX Designer - Gaming',
      company: 'Blizzard Entertainment',
      location: 'Irvine, CA',
      type: 'full-time',
      salary: '$100K - $140K',
      tags: ['UI Design', 'UX Research', 'Game UI', 'Figma', 'User Testing'],
      description: 'Design intuitive and engaging user interfaces for our games.',
      requirements: ['3+ years UI/UX design', 'Gaming industry experience', 'Portfolio required'],
      postedAt: new Date('2024-01-12'),
      featured: false
    }
  ];

  const jobTypes = ['all', 'full-time', 'part-time', 'contract', 'remote'];

  const filteredJobs = mockJobs.filter(job => {
    const matchesFilter = selectedFilter === 'all' || job.type === selectedFilter;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Gaming Industry Jobs
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover your next opportunity in the gaming industry
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs, companies, skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-gray-400" />
              <div className="flex gap-2">
                {jobTypes.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedFilter(type)}
                    className={`
                      px-4 py-2 rounded-xl capitalize font-medium transition-all duration-300
                      ${selectedFilter === type
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                        : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
                      }
                    `}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Active Jobs', value: '1,247', icon: Briefcase, color: 'cyan' },
            { label: 'Companies', value: '350+', icon: Building, color: 'purple' },
            { label: 'This Week', value: '89', icon: Calendar, color: 'pink' },
            { label: 'Success Rate', value: '94%', icon: TrendingUp, color: 'green' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className={`
                w-12 h-12 mx-auto mb-4 rounded-2xl flex items-center justify-center
                ${stat.color === 'cyan' ? 'bg-gradient-to-r from-cyan-500 to-cyan-600' :
                  stat.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                  stat.color === 'pink' ? 'bg-gradient-to-r from-pink-500 to-pink-600' :
                  'bg-gradient-to-r from-green-500 to-green-600'}
              `}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="grid gap-6">
          {filteredJobs.map(job => (
            <div
              key={job.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:scale-[1.02] transition-all duration-500"
            >
              {job.featured && (
                <div className="absolute -top-3 left-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 rounded-xl text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Featured
                </div>
              )}

              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Job Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-400 mb-3">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{job.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span className="capitalize">{job.type}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-green-400 font-semibold text-lg mb-2">
                        <DollarSign className="w-5 h-5" />
                        {job.salary}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {Math.floor((Date.now() - job.postedAt.getTime()) / (1000 * 60 * 60 * 24))} days ago
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-xl text-sm font-medium border border-cyan-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 lg:w-48">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                    <Users className="w-5 h-5" />
                    Apply Now
                  </button>
                  <button className="w-full px-6 py-3 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/5 transition-colors duration-300">
                    Save Job
                  </button>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-white/5 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/10 transition-colors duration-300">
            Load More Jobs
          </button>
        </div>
      </div>
    </div>
  );
};