'use client';

import { useState } from 'react';
import {
  FaSearch,
  FaEllipsisH,
  FaPaperPlane,
  FaSmile,
  FaPaperclip,
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: {
    id: string;
    name: string;
    avatar: string;
    online: boolean;
  };
  isOwn: boolean;
}

interface Chat {
  id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
    online: boolean;
    lastSeen?: string;
  };
  lastMessage: {
    content: string;
    timestamp: string;
  };
  unread: number;
}

const sampleChats: Chat[] = [
  {
    id: '1',
    user: {
      id: 'u1',
      name: 'Emma Thompson',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      online: true,
    },
    lastMessage: {
      content: 'That sounds great! Looking forward to our collaboration.',
      timestamp: '2m ago',
    },
    unread: 2,
  },
  {
    id: '2',
    user: {
      id: 'u2',
      name: 'Michael Chen',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      online: false,
      lastSeen: '1h ago',
    },
    lastMessage: {
      content: 'Could you share the project timeline?',
      timestamp: '1h ago',
    },
    unread: 0,
  },
];

const sampleMessages: Message[] = [
  {
    id: 'm1',
    content: 'Hi Emma! How are you doing?',
    timestamp: '10:30 AM',
    sender: {
      id: 'self',
      name: 'You',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      online: true,
    },
    isOwn: true,
  },
  {
    id: 'm2',
    content:
      "Hey! I'm doing great, thanks for asking. I've been working on the new design concepts we discussed.",
    timestamp: '10:32 AM',
    sender: {
      id: 'u1',
      name: 'Emma Thompson',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      online: true,
    },
    isOwn: false,
  },
];

export default function Messages() {
  const [activeNav, setActiveNav] = useState('messages');
  const [selectedChat, setSelectedChat] = useState<string>('1');
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState(sampleMessages);
  const [chats, setChats] = useState(sampleChats);
  const [searchQuery, setSearchQuery] = useState('');

  const activeChat = chats.find((chat) => chat.id === selectedChat);

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const newMessage: Message = {
      id: `m${messages.length + 1}`,
      content: messageInput,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      sender: {
        id: 'self',
        name: 'You',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
        online: true,
      },
      isOwn: true,
    };

    setMessages([...messages, newMessage]);
    setMessageInput('');

    // Update last message in chat list
    setChats(
      chats.map((chat) =>
        chat.id === selectedChat
          ? {
              ...chat,
              lastMessage: {
                content: messageInput,
                timestamp: 'Just now',
              },
            }
          : chat
      )
    );
  };

  const handleChatSelect = (chatId: string) => {
    setSelectedChat(chatId);
    // Mark messages as read
    setChats(
      chats.map((chat) => (chat.id === chatId ? { ...chat, unread: 0 } : chat))
    );
  };

  const filteredChats = chats.filter(
    (chat) =>
      chat.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F4F0FF] flex">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      <div className="flex-1 lg:ml-64 flex flex-col md:flex-row">
        {/* Chat List Sidebar */}
        <div
          className={`${
            selectedChat && 'hidden md:flex'
          } w-full md:w-80 bg-white border-r border-[#D6D6E7] flex flex-col`}>
          <div className="p-4 border-b border-[#D6D6E7]">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6E6E8D]" />
              <input
                type="text"
                placeholder="Search messages"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] text-gray-800 placeholder-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredChats.map((chat) => (
              <button
                key={chat.id}
                className={`w-full p-4 flex items-start gap-3 hover:bg-[#F4F0FF] transition-colors ${
                  selectedChat === chat.id ? 'bg-[#F4F0FF]' : ''
                }`}
                onClick={() => handleChatSelect(chat.id)}>
                <div className="relative">
                  <img
                    src={chat.user.avatar}
                    alt={chat.user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                      chat.user.online ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                  />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-gray-900">
                      {chat.user.name}
                    </h3>
                    <span className="text-xs text-[#6E6E8D]">
                      {chat.lastMessage.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-[#6E6E8D] line-clamp-1">
                    {chat.lastMessage.content}
                  </p>
                  {chat.unread > 0 && (
                    <span className="inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 mt-1 text-xs font-medium bg-[#3F1D9B] text-white rounded-full">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-white">
          {activeChat ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-[#D6D6E7] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    className="md:hidden mr-2 text-[#6E6E8D] hover:text-[#3F1D9B]"
                    onClick={() => setSelectedChat('')}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <div className="relative">
                    <img
                      src={activeChat.user.avatar}
                      alt={activeChat.user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div
                      className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${
                        activeChat.user.online ? 'bg-green-500' : 'bg-gray-400'
                      }`}
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-900">
                      {activeChat.user.name}
                    </h2>
                    <p className="text-sm text-[#6E6E8D]">
                      {activeChat.user.online
                        ? 'Online'
                        : `Last seen ${activeChat.user.lastSeen}`}
                    </p>
                  </div>
                </div>
                <button className="p-2 text-[#6E6E8D] hover:text-[#3F1D9B] rounded-full hover:bg-[#F4F0FF] transition-colors">
                  <FaEllipsisH className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-end gap-2 ${
                      message.isOwn ? 'flex-row-reverse' : ''
                    }`}>
                    <img
                      src={message.sender.avatar}
                      alt={message.sender.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        message.isOwn
                          ? 'bg-[#3F1D9B] text-white rounded-br-none'
                          : 'bg-[#F4F0FF] text-gray-800 rounded-bl-none'
                      }`}>
                      <p>{message.content}</p>
                      <span
                        className={`text-xs mt-1 block ${
                          message.isOwn ? 'text-white/80' : 'text-[#6E6E8D]'
                        }`}>
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-[#D6D6E7]">
                <div className="flex items-center gap-2">
                  <button className="p-2 text-[#6E6E8D] hover:text-[#3F1D9B] rounded-full hover:bg-[#F4F0FF] transition-colors">
                    <FaSmile className="w-6 h-6" />
                  </button>
                  <button className="p-2 text-[#6E6E8D] hover:text-[#3F1D9B] rounded-full hover:bg-[#F4F0FF] transition-colors">
                    <FaPaperclip className="w-6 h-6" />
                  </button>
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] text-gray-800 placeholder-gray-500"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage();
                      }
                    }}
                  />
                  <button
                    className="p-2 text-white bg-[#3F1D9B] rounded-full hover:bg-[#331580] transition-colors"
                    onClick={handleSendMessage}>
                    <FaPaperPlane className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-[#6E6E8D]">Select a chat to start messaging</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
