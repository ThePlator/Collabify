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
          className="w-full md:w-48 px-4 py-2 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg border border-[#D6D6E7] p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#2A175E] mb-1">
                    {job.title}
                  </h3>
                  <p className="text-[#6E6E8D] text-sm">{job.company}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    job.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : job.status === 'approved'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                  {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                </span>
              </div>

              <div className="space-y-2 text-sm text-[#6E6E8D]">
                <p>Location: {job.location}</p>
                <p>Type: {job.type}</p>
                <p>Salary: {job.salary}</p>
                <p className="truncate">Submitted by: {job.submittedBy}</p>
                <p>Date: {new Date(job.submittedAt).toLocaleDateString()}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <button
                  onClick={() => handleStatusChange(job.id, 'approved')}
                  disabled={job.status !== 'pending'}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
                  <FaCheck className="w-4 h-4" />
                  <span>Approve</span>
                </button>
                <button
                  onClick={() => handleStatusChange(job.id, 'rejected')}
                  disabled={job.status !== 'pending'}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
                  <FaTimes className="w-4 h-4" />
                  <span>Reject</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[#D6D6E7] text-[#6E6E8D] hover:bg-[#F4F0FF] transition-colors duration-200">
                  <FaEye className="w-4 h-4" />
                  <span>View</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
