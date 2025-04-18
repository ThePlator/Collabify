'use client';

import { useState } from 'react';
import {
  FaChartLine,
  FaUsers,
  FaBriefcase,
  FaStar,
  FaCalendarAlt,
} from 'react-icons/fa';

interface ActivityMetric {
  label: string;
  value: string;
  icon: React.ReactNode;
  change: string;
  trend: 'up' | 'down' | 'neutral';
}

interface RecentActivity {
  id: string;
  type: 'connection' | 'job' | 'review' | 'project';
  title: string;
  timestamp: string;
  description: string;
}

export default function Dashboard() {
  const [metrics] = useState<ActivityMetric[]>([
    {
      label: 'Profile Views',
      value: '2,847',
      icon: <FaChartLine className="w-5 h-5 text-blue-500" />,
      change: '+12%',
      trend: 'up',
    },
    {
      label: 'Connections',
      value: '486',
      icon: <FaUsers className="w-5 h-5 text-green-500" />,
      change: '+8%',
      trend: 'up',
    },
    {
      label: 'Job Applications',
      value: '24',
      icon: <FaBriefcase className="w-5 h-5 text-purple-500" />,
      change: '-3%',
      trend: 'down',
    },
    {
      label: 'Average Rating',
      value: '4.8',
      icon: <FaStar className="w-5 h-5 text-yellow-500" />,
      change: '+0.2',
      trend: 'up',
    },
  ]);

  const [recentActivity] = useState<RecentActivity[]>([
    {
      id: '1',
      type: 'connection',
      title: 'New Connection',
      timestamp: '2 hours ago',
      description: 'Connected with Sarah Miller from TechVision Solutions',
    },
    {
      id: '2',
      type: 'job',
      title: 'Job Application',
      timestamp: '1 day ago',
      description:
        'Applied for Senior Product Designer position at InnovateTech',
    },
    {
      id: '3',
      type: 'review',
      title: 'New Review',
      timestamp: '3 days ago',
      description: 'Received a 5-star review for project completion',
    },
  ]);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#2A175E] mb-2">Dashboard</h2>
        <p className="text-[#6E6E8D]">Track your activity and engagement</p>
      </div>

      {/* Activity Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-[#F4F0FF] rounded-lg p-4 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-white rounded-lg">{metric.icon}</div>
              <span
                className={`text-sm font-medium ${
                  metric.trend === 'up'
                    ? 'text-green-500'
                    : metric.trend === 'down'
                    ? 'text-red-500'
                    : 'text-gray-500'
                }`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-[#2A175E] font-medium mb-1">{metric.label}</h3>
            <p className="text-2xl font-bold text-[#3F1D9B]">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-xl font-bold text-[#2A175E] mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-4 bg-[#F4F0FF] rounded-lg">
              <div className="p-2 bg-white rounded-lg">
                <FaCalendarAlt className="w-5 h-5 text-[#3F1D9B]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-[#2A175E]">
                    {activity.title}
                  </h4>
                  <span className="text-sm text-[#6E6E8D]">
                    {activity.timestamp}
                  </span>
                </div>
                <p className="text-[#6E6E8D]">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
