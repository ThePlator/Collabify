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

interface SidebarProps {
  activeNav: string;
  setActiveNav: (id: string) => void;
}

export default function Sidebar({ activeNav, setActiveNav }: SidebarProps) {
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
    <div className="w-64 fixed left-0 top-0 h-screen bg-white shadow-sm p-4 hidden lg:block">
      <Link href="/" className="flex items-center mb-8">
        <span className="text-2xl font-bold text-[#3F1D9B]">Collabify</span>
      </Link>
      <div className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.route}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                activeNav === item.id
                  ? 'text-[#3F1D9B] bg-[#F4F0FF]'
                  : 'text-[#6E6E8D] hover:text-[#3F1D9B] hover:bg-[#F4F0FF]/50'
              }`}
              onClick={() => setActiveNav(item.id)}>
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
