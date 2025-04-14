'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FaHome,
  FaUser,
  FaUsers,
  FaBriefcase,
  FaStore,
  FaEnvelope,
  FaBell,
  FaBars,
  FaTimes,
  FaHeadset,
} from 'react-icons/fa';

interface SidebarProps {
  activeNav: string;
  setActiveNav: (id: string) => void;
}

export default function Sidebar({ activeNav, setActiveNav }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      id: 'freelancing',
      label: 'Freelancing',
      icon: FaBriefcase,
      route: '/freelancing',
    },
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
    {
      id: 'support',
      label: 'Customer Support',
      icon: FaHeadset,
      route: '/support',
    },
  ];

  const handleNavClick = (id: string) => {
    setActiveNav(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-white shadow-md text-[#3F1D9B] hover:bg-[#F4F0FF] transition-colors">
        {isMobileMenuOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <FaBars className="w-6 h-6" />
        )}
      </button>

      {/* Sidebar Container */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-sm transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className="h-full p-4 overflow-y-auto">
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
                  onClick={() => handleNavClick(item.id)}>
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
