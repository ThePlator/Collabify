'use client';

import { useMemo } from 'react';
import { FaUsers, FaUserCheck, FaUserTimes, FaUserPlus } from 'react-icons/fa';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'suspended';
  joinDate: string;
}

interface StatisticCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  trend?: { value: number; isPositive: boolean };
  color: string;
}

const StatisticCard = ({ title, value, icon, trend, color }: StatisticCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-lg bg-opacity-10 ${color}`}>{icon}</div>
      {trend && (
        <span
          className={`text-sm font-medium ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
        </span>
      )}
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
    <p className="text-2xl font-bold text-[#3F1D9B]">{value}</p>
  </div>
);

interface UserStatisticsProps {
  users: User[];
}

export default function UserStatistics({ users }: UserStatisticsProps) {
  const statistics = useMemo(() => {
    const totalUsers = users.length;
    const activeUsers = users.filter((user) => user.status === 'active').length;
    const suspendedUsers = users.filter((user) => user.status === 'suspended').length;
    
    // Calculate recent registrations (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentRegistrations = users.filter(
      (user) => new Date(user.joinDate) >= thirtyDaysAgo
    ).length;

    return {
      totalUsers,
      activeUsers,
      suspendedUsers,
      recentRegistrations,
    };
  }, [users]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatisticCard
        title="Total Users"
        value={statistics.totalUsers}
        icon={<FaUsers className="w-6 h-6 text-blue-500" />}
        color="bg-blue-50"
      />
      <StatisticCard
        title="Active Users"
        value={statistics.activeUsers}
        icon={<FaUserCheck className="w-6 h-6 text-green-500" />}
        trend={{ value: 12, isPositive: true }}
        color="bg-green-50"
      />
      <StatisticCard
        title="Suspended Users"
        value={statistics.suspendedUsers}
        icon={<FaUserTimes className="w-6 h-6 text-red-500" />}
        color="bg-red-50"
      />
      <StatisticCard
        title="Recent Registrations"
        value={statistics.recentRegistrations}
        icon={<FaUserPlus className="w-6 h-6 text-purple-500" />}
        trend={{ value: 8, isPositive: true }}
        color="bg-purple-50"
      />
    </div>
  );
}