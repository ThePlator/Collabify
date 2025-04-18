'use client';

import { FaHistory, FaDownload, FaUserPlus } from 'react-icons/fa';

interface UserHeaderProps {
  onActivityLogOpen: () => void;
  onExportUsers: () => void;
  onAddUser: () => void;
}

export default function UserHeader({
  onActivityLogOpen,
  onExportUsers,
  onAddUser,
}: UserHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold text-[#2A175E] mb-2">
          User Management
        </h2>
        <p className="text-[#6E6E8D]">Manage and monitor user accounts</p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={onActivityLogOpen}
          className="px-4 py-2 bg-[#F4F0FF] text-[#3F1D9B] rounded-lg flex items-center gap-2 hover:bg-[#E6E0FF] transition-colors">
          <FaHistory className="w-4 h-4" />
          <span>Activity Logs</span>
        </button>
        <button
          onClick={onExportUsers}
          className="px-4 py-2 bg-[#F4F0FF] text-[#3F1D9B] rounded-lg flex items-center gap-2 hover:bg-[#E6E0FF] transition-colors">
          <FaDownload className="w-4 h-4" />
          <span>Export Users</span>
        </button>
        <button
          onClick={onAddUser}
          className="px-4 py-2 bg-[#3F1D9B] text-white rounded-lg flex items-center gap-2 hover:bg-[#2A175E] transition-colors">
          <FaUserPlus className="w-4 h-4" />
          <span>Add User</span>
        </button>
      </div>
    </div>
  );
}