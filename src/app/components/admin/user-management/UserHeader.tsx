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
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#2A175E] mb-2">
          User Management
        </h2>
        <p className="text-sm text-[#6E6E8D]">Manage and monitor user accounts</p>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-4 w-full sm:w-auto">
        <button
          onClick={onActivityLogOpen}
          className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-[#F4F0FF] text-[#3F1D9B] rounded-lg flex items-center justify-center gap-2 hover:bg-[#E6E0FF] transition-colors text-sm">
          <FaHistory className="w-4 h-4" />
          <span className="hidden sm:inline">Activity Logs</span>
        </button>
        <button
          onClick={onExportUsers}
          className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-[#F4F0FF] text-[#3F1D9B] rounded-lg flex items-center justify-center gap-2 hover:bg-[#E6E0FF] transition-colors text-sm">
          <FaDownload className="w-4 h-4" />
          <span className="hidden sm:inline">Export Users</span>
        </button>
        <button
          onClick={onAddUser}
          className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-[#3F1D9B] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-[#2A175E] transition-colors text-sm">
          <FaUserPlus className="w-4 h-4" />
          <span>Add User</span>
        </button>
      </div>
    </div>
  );
}