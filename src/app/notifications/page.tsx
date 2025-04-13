'use client';

import { useState } from 'react';
import {
  FaBell,
  FaUser,
  FaHeart,
  FaComment,
  FaUserPlus,
  FaEllipsisH,
  FaCheck,
  FaTimes,
  FaFilter,
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import Image from 'next/image';

interface Notification {
  id: string;
  type: 'mention' | 'like' | 'comment' | 'connection';
  content: string;
  timestamp: string;
  isRead: boolean;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  actionTaken?: boolean;
}

const sampleNotifications: Notification[] = [
  {
    id: '1',
    type: 'mention',
    content: 'mentioned you in a comment',
    timestamp: '2m ago',
    isRead: false,
    user: {
      id: 'u1',
      name: 'Emma Thompson',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
  },
  {
    id: '2',
    type: 'like',
    content: 'liked your post about project collaboration',
    timestamp: '1h ago',
    isRead: false,
    user: {
      id: 'u2',
      name: 'Michael Chen',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
  },
  {
    id: '3',
    type: 'connection',
    content: 'sent you a connection request',
    timestamp: '2h ago',
    isRead: false,
    user: {
      id: 'u3',
      name: 'Sarah Williams',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
    actionTaken: false,
  },
  {
    id: '4',
    type: 'comment',
    content: 'commented on your project update',
    timestamp: '3h ago',
    isRead: true,
    user: {
      id: 'u4',
      name: 'David Kim',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    },
  },
];

export default function Notifications() {
  const [activeNav, setActiveNav] = useState('notifications');
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  const [notifications, setNotifications] = useState(sampleNotifications);

  const handleMarkAsRead = (notificationId: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === notificationId
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, isRead: true }))
    );
  };

  const handleConnectionAction = (notificationId: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === notificationId
          ? { ...notification, actionTaken: true, isRead: true }
          : notification
      )
    );
  };

  const filteredNotifications = notifications.filter(
    (notification) => filter === 'all' || !notification.isRead
  );

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'mention':
        return <FaUser className="w-4 h-4" />;
      case 'like':
        return <FaHeart className="w-4 h-4" />;
      case 'comment':
        return <FaComment className="w-4 h-4" />;
      case 'connection':
        return <FaUserPlus className="w-4 h-4" />;
      default:
        return <FaBell className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F0FF] flex">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      <div className="flex-1 lg:ml-64 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#2A175E] mb-2">
                Notifications
              </h1>
              <p className="text-[#6E6E8D]">
                Stay updated with your network activity
              </p>
            </div>
            <button
              onClick={handleMarkAllAsRead}
              className="px-4 py-2 text-[#3F1D9B] hover:bg-[#3F1D9B]/10 rounded-lg transition-colors text-sm font-medium">
              Mark all as read
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-3 mb-6 flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  filter === 'all'
                    ? 'bg-[#3F1D9B] text-white'
                    : 'text-[#6E6E8D] hover:bg-[#F4F0FF]'
                }`}>
                All
              </button>
              <button
                onClick={() => setFilter('unread')}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  filter === 'unread'
                    ? 'bg-[#3F1D9B] text-white'
                    : 'text-[#6E6E8D] hover:bg-[#F4F0FF]'
                }`}>
                Unread
              </button>
            </div>
            <button className="p-2 text-[#6E6E8D] hover:text-[#3F1D9B] rounded-full hover:bg-[#F4F0FF] transition-colors">
              <FaFilter className="w-5 h-5" />
            </button>
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`bg-white rounded-lg shadow-sm p-4 transition-all ${
                  !notification.isRead ? 'border-l-4 border-[#3F1D9B]' : ''
                }`}>
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <Image
                      src={notification.user.avatar}
                      alt={notification.user.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div
                      className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center ${
                        notification.type === 'like'
                          ? 'text-red-500'
                          : 'text-[#3F1D9B]'
                      }`}>
                      {getNotificationIcon(notification.type)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-gray-900">
                          <span className="font-semibold">
                            {notification.user.name}
                          </span>{' '}
                          {notification.content}
                        </p>
                        <span className="text-sm text-[#6E6E8D]">
                          {notification.timestamp}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {notification.type === 'connection' &&
                          !notification.actionTaken && (
                            <>
                              <button
                                onClick={() =>
                                  handleConnectionAction(notification.id)
                                }
                                className="p-2 text-green-500 hover:bg-green-50 rounded-full transition-colors">
                                <FaCheck className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() =>
                                  handleConnectionAction(notification.id)
                                }
                                className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors">
                                <FaTimes className="w-5 h-5" />
                              </button>
                            </>
                          )}
                        {!notification.isRead && (
                          <button
                            onClick={() => handleMarkAsRead(notification.id)}
                            className="p-2 text-[#6E6E8D] hover:text-[#3F1D9B] hover:bg-[#F4F0FF] rounded-full transition-colors">
                            <FaEllipsisH className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
