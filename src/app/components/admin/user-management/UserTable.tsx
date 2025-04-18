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
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden border border-[#D6D6E7] rounded-lg">
          <table className="min-w-full divide-y divide-[#D6D6E7]">
            <thead className="bg-[#F4F0FF]">
              <tr>
                <th
                  className="px-3 py-3.5 text-left text-sm font-semibold text-[#2A175E] sm:pl-6 cursor-pointer"
                  onClick={() => onSort('name')}>
                  <div className="flex items-center gap-2">
                    Name
                    {getSortIcon('name')}
                  </div>
                </th>
                <th
                  className="px-3 py-3.5 text-left text-sm font-semibold text-[#2A175E] cursor-pointer hidden sm:table-cell"
                  onClick={() => onSort('email')}>
                  <div className="flex items-center gap-2">
                    Email
                    {getSortIcon('email')}
                  </div>
                </th>
                <th
                  className="px-3 py-3.5 text-left text-sm font-semibold text-[#2A175E] cursor-pointer"
                  onClick={() => onSort('role')}>
                  <div className="flex items-center gap-2">
                    Role
                    {getSortIcon('role')}
                  </div>
                </th>
                <th
                  className="px-3 py-3.5 text-left text-sm font-semibold text-[#2A175E] cursor-pointer hidden md:table-cell"
                  onClick={() => onSort('status')}>
                  <div className="flex items-center gap-2">
                    Status
                    {getSortIcon('status')}
                  </div>
                </th>
                <th
                  className="px-3 py-3.5 text-left text-sm font-semibold text-[#2A175E] cursor-pointer hidden lg:table-cell"
                  onClick={() => onSort('department')}>
                  <div className="flex items-center gap-2">
                    Department
                    {getSortIcon('department')}
                  </div>
                </th>
                <th
                  className="px-3 py-3.5 text-left text-sm font-semibold text-[#2A175E] cursor-pointer hidden lg:table-cell"
                  onClick={() => onSort('location')}>
                  <div className="flex items-center gap-2">
                    Location
                    {getSortIcon('location')}
                  </div>
                </th>
                <th className="px-3 py-3.5 text-right text-sm font-semibold text-[#2A175E] sm:pr-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D6D6E7] bg-white">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-[#F4F0FF]/50">
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 sm:pl-6">
                    {user.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 hidden sm:table-cell">
                    {user.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.role === 'Admin'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 hidden md:table-cell">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : user.status === 'inactive'
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 hidden lg:table-cell">
                    {user.department || '-'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 hidden lg:table-cell">
                    {user.location || '-'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 text-right sm:pr-6">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => onEdit(user)}
                        className="text-[#3F1D9B] hover:text-[#2A175E] transition-colors">
                        <FaEdit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onDelete(user.id)}
                        className="text-red-600 hover:text-red-800 transition-colors">
                        <FaTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
