'use client';

import { useState } from 'react';
import AdminSidebar from '../components/admin/AdminSidebar';
import UserManagement from '../components/admin/UserManagement';
import JobApprovals from '../components/admin/JobApprovals';
import ProductApprovals from '../components/admin/ProductApprovals';
import TransactionDashboard from '../components/admin/TransactionDashboard';

export default function AdminPanel() {
  const [activeSection, setActiveSection] = useState('users');

  const renderSection = () => {
    switch (activeSection) {
      case 'users':
        return <UserManagement />;
      case 'jobs':
        return <JobApprovals />;
      case 'products':
        return <ProductApprovals />;
      case 'transactions':
        return <TransactionDashboard />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F0FF] flex">
      <AdminSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 p-6">
        <div className="max-w-7xl mx-auto">{renderSection()}</div>
      </div>
    </div>
  );
}
