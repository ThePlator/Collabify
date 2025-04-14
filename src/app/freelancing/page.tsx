'use client';

import { useState } from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import {
  FaSearch,
  FaBriefcase,
  FaFileUpload,
  FaDollarSign,
  FaClock,
  FaMapMarkerAlt,
} from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  description: string;
  budget: string;
  duration: string;
  skills: string[];
  location: string;
  proposals: number;
  postedBy: {
    name: string;
    avatar: string;
    rating: number;
  };
  postedAt: string;
}

const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Website Development',
    description:
      'Looking for a skilled developer to build a modern e-commerce platform with React and Node.js...',
    budget: '$2000-$3000',
    duration: '2-3 months',
    skills: ['React', 'Node.js', 'MongoDB', 'Express'],
    location: 'Remote',
    proposals: 12,
    postedBy: {
      name: 'Tech Solutions Inc.',
      avatar:
        'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=50&h=50&fit=crop',
      rating: 4.8,
    },
    postedAt: '2 days ago',
  },
  {
    id: '2',
    title: 'Mobile App UI/UX Design',
    description:
      'Need a creative designer for our fitness tracking mobile application...',
    budget: '$1500-$2500',
    duration: '1-2 months',
    skills: ['Figma', 'UI/UX', 'Mobile Design', 'Prototyping'],
    location: 'Remote',
    proposals: 8,
    postedBy: {
      name: 'FitTech Solutions',
      avatar:
        'https://images.unsplash.com/photo-1549924231-f129b911e442?w=50&h=50&fit=crop',
      rating: 4.9,
    },
    postedAt: '1 day ago',
  },
];

export default function Freelancing() {
  const [activeNav, setActiveNav] = useState('freelancing');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    category: '',
    budget: '',
    duration: '',
  });

  return (
    <div className="min-h-screen bg-[#F4F0FF] flex">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      <div className="flex-1 lg:ml-64 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#2A175E] mb-2">
              Freelancing Marketplace
            </h1>
            <p className="text-[#6E6E8D]">
              Connect with talented freelancers or post your project
            </p>
          </div>

          {/* Post Project Button */}
          <div className="mb-6">
            <button className="px-6 py-3 bg-gradient-to-r from-[#3F1D9B] to-[#6747C7] text-white rounded-xl font-semibold hover:opacity-90 transition-all shadow-md shadow-purple-500/20 flex items-center gap-2">
              <FaBriefcase className="w-5 h-5" />
              Post a Project
            </button>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6E6E8D]" />
                <input
                  type="text"
                  placeholder="Search projects by title or skills"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] text-gray-800 placeholder-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filters */}
              <div className="flex gap-4">
                <select
                  className="px-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] bg-white text-gray-800"
                  value={selectedFilters.category}
                  onChange={(e) =>
                    setSelectedFilters({
                      ...selectedFilters,
                      category: e.target.value,
                    })
                  }>
                  <option value="">Category</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="design">Design</option>
                  <option value="writing">Writing</option>
                </select>

                <select
                  className="px-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] bg-white text-gray-800"
                  value={selectedFilters.budget}
                  onChange={(e) =>
                    setSelectedFilters({
                      ...selectedFilters,
                      budget: e.target.value,
                    })
                  }>
                  <option value="">Budget</option>
                  <option value="low">Under $1000</option>
                  <option value="mid">$1000-$5000</option>
                  <option value="high">$5000+</option>
                </select>

                <select
                  className="px-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] bg-white text-gray-800"
                  value={selectedFilters.duration}
                  onChange={(e) =>
                    setSelectedFilters({
                      ...selectedFilters,
                      duration: e.target.value,
                    })
                  }>
                  <option value="">Duration</option>
                  <option value="short">Less than 1 month</option>
                  <option value="medium">1-3 months</option>
                  <option value="long">3+ months</option>
                </select>
              </div>
            </div>
          </div>

          {/* Projects List */}
          <div className="space-y-6">
            {sampleProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-[#2A175E] mb-2">
                      {project.title}
                    </h2>
                    <p className="text-[#6E6E8D] mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#F4F0FF] text-[#3F1D9B] rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-[#6E6E8D]">
                  <div className="flex items-center gap-2">
                    <FaDollarSign className="text-[#3F1D9B]" />
                    {project.budget}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-[#3F1D9B]" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#3F1D9B]" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaFileUpload className="text-[#3F1D9B]" />
                    {project.proposals} proposals
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#D6D6E7]">
                  <div className="flex items-center gap-3">
                    <Image
                      src={project.postedBy.avatar}
                      alt={project.postedBy.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-[#2A175E]">
                        {project.postedBy.name}
                      </p>
                      <p className="text-sm text-[#6E6E8D]">
                        Posted {project.postedAt}
                      </p>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-[#3F1D9B] text-white rounded-lg hover:bg-[#2D0E81] transition-colors">
                    Submit Proposal
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
