'use client';

import {
  FaUsers,
  FaBriefcase,
  FaStore,
  FaChartLine,
  FaTimes,
  FaBars,
} from 'react-icons/fa';
import { useState } from 'react';

interface AdminSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function AdminSidebar({
  activeSection,
  setActiveSection,
}: AdminSidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'users', label: 'User Management', icon: FaUsers },
    { id: 'jobs', label: 'Job Approvals', icon: FaBriefcase },
    { id: 'products', label: 'Product Approvals', icon: FaStore },
    { id: 'transactions', label: 'Transactions', icon: FaChartLine },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
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
          <div className="flex items-center mb-8">
            <span className="text-2xl font-bold text-[#3F1D9B]">
              Admin Panel
            </span>
          </div>
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all w-full ${
                    activeSection === item.id
                      ? 'text-[#3F1D9B] bg-[#F4F0FF]'
                      : 'text-[#6E6E8D] hover:text-[#3F1D9B] hover:bg-[#F4F0FF]/50'
                  }`}>
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
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
