'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  FaSearch,
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
  FaBuilding,
  FaBriefcase,
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import JobPosting from '../components/jobs/JobPosting';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  description: string;
  requirements: string[];
  posted: string;
  logo: string;
}

const sampleJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Product Designer',
    company: 'TechVision Solutions',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $150k',
    experience: '5+ years',
    description:
      'We are looking for a Senior Product Designer to join our growing team...',
    requirements: [
      'Experience with design systems',
      'Strong portfolio of product work',
      'Excellent communication skills',
      'Experience with Figma and prototyping tools',
    ],
    posted: '2 days ago',
    logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'InnovateTech',
    location: 'Remote',
    type: 'Full-time',
    salary: '$100k - $130k',
    experience: '3+ years',
    description: 'Join our dynamic team as a Full Stack Developer...',
    requirements: [
      'Strong experience with React and Node.js',
      'Database design and optimization',
      'API development experience',
      'Understanding of cloud services',
    ],
    posted: '1 week ago',
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    title: 'Product Marketing Manager',
    company: 'GrowthLabs',
    location: 'New York, NY',
    type: 'Hybrid',
    salary: '$90k - $120k',
    experience: '4+ years',
    description:
      'Looking for a Product Marketing Manager to drive our go-to-market strategy...',
    requirements: [
      'Experience in B2B SaaS marketing',
      'Strong analytical skills',
      'Content strategy expertise',
      'Project management experience',
    ],
    posted: '3 days ago',
    logo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=100&h=100&fit=crop',
  },
];

export default function Jobs() {
  const [activeNav, setActiveNav] = useState('jobs');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    type: '',
    experience: '',
    location: '',
  });

  return (
    <div className="min-h-screen bg-[#F4F0FF] flex">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#2A175E] mb-2">
                {isPosting ? 'Post a New Job' : 'Find Your Dream Job'}
              </h1>
              <p className="text-[#6E6E8D]">
                {isPosting
                  ? 'Create a job listing to find the perfect candidate'
                  : 'Discover opportunities that match your skills and aspirations'}
              </p>
            </div>
            <button
              onClick={() => setIsPosting(!isPosting)}
              className="px-6 py-3 bg-gradient-to-r from-[#3F1D9B] to-[#6747C7] text-white rounded-xl hover:opacity-90 transition-opacity font-medium flex items-center gap-2">
              <FaBriefcase className="w-5 h-5" />
              {isPosting ? 'View Jobs' : 'Post a Job'}
            </button>
          </div>

          {/* Conditional Render: Job Posting Form or Search/Filters */}
          {isPosting ? (
            <JobPosting />
          ) : (
            <>
              <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Search Bar */}
                  <div className="flex-1 relative">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6E6E8D]" />
                    <input
                      type="text"
                      placeholder="Search jobs, companies, or keywords"
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] text-gray-800 placeholder-gray-500"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  {/* Filters */}
                  <div className="flex gap-4">
                    <select
                      className="px-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] bg-white text-gray-800"
                      value={selectedFilters.type}
                      onChange={(e) =>
                        setSelectedFilters({
                          ...selectedFilters,
                          type: e.target.value,
                        })
                      }>
                      <option value="" className="text-gray-500">
                        Job Type
                      </option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="remote">Remote</option>
                    </select>

                    <select
                      className="px-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] bg-white"
                      value={selectedFilters.experience}
                      onChange={(e) =>
                        setSelectedFilters({
                          ...selectedFilters,
                          experience: e.target.value,
                        })
                      }>
                      <option value="">Experience</option>
                      <option value="entry">Entry Level</option>
                      <option value="mid">Mid Level</option>
                      <option value="senior">Senior Level</option>
                    </select>

                    <select
                      className="px-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] bg-white"
                      value={selectedFilters.location}
                      onChange={(e) =>
                        setSelectedFilters({
                          ...selectedFilters,
                          location: e.target.value,
                        })
                      }>
                      <option value="">Location</option>
                      <option value="remote">Remote</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="onsite">On-site</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Job Listings */}
              <div className="grid grid-cols-1 gap-6">
                {sampleJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        width={64}
                        height={64}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h2 className="text-xl font-semibold text-[#2A175E] mb-1">
                              {job.title}
                            </h2>
                            <p className="text-[#6E6E8D] mb-2">{job.company}</p>
                          </div>
                          <span className="text-sm text-[#6E6E8D]">
                            {job.posted}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-[#6E6E8D]">
                          <div className="flex items-center gap-1">
                            <FaMapMarkerAlt />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaClock />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaDollarSign />
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaBuilding />
                            <span>{job.experience}</span>
                          </div>
                        </div>

                        <p className="text-[#6E6E8D] mb-4 line-clamp-2">
                          {job.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {job.requirements.slice(0, 3).map((req, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-[#F4F0FF] text-[#3F1D9B] rounded-full text-sm">
                              {req}
                            </span>
                          ))}
                          {job.requirements.length > 3 && (
                            <span className="px-3 py-1 bg-[#F4F0FF] text-[#3F1D9B] rounded-full text-sm">
                              +{job.requirements.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
