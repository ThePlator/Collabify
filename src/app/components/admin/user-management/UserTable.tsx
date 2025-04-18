'use client';

import { FaEdit, FaTrash, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'suspended';
  joinDate: string;
  lastLogin?: string;
  department?: string;
  location?: string;
  permissions: Permission;
}

interface Permission {
  view: boolean;
  create: boolean;
  edit: boolean;
  delete: boolean;
  manage_roles: boolean;
}

interface UserTableProps {
  users: User[];
  sortConfig: { key: string; direction: string };
  onSort: (key: string) => void;
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void;
}

export default function UserTable({
  users,
  sortConfig,
  onSort,
  onEdit,
  onDelete,
}: UserTableProps) {
  const getSortIcon = (key: string) => {
    if (sortConfig.key !== key) return <FaSort className="w-4 h-4" />;
    return sortConfig.direction === 'asc' ? (
      <FaSortUp className="w-4 h-4" />
    ) : (
      <FaSortDown className="w-4 h-4" />
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#D6D6E7]">
            <th
              className="text-left py-4 px-4 text-[#2A175E] font-semibold cursor-pointer"
              onClick={() => onSort('name')}>
              <div className="flex items-center gap-2">
                Name
                {getSortIcon('name')}
              </div>
            </th>
            <th
              className="text-left py-4 px-4 text-[#2A175E] font-semibold cursor-pointer"
              onClick={() => onSort('email')}>
              <div className="flex items-center gap-2">
                Email
                {getSortIcon('email')}
              </div>
            </th>
            <th
              className="text-left py-4 px-4 text-[#2A175E] font-semibold cursor-pointer"
              onClick={() => onSort('role')}>
              <div className="flex items-center gap-2">
                Role
                {getSortIcon('role')}
              </div>
            </th>
            <th
              className="text-left py-4 px-4 text-[#2A175E] font-semibold cursor-pointer"
              onClick={() => onSort('status')}>
              <div className="flex items-center gap-2">
                Status
                {getSortIcon('status')}
              </div>
            </th>
            <th
              className="text-left py-4 px-4 text-[#2A175E] font-semibold cursor-pointer"
              onClick={() => onSort('department')}>
              <div className="flex items-center gap-2">
                Department
                {getSortIcon('department')}
              </div>
            </th>
            <th
              className="text-left py-4 px-4 text-[#2A175E] font-semibold cursor-pointer"
              onClick={() => onSort('location')}>
              <div className="flex items-center gap-2">
                Location
                {getSortIcon('location')}
              </div>
            </th>
            <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b border-[#D6D6E7] hover:bg-[#F4F0FF]">
              <td className="py-4 px-4 text-gray-800 font-medium">
                {user.name}
              </td>
              <td className="py-4 px-4 text-gray-800">{user.email}</td>
              <td className="py-4 px-4">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    user.role === 'Admin'
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                  {user.role}
                </span>
              </td>
              <td className="py-4 px-4">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    user.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : user.status === 'inactive'
                      ? 'bg-gray-100 text-gray-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                  {user.status}
                </span>
              </td>
              <td className="py-4 px-4 text-gray-800">{user.department}</td>
              <td className="py-4 px-4 text-gray-800">{user.location}</td>
              <td className="py-4 px-4 flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onEdit(user)}
                    className="p-2 text-[#3F1D9B] hover:bg-[#F4F0FF] rounded-lg transition-colors">
                    <FaEdit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(user.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                    <FaTrash className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
