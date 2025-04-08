'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaHeart,
  FaComment,
  FaShare,
  FaEllipsisH,
  FaHome,
  FaUser,
  FaUsers,
  FaBriefcase,
  FaStore,
  FaEnvelope,
  FaBell,
  FaThumbsUp,
  FaLightbulb,
  FaPaperPlane,
} from 'react-icons/fa';

interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  content: {
    text?: string;
    image?: string;
    video?: string;
    link?: string;
  };
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
}

const samplePosts: Post[] = [
  {
    id: '1',
    author: {
      name: 'Sarah Chen',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      role: 'Product Designer',
    },
    content: {
      text: 'Just wrapped up an amazing brainstorming session using Collabify! The real-time collaboration features are game-changing. 🚀',
      image:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop',
    },
    timestamp: '2h ago',
    likes: 42,
    comments: 8,
    shares: 3,
  },
  {
    id: '2',
    author: {
      name: 'Alex Rivera',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      role: 'Software Engineer',
    },
    content: {
      text: "Check out our team's latest project roadmap. Love how easy it is to visualize our milestones!",
      link: 'https://collabify.app/roadmap/team-alpha',
    },
    timestamp: '4h ago',
    likes: 28,
    comments: 12,
    shares: 5,
  },
];

export default function Feed() {
  const [filter, setFilter] = useState<'connections' | 'public' | 'trending'>(
    'public'
  );
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome, route: '/feed' },
    { id: 'profile', label: 'Profile', icon: FaUser, route: '/profile' },
    {
      id: 'connections',
      label: 'Connections',
      icon: FaUsers,
      route: '/connections',
    },
    { id: 'jobs', label: 'Jobs', icon: FaBriefcase, route: '/jobs' },
    {
      id: 'marketplace',
      label: 'Marketplace',
      icon: FaStore,
      route: '/marketplace',
    },
    { id: 'messages', label: 'Messages', icon: FaEnvelope, route: '/messages' },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: FaBell,
      route: '/notifications',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F0FF]">
      {/* Top Navigation */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-2 md:gap-4 overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.route}
                  className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-md font-medium whitespace-nowrap transition-all ${
                    activeNav === item.id
                      ? 'text-[#3F1D9B] bg-[#F4F0FF]'
                      : 'text-[#6E6E8D] hover:text-[#3F1D9B] hover:bg-[#F4F0FF]/50'
                  }`}
                  onClick={() => setActiveNav(item.id)}>
                  <Icon className="w-5 h-5" />
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-4 md:py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-2 md:p-3 mb-4 md:mb-6 flex gap-2 md:gap-3 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setFilter('connections')}
            className={`px-3 md:px-4 py-2 rounded-md font-medium transition-all whitespace-nowrap ${
              filter === 'connections'
                ? 'bg-[#3F1D9B] text-white'
                : 'text-[#6E6E8D] hover:bg-[#F4F0FF]'
            }`}>
            Connections
          </button>
          <button
            onClick={() => setFilter('public')}
            className={`px-3 md:px-4 py-2 rounded-md font-medium transition-all whitespace-nowrap ${
              filter === 'public'
                ? 'bg-[#3F1D9B] text-white'
                : 'text-[#6E6E8D] hover:bg-[#F4F0FF]'
            }`}>
            Public
          </button>
          <button
            onClick={() => setFilter('trending')}
            className={`px-3 md:px-4 py-2 rounded-md font-medium transition-all whitespace-nowrap ${
              filter === 'trending'
                ? 'bg-[#3F1D9B] text-white'
                : 'text-[#6E6E8D] hover:bg-[#F4F0FF]'
            }`}>
            Trending
          </button>
        </div>

        {/* Create Post */}
        <div className="bg-white rounded-lg shadow-sm p-3 md:p-4 mb-4 md:mb-6">
          <div className="flex gap-3 md:gap-4 items-start">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#3F1D9B]/10 flex items-center justify-center flex-shrink-0">
              <span className="text-[#3F1D9B] font-semibold text-sm md:text-base">JD</span>
            </div>
            <div className="flex-1">
              <textarea
                placeholder="Share your thoughts..."
                className="w-full p-3 md:p-4 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] transition-all resize-none text-sm md:text-base"
                rows={3}
              />
              <div className="flex justify-between items-center mt-3 md:mt-4">
                <div className="flex gap-2 md:gap-4">
                  <button className="text-[#6E6E8D] hover:text-[#3F1D9B] transition-colors p-1 md:p-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button className="text-[#6E6E8D] hover:text-[#3F1D9B] transition-colors p-1 md:p-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button className="text-[#6E6E8D] hover:text-[#3F1D9B] transition-colors p-1 md:p-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </button>
                </div>
                <button className="px-4 md:px-6 py-1.5 md:py-2 bg-[#3F1D9B] text-white rounded-md font-semibold transition-all duration-200 hover:bg-[#2D0E81] hover:scale-105 text-sm md:text-base">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-4">
          {samplePosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-sm p-3 md:p-4 hover:shadow-md transition-all duration-200">
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <div className="flex gap-2 md:gap-3 items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#3F1D9B]/10 flex items-center justify-center overflow-hidden">
                    {post.author.avatar ? (
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-[#3F1D9B] font-semibold">
                        {post.author.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900 hover:text-[#3F1D9B] hover:underline cursor-pointer text-sm md:text-base">
                        {post.author.name}
                      </h3>
                      <span className="text-[#6E6E8D] text-xs md:text-sm">•</span>
                      <button className="text-[#3F1D9B] text-xs md:text-sm font-medium hover:text-[#2D0E81] hover:underline">
                        Follow
                      </button>
                    </div>
                    <div className="flex items-center gap-1 text-xs md:text-sm text-[#6E6E8D]">
                      <p>{post.author.role}</p>
                      <span>•</span>
                      <p>{post.timestamp}</p>
                    </div>
                  </div>
                </div>
                <button className="text-[#6E6E8D] hover:text-[#3F1D9B] transition-colors p-1 md:p-2 hover:bg-[#F4F0FF] rounded-full">
                  <FaEllipsisH className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 md:space-y-4">
                {post.content.text && (
                  <p className="text-gray-800 text-sm md:text-[15px] leading-relaxed">
                    {post.content.text}
                  </p>
                )}
                {post.content.image && (
                  <div className="rounded-lg overflow-hidden border border-[#D6D6E7]">
                    <Image
                      src={post.content.image}
                      alt="Post image"
                      width={800}
                      height={400}
                      className="w-full h-auto hover:brightness-95 transition-all cursor-pointer"
                    />
                  </div>
                )}
                {post.content.link && (
                  <a
                    href={post.content.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 md:p-4 rounded-lg border border-[#D6D6E7] hover:border-[#3F1D9B] hover:bg-[#F4F0FF]/50 transition-all text-sm md:text-base">
                    <span className="text-[#3F1D9B] font-medium hover:underline break-all">
                      {post.content.link}
                    </span>
                  </a>
                )}
              </div>

              <div className="flex items-center justify-between mt-3 md:mt-4 pt-3 md:pt-4 border-t border-[#D6D6E7]">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-white">
                      <FaThumbsUp className="w-2 h-2 md:w-2.5 md:h-2.5 text-white" />
                    </div>
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-red-500 flex items-center justify-center ring-2 ring-white">
                      <FaHeart className="w-2 h-2 md:w-2.5 md:h-2.5 text-white" />
                    </div>
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center ring-2 ring-white">
                      <FaLightbulb className="w-2 h-2 md:w-2.5 md:h-2.5 text-white" />
                    </div>
                  </div>
                  <span className="text-xs md:text-sm text-[#6E6E8D] hover:text-[#3F1D9B] hover:underline cursor-pointer">
                    Gautami Kumari and {post.likes} others
                  </span>
                </div>
                <div className="text-xs md:text-sm text-[#6E6E8D]">
                  <span>{post.comments} comments</span>
                  <span className="mx-1">·</span>
                  <span>{post.shares} reposts</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-2 md:mt-4">
                <button className="flex items-center gap-1 md:gap-2 text-[#6E6E8D] hover:text-[#3F1D9B] transition-all group px-2 md:px-4 py-1.5 md:py-2 rounded-md hover:bg-[#F4F0FF]">
                  <FaThumbsUp className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-medium hidden sm:inline">Like</span>
                </button>
                <button className="flex items-center gap-1 md:gap-2 text-[#6E6E8D] hover:text-[#3F1D9B] transition-all group px-2 md:px-4 py-1.5 md:py-2 rounded-md hover:bg-[#F4F0FF]">
                  <FaComment className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-medium hidden sm:inline">Comment</span>
                </button>
                <button className="flex items-center gap-1 md:gap-2 text-[#6E6E8D] hover:text-[#3F1D9B] transition-all group px-2 md:px-4 py-1.5 md:py-2 rounded-md hover:bg-[#F4F0FF]">
                  <FaShare className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-medium hidden sm:inline">Repost</span>
                </button>
                <button className="flex items-center gap-1 md:gap-2 text-[#6E6E8D] hover:text-[#3F1D9B] transition-all group px-2 md:px-4 py-1.5 md:py-2 rounded-md hover:bg-[#F4F0FF]">
                  <FaPaperPlane className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-medium hidden sm:inline">Send</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
