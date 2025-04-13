'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaLink, FaEllipsisH } from 'react-icons/fa';
import Image from 'next/image';

export default function ConnectionsPage() {
  const [activeNav, setActiveNav] = useState('connections');

  const connections = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Product Designer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      status: 'Active',
      type: 'Direct',
      mutualConnections: 12,
      lastActive: '2 hours ago'
    },
    {
      id: 2,
      name: 'Alex Rivera',
      role: 'Software Engineer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      status: 'Inactive',
      type: 'Proxy',
      mutualConnections: 8,
      lastActive: '3 days ago'
    },
    {
      id: 3,
      name: 'Emily Wang',
      role: 'UX Designer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      status: 'Active',
      type: 'Direct',
      mutualConnections: 15,
      lastActive: '5 mins ago'
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F0FF] flex">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#3F1D9B] to-[#6747C7] tracking-tight">
            Connections
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {connections.map((connection) => (
              <div
                key={connection.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl p-6 transition-all duration-300 hover:scale-[1.02] border border-gray-100/50 backdrop-blur-sm relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3F1D9B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Header */}
                <div className="flex items-start justify-between mb-6 relative">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Image
                        src={connection.avatar}
                        alt={connection.name}
                        width={56}
                        height={56}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-md"
                      />
                      <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${connection.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`} />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 group-hover:text-[#3F1D9B] transition-colors duration-200">
                        {connection.name}
                      </h2>
                      <p className="text-sm text-gray-500">{connection.role}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-[#3F1D9B] transition-colors">
                    <FaEllipsisH />
                  </button>
                </div>

                {/* Connection Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaLink className="text-[#3F1D9B]" />
                    <span>{connection.type} Connection</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{connection.mutualConnections} mutual connections</span>
                    <span className="text-gray-400">{connection.lastActive}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-[#3F1D9B] to-[#6747C7] text-white rounded-xl hover:opacity-90 transition-all duration-200 text-sm font-medium shadow-md shadow-indigo-500/20 hover:shadow-lg">
                    Message
                  </button>
                  <button className="flex-1 px-4 py-2.5 border-2 border-[#3F1D9B] text-[#3F1D9B] rounded-xl hover:bg-[#3F1D9B] hover:text-white transition-all duration-200 text-sm font-medium">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
