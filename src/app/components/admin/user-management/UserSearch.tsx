'use client';

import { FaSearch, FaFilter } from 'react-icons/fa';

interface UserSearchProps {
  searchQuery: string;
  selectedRole: string;
  selectedStatus: string;
  selectedDepartment: string;
  selectedLocation: string;
  departments: string[];
  locations: string[];
  onSearchChange: (value: string) => void;
  onRoleChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onDepartmentChange: (value: string) => void;
  onLocationChange: (value: string) => void;
}

export default function UserSearch({
  searchQuery,
  selectedRole,
  selectedStatus,
  selectedDepartment,
  selectedLocation,
  departments,
  locations,
  onSearchChange,
  onRoleChange,
  onStatusChange,
  onDepartmentChange,
  onLocationChange,
}: UserSearchProps) {
  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6E6E8D]" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-12 pr-4 py-2.5 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 text-sm"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <button className="w-full sm:w-auto px-4 py-2.5 bg-[#F4F0FF] text-[#3F1D9B] rounded-lg flex items-center justify-center gap-2 hover:bg-[#E6E0FF] transition-colors text-sm">
          <FaFilter className="w-4 h-4" />
          <span>Filters</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <select
          className="w-full px-4 py-2.5 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 text-sm"
          value={selectedRole}
          onChange={(e) => onRoleChange(e.target.value)}>
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <select
          className="w-full px-4 py-2.5 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 text-sm"
          value={selectedStatus}
          onChange={(e) => onStatusChange(e.target.value)}>
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="suspended">Suspended</option>
        </select>
        <select
          className="w-full px-4 py-2.5 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 text-sm"
          value={selectedDepartment}
          onChange={(e) => onDepartmentChange(e.target.value)}>
          <option value="">All Departments</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
        <select
          className="w-full px-4 py-2.5 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 text-sm"
          value={selectedLocation}
          onChange={(e) => onLocationChange(e.target.value)}>
          <option value="">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}