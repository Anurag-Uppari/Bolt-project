export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  level: number;
  xp: number;
  maxXp: number;
  platforms: Platform[];
  skills: Skill[];
  achievements: Achievement[];
  isStreaming: boolean;
  followers: number;
  following: number;
  bio?: string;
}

export interface Platform {
  name: string;
  username: string;
  icon: string;
  verified: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedAt: Date;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'remote';
  salary: string;
  tags: string[];
  description: string;
  requirements: string[];
  postedAt: Date;
  featured: boolean;
}

export interface Stream {
  id: string;
  title: string;
  game: string;
  viewers: number;
  thumbnail: string;
  streamer: User;
  isLive: boolean;
  category: string;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  type: 'text' | 'image' | 'video' | 'achievement' | 'stream';
  media?: string;
  game?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: Date;
  isLiked?: boolean;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  timestamp: Date;
  likes: number;
}

export type AppSection = 'login' | 'home' | 'dashboard' | 'jobs' | 'streaming' | 'portfolio';
export type UserMode = 'creator' | 'organizer';