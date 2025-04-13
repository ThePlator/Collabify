'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaHeart,
  FaComment,
  FaShare,
  FaEllipsisH,
  FaThumbsUp,
  FaLightbulb,
  FaPaperPlane,
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

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

  return (
    <>
      <div className="min-h-screen bg-[#F4F0FF] flex">
        <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

        {/* Main Content */}
        <div className="flex-1 lg:ml-64 lg:mr-80">
          <div className="max-w-3xl mx-auto px-4 py-6">
            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm p-2 md:p-3 mb-6 flex gap-2 md:gap-3 overflow-x-auto no-scrollbar sticky top-4 z-10">
              <button
                onClick={() => setFilter('connections')}
                className={`px-4 py-2 rounded-md font-medium transition-all whitespace-nowrap ${
                  filter === 'connections'
                    ? 'bg-[#3F1D9B] text-white'
                    : 'text-[#6E6E8D] hover:bg-[#F4F0FF]'
                }`}>
                Connections
              </button>
              <button
                onClick={() => setFilter('public')}
                className={`px-4 py-2 rounded-md font-medium transition-all whitespace-nowrap ${
                  filter === 'public'
                    ? 'bg-[#3F1D9B] text-white'
                    : 'text-[#6E6E8D] hover:bg-[#F4F0FF]'
                }`}>
                Public
              </button>
              <button
                onClick={() => setFilter('trending')}
                className={`px-4 py-2 rounded-md font-medium transition-all whitespace-nowrap ${
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
                  <span className="text-[#3F1D9B] font-semibold text-sm md:text-base">
                    JD
                  </span>
                </div>
                <div className="flex-1">
                  <textarea
                    placeholder="Share your thoughts..."
                    className="w-full p-3 md:p-4 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] transition-all resize-none text-sm md:text-base text-gray-800 placeholder-gray-500"
                    rows={3}
                  />
                  <div className="flex justify-between items-center mt-3 md:mt-4">
                    <div className="flex gap-2 md:gap-4">
                      <button className="text-[#6E6E8D] hover:text-[#3F1D9B] transition-colors">
                        <FaLightbulb className="w-5 h-5 md:w-6 md:h-6" />
                      </button>
                      <button className="text-[#6E6E8D] hover:text-[#3F1D9B] transition-colors">
                        <FaThumbsUp className="w-5 h-5 md:w-6 md:h-6" />
                      </button>
                      <button className="text-[#6E6E8D] hover:text-[#3F1D9B] transition-colors">
                        <FaPaperPlane className="w-5 h-5 md:w-6 md:h-6" />
                      </button>
                    </div>
                    <button className="px-6 py-2 bg-[#3F1D9B] text-white rounded-lg hover:bg-[#331580] transition-colors text-sm md:text-base">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-4 md:space-y-6">
              {samplePosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {post.author.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <FaEllipsisH />
                    </button>
                  </div>

                  <p className="text-gray-600 mb-4">{post.content.text}</p>

                  {post.content.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img
                        src={post.content.image}
                        alt="Post content"
                        className="w-full h-auto"
                      />
                    </div>
                  )}

                  {post.content.link && (
                    <a
                      href={post.content.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mb-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-[#3F1D9B] font-medium">
                        {post.content.link}
                      </span>
                    </a>
                  )}

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 hover:text-[#3F1D9B]">
                        <FaHeart />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-[#3F1D9B]">
                        <FaComment />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-[#3F1D9B]">
                        <FaShare />
                        <span>{post.shares}</span>
                      </button>
                    </div>
                    <span>{post.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 fixed right-0 top-0 h-screen bg-white shadow-sm p-3 hidden lg:block overflow-y-auto">
          {/* Trending Topics */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#3F1D9B] mb-3">
              Trending Topics
            </h3>
            <div className="space-y-2">
              {[
                '#Innovation',
                '#TechTrends',
                '#RemoteWork',
                '#Productivity',
                '#AI',
              ].map((topic) => (
                <div
                  key={topic}
                  className="flex items-center justify-between hover:bg-[#F4F0FF] p-2 rounded-lg transition-colors cursor-pointer">
                  <span className="text-sm text-[#6E6E8D] font-medium">
                    {topic}
                  </span>
                  <span className="text-xs text-[#6E6E8D]">2.5k posts</span>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Connections */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#3F1D9B] mb-3">
              Suggested Connections
            </h3>
            <div className="space-y-2">
              {[
                {
                  name: 'Emily Wang',
                  role: 'UX Designer',
                  avatar:
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
                },
                {
                  name: 'Michael Kim',
                  role: 'Product Manager',
                  avatar:
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
                },
                {
                  name: 'Sofia Patel',
                  role: 'Frontend Developer',
                  avatar:
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
                },
              ].map((connection) => (
                <div
                  key={connection.name}
                  className="flex items-center gap-2 hover:bg-[#F4F0FF] p-2 rounded-lg transition-colors cursor-pointer">
                  <img
                    src={connection.avatar}
                    alt={connection.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-gray-900 truncate">
                      {connection.name}
                    </h4>
                    <p className="text-xs text-[#6E6E8D] truncate">
                      {connection.role}
                    </p>
                  </div>
                  <button className="px-2 py-1 text-xs text-[#3F1D9B] font-medium border border-[#3F1D9B] rounded-full hover:bg-[#3F1D9B] hover:text-white transition-colors flex-shrink-0">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Advertisement */}
          <div className="rounded-lg overflow-hidden shadow-sm border border-[#D6D6E7]">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
              alt="Advertisement"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h4 className="font-semibold text-sm text-gray-900 mb-1">
                Boost Your Productivity
              </h4>
              <p className="text-xs text-[#6E6E8D] mb-2">
                Discover our premium tools for enhanced collaboration.
              </p>
              <button className="w-full px-3 py-1.5 bg-[#3F1D9B] text-white rounded-lg hover:bg-[#331580] transition-colors text-xs font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
