'use client';

import { useState } from 'react';
import { FaSearch, FaCheck, FaTimes, FaEye } from 'react-icons/fa';

interface JobPost {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedBy: string;
  submittedAt: string;
}

const sampleJobs: JobPost[] = [
  {
    id: '1',
    title: 'Senior Product Designer',
    company: 'TechVision Solutions',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $150k',
    status: 'pending',
    submittedBy: 'john@techvision.com',
    submittedAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'InnovateTech',
    location: 'Remote',
    type: 'Full-time',
    salary: '$100k - $130k',
    status: 'approved',
    submittedBy: 'hr@innovatetech.com',
    submittedAt: '2024-01-14',
  },
  {
    id: '3',
    title: 'Marketing Manager',
    company: 'GrowthLabs',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$90k - $120k',
    status: 'rejected',
    submittedBy: 'careers@growthlabs.com',
    submittedAt: '2024-01-13',
  },
];

export default function JobApprovals() {
  const [jobs, setJobs] = useState<JobPost[]>(sampleJobs);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus ? job.status === selectedStatus : true;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (
    jobId: string,
    newStatus: 'approved' | 'rejected'
  ) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, status: newStatus } : job
      )
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#2A175E] mb-2">
          Job Approvals
        </h2>
        <p className="text-[#6E6E8D]">Review and moderate job postings</p>
      </div>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6E6E8D]" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full pl-12 pr-4 py-2 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-2 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#D6D6E7]">
              <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                Job Title
              </th>
              <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                Company
              </th>
              <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                Location
              </th>
              <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                Type
              </th>
              <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                Status
              </th>
              <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                Submitted
              </th>
              <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job) => (
              <tr
                key={job.id}
                className="border-b border-[#D6D6E7] hover:bg-[#F4F0FF]/50">
                <td className="py-4 px-4 text-[#2A175E] font-medium">
                  {job.title}
                </td>
                <td className="py-4 px-4 text-[#2A175E]">{job.company}</td>
                <td className="py-4 px-4 text-[#2A175E]">{job.location}</td>
                <td className="py-4 px-4 text-[#2A175E]">{job.type}</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      job.status === 'approved'
                        ? 'bg-green-100 text-green-700'
                        : job.status === 'rejected'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-4 text-[#2A175E]">{job.submittedAt}</td>
                <td className="py-4 px-4">
                  <div className="flex gap-2">
                    <button
                      className="p-2 text-[#3F1D9B] hover:bg-[#F4F0FF] rounded-lg transition-colors"
                      title="View Details">
                      <FaEye className="w-4 h-4" />
                    </button>
                    {job.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleStatusChange(job.id, 'approved')}
                          className="p-2 text-green-500 hover:bg-green-50 rounded-lg transition-colors"
                          title="Approve">
                          <FaCheck className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleStatusChange(job.id, 'rejected')}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Reject">
                          <FaTimes className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
