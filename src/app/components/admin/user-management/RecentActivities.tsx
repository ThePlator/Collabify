'use client';

import { FaUserPlus, FaUserEdit, FaUserMinus, FaUserCog } from 'react-icons/fa';

interface ActivityLog {
  id: string;
  userId: string;
  action: string;
  timestamp: string;
  details: string;
}

interface RecentActivitiesProps {
  activityLogs: ActivityLog[];
}

const getActivityIcon = (action: string) => {
  switch (action.toLowerCase()) {
    case 'user created':
      return <FaUserPlus className="w-5 h-5 text-green-500" />;
    case 'user updated':
      return <FaUserEdit className="w-5 h-5 text-blue-500" />;
    case 'user deleted':
      return <FaUserMinus className="w-5 h-5 text-red-500" />;
    default:
      return <FaUserCog className="w-5 h-5 text-purple-500" />;
  }
};

const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800)
    return `${Math.floor(diffInSeconds / 86400)} days ago`;

  return date.toLocaleDateString();
};

export default function RecentActivities({
  activityLogs,
}: RecentActivitiesProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-[#2A175E] mb-4">
        Recent Activities
      </h2>
      <div className="space-y-4">
        {activityLogs.map((log) => (
          <div
            key={log.id}
            className="flex items-start gap-4 p-4 bg-[#F4F0FF] rounded-lg hover:bg-[#E9E3FF] transition-colors">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              {getActivityIcon(log.action)}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-[#2A175E]">{log.action}</h4>
                <span className="text-sm text-[#6E6E8D]">
                  {formatTimestamp(log.timestamp)}
                </span>
              </div>
              <p className="text-[#6E6E8D] text-sm">{log.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
