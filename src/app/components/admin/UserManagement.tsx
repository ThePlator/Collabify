'use client';

import { useState } from 'react';
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaUserPlus,
  FaHistory,
  FaDownload,
  FaFilter,
  FaUsers,
  FaUserCheck,
  FaUserShield,
  FaCheckSquare,
  FaSquare,
  FaSort,
  FaSortUp,
  FaSortDown,
  FaEllipsisV,
} from 'react-icons/fa';
import UserHeader from './user-management/UserHeader';
import UserSearch from './user-management/UserSearch';
import UserTable from './user-management/UserTable';
import UserStatistics from './user-management/UserStatistics';
import RecentActivities from './user-management/RecentActivities';
import UserModal from './user-management/UserModal';

interface Permission {
  view: boolean;
  create: boolean;
  edit: boolean;
  delete: boolean;
  manage_roles: boolean;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'suspended';
  joinDate: string;
  lastLogin?: string;
  permissions: Permission;
  department?: string;
  location?: string;
}

interface ActivityLog {
  id: string;
  userId: string;
  action: string;
  timestamp: string;
  details: string;
}

const sampleUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'User',
    status: 'active',
    joinDate: '2023-01-15',
    lastLogin: '2024-01-20 14:30:00',
    permissions: {
      view: true,
      create: false,
      edit: false,
      delete: false,
      manage_roles: false,
    },
    department: 'Sales',
    location: 'New York',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Admin',
    status: 'active',
    joinDate: '2023-02-20',
    lastLogin: '2024-01-21 09:15:00',
    permissions: {
      view: true,
      create: true,
      edit: true,
      delete: true,
      manage_roles: true,
    },
    department: 'IT',
    location: 'London',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'User',
    status: 'suspended',
    joinDate: '2023-03-10',
    lastLogin: '2024-01-19 16:45:00',
    permissions: {
      view: true,
      create: true,
      edit: false,
      delete: false,
      manage_roles: false,
    },
    department: 'Marketing',
    location: 'Paris',
  },
];

const sampleActivityLogs: ActivityLog[] = [
  {
    id: '1',
    userId: '2',
    action: 'User Created',
    timestamp: '2024-01-21 10:30:00',
    details: 'Created new user account for John Doe',
  },
  {
    id: '2',
    userId: '2',
    action: 'Role Updated',
    timestamp: '2024-01-21 11:15:00',
    details: 'Updated user role from User to Admin',
  },
  {
    id: '3',
    userId: '2',
    action: 'User Suspended',
    timestamp: '2024-01-21 14:20:00',
    details: 'Suspended user account due to policy violation',
  },
];

interface UserFormData {
  name: string;
  email: string;
  role: 'Admin' | 'User';
  status: 'active' | 'inactive' | 'suspended';
  department?: string;
  location?: string;
  permissions: Permission;
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>(sampleUsers);
  const [activityLogs, setActivityLogs] =
    useState<ActivityLog[]>(sampleActivityLogs);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActivityLogOpen, setIsActivityLogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    email: '',
    role: 'User',
    status: 'active',
    department: '',
    location: '',
    permissions: {
      view: true,
      create: false,
      edit: false,
      delete: false,
      manage_roles: false,
    },
  });

  const handleAddUser = () => {
    setSelectedUser(null);
    setFormData({
      name: '',
      email: '',
      role: 'User',
      status: 'active',
      department: '',
      location: '',
      permissions: {
        view: true,
        create: false,
        edit: false,
        delete: false,
        manage_roles: false,
      },
    });
    setIsModalOpen(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role as 'Admin' | 'User',
      status: user.status,
      department: user.department,
      location: user.location,
      permissions: user.permissions,
    });
    setIsModalOpen(true);
  };

  const handleDeleteUser = (userId: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter((user) => user.id !== userId));
      addActivityLog(userId, 'User Deleted', 'Deleted user account');
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Check for duplicate email
    const existingUser = users.find(
      (user) =>
        user.email === formData.email &&
        (!selectedUser || user.id !== selectedUser.id)
    );
    if (existingUser) {
      newErrors.email = 'Email already exists';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      if (!validateForm()) {
        setIsSubmitting(false);
        return;
      }

      if (selectedUser) {
        // Edit existing user
        setUsers(
          users.map((user) =>
            user.id === selectedUser.id ? { ...user, ...formData } : user
          )
        );
        addActivityLog(
          selectedUser.id,
          'User Updated',
          'Updated user information'
        );
      } else {
        // Add new user
        const newUser: User = {
          id: Math.random().toString(36).substr(2, 9),
          ...formData,
          joinDate: new Date().toISOString().split('T')[0],
          lastLogin: new Date().toISOString().replace('T', ' ').split('.')[0],
        };
        setUsers([...users, newUser]);
        addActivityLog(newUser.id, 'User Created', 'Created new user account');
      }
      setIsModalOpen(false);
    } catch (error) {
      setErrors({
        submit: 'An error occurred while saving the user. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePermissionChange = (permission: keyof Permission) => {
    setFormData((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [permission]: !prev.permissions[permission],
      },
    }));
  };

  const addActivityLog = (userId: string, action: string, details: string) => {
    const newLog: ActivityLog = {
      id: Math.random().toString(36).substr(2, 9),
      userId,
      action,
      timestamp: new Date().toISOString().replace('T', ' ').split('.')[0],
      details,
    };
    setActivityLogs([newLog, ...activityLogs]);
  };

  const handleSort = (key: string) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key as keyof User];
    const bValue = b[sortConfig.key as keyof User];

    if (aValue && bValue && aValue < bValue)
      return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue && bValue && aValue > bValue)
      return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const filteredUsers = sortedUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.department?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.location?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole ? user.role === selectedRole : true;
    const matchesStatus = selectedStatus
      ? user.status === selectedStatus
      : true;
    const matchesDepartment = selectedDepartment
      ? user.department === selectedDepartment
      : true;
    const matchesLocation = selectedLocation
      ? user.location === selectedLocation
      : true;
    return (
      matchesSearch &&
      matchesRole &&
      matchesStatus &&
      matchesDepartment &&
      matchesLocation
    );
  });

  const departments = Array.from(
    new Set(users.map((user) => user.department).filter(Boolean))
  ) as string[];
  const locations = Array.from(
    new Set(users.map((user) => user.location).filter(Boolean))
  ) as string[];

  const handleExportUsers = () => {
    const csvContent = [
      [
        'ID',
        'Name',
        'Email',
        'Role',
        'Status',
        'Join Date',
        'Last Login',
        'Department',
        'Location',
      ].join(','),
      ...filteredUsers.map((user) =>
        [
          user.id,
          user.name,
          user.email,
          user.role,
          user.status,
          user.joinDate,
          user.lastLogin,
          user.department,
          user.location,
        ].join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'users.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-[#F4F0FF] rounded-lg">
              <FaUsers className="w-6 h-6 text-[#3F1D9B]" />
            </div>
            <span className="text-sm text-[#3F1D9B] font-medium">
              Total Users
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#2A175E]">{users.length}</h3>
          <p className="text-[#6E6E8D]">Registered accounts</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <FaUserCheck className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">
              Active Users
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#2A175E]">
            {users.filter((user) => user.status === 'active').length}
          </h3>
          <p className="text-[#6E6E8D]">Currently active</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <FaUserShield className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-purple-600 font-medium">Admins</span>
          </div>
          <h3 className="text-2xl font-bold text-[#2A175E]">
            {users.filter((user) => user.role === 'Admin').length}
          </h3>
          <p className="text-[#6E6E8D]">Administrator accounts</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <FaHistory className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-blue-600 font-medium">
              Recent Activity
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#2A175E]">
            {activityLogs.length}
          </h3>
          <p className="text-[#6E6E8D]">Activity logs</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <UserHeader
          onActivityLogOpen={() => setIsActivityLogOpen(true)}
          onExportUsers={handleExportUsers}
          onAddUser={handleAddUser}
        />
        <UserSearch
          searchQuery={searchQuery}
          selectedRole={selectedRole}
          selectedStatus={selectedStatus}
          selectedDepartment={selectedDepartment}
          selectedLocation={selectedLocation}
          departments={departments}
          locations={locations}
          onSearchChange={setSearchQuery}
          onRoleChange={setSelectedRole}
          onStatusChange={setSelectedStatus}
          onDepartmentChange={setSelectedDepartment}
          onLocationChange={setSelectedLocation}
        />
        <UserTable
          users={filteredUsers}
          sortConfig={sortConfig}
          onSort={handleSort}
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
        />
      </div>
      {/* User Statistics */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-[#2A175E] mb-2">
            Recent Activities
          </h2>
          <p className="text-[#6E6E8D]">Latest user activities and changes</p>
        </div>
        <button
          onClick={() => setIsActivityLogOpen(true)}
          className="text-[#3F1D9B] hover:text-[#2A175E] transition-colors">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {activityLogs.map((log) => (
          <div
            key={log.id}
            className="flex items-start gap-4 p-4 bg-[#F4F0FF]/50 rounded-lg">
            <div className="p-2 bg-white rounded-lg">
              <FaHistory className="w-5 h-5 text-[#3F1D9B]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-medium text-[#2A175E]">{log.action}</h4>
                <span className="text-sm text-[#6E6E8D]">{log.timestamp}</span>
              </div>
              <p className="text-[#6E6E8D]">{log.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
