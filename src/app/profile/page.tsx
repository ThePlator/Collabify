'use client';

import Link from 'next/link';
import {
  FaHome,
  FaUser,
  FaUsers,
  FaBriefcase,
  FaStore,
  FaEnvelope,
  FaBell,
} from 'react-icons/fa';
import Profile from '../components/profile/Profile';

export default function ProfilePage() {
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
    <div className="min-h-screen w-full bg-gradient-to-br from-[#F4F0FF] to-[#FDFDFF] flex flex-col">
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
                    item.id === 'profile'
                      ? 'text-[#3F1D9B] bg-[#F4F0FF]'
                      : 'text-[#6E6E8D] hover:text-[#3F1D9B] hover:bg-[#F4F0FF]/50'
                  }`}>
                  <Icon className="w-5 h-5" />
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Profile Component */}
      <Profile />
    </div>
  );
}
