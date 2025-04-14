'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaRobot, FaPhone, FaComment, FaTicketAlt, FaPaperPlane } from 'react-icons/fa';

export default function SupportPage() {
  const [activeNav, setActiveNav] = useState('support');
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { type: 'bot', message: 'Hello! How can I help you today?' },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    // Add user message
    setChatHistory([...chatHistory, { type: 'user', message: chatMessage }]);
    
    // Simulate bot response
    setTimeout(() => {
      setChatHistory(prev => [...prev, {
        type: 'bot',
        message: 'Thanks for your message. Let me help you with that or connect you with our support team.'
      }]);
    }, 1000);

    setChatMessage('');
  };

  return (
    <div className="min-h-screen bg-[#F4F0FF] flex">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      <div className="flex-1 lg:ml-64 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#2A175E] mb-2">
              Customer Support
            </h1>
            <p className="text-[#6E6E8D]">
              Get help from our support team or chat with our AI assistant
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chatbot Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-4 h-[600px] flex flex-col">
                <div className="flex items-center gap-3 p-3 border-b">
                  <FaRobot className="text-[#3F1D9B] w-6 h-6" />
                  <div>
                    <h2 className="font-semibold text-[#2A175E]">AI Assistant</h2>
                    <p className="text-sm text-[#6E6E8D]">Always here to help</p>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chatHistory.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          msg.type === 'user'
                            ? 'bg-[#3F1D9B] text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                        {msg.message}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <form onSubmit={handleSendMessage} className="mt-4 flex gap-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#3F1D9B] text-white rounded-lg hover:bg-[#2D0E81] transition-colors">
                    <FaPaperPlane />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Options */}
            <div className="space-y-6">
              {/* Call Support */}
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#F4F0FF] rounded-full flex items-center justify-center">
                    <FaPhone className="text-[#3F1D9B] w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[#2A175E]">Call Support</h2>
                    <p className="text-sm text-[#6E6E8D]">Talk to our team</p>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-[#3F1D9B] to-[#6747C7] text-white rounded-lg hover:opacity-90 transition-all">
                  Call Now
                </button>
              </div>

              {/* Live Chat */}
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#F4F0FF] rounded-full flex items-center justify-center">
                    <FaComment className="text-[#3F1D9B] w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[#2A175E]">Live Chat</h2>
                    <p className="text-sm text-[#6E6E8D]">Chat with an agent</p>
                  </div>
                </div>
                <button className="w-full px-4 py-2 border-2 border-[#3F1D9B] text-[#3F1D9B] rounded-lg hover:bg-[#3F1D9B] hover:text-white transition-all">
                  Start Chat
                </button>
              </div>

              {/* Support Ticket */}
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#F4F0FF] rounded-full flex items-center justify-center">
                    <FaTicketAlt className="text-[#3F1D9B] w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[#2A175E]">Create Ticket</h2>
                    <p className="text-sm text-[#6E6E8D]">Submit a support ticket</p>
                  </div>
                </div>
                <button className="w-full px-4 py-2 border-2 border-[#3F1D9B] text-[#3F1D9B] rounded-lg hover:bg-[#3F1D9B] hover:text-white transition-all">
                  Create Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}