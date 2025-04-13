'use client';

import { useState } from 'react';
import Profile from '../components/profile/Profile';
import Sidebar from '../components/Sidebar';

export default function ProfilePage() {
  const [activeNav, setActiveNav] = useState('profile');

  return (
    <div className="min-h-screen bg-[#F4F0FF] flex">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
      <div className="flex-1 lg:ml-64">
        <Profile />
      </div>
    </div>
  );
}
