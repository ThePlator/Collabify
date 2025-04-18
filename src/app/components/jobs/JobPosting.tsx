'use client';

import { useState } from 'react';
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaDollarSign,
  FaClock,
} from 'react-icons/fa';

export default function JobPosting() {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    salary: '',
    experience: '',
    description: '',
    requirements: [''],
  });

  const handleRequirementChange = (index: number, value: string) => {
    const newRequirements = [...jobData.requirements];
    newRequirements[index] = value;
    setJobData({ ...jobData, requirements: newRequirements });
  };

  const addRequirement = () => {
    setJobData({
      ...jobData,
      requirements: [...jobData.requirements, ''],
    });
  };

  const removeRequirement = (index: number) => {
    const newRequirements = jobData.requirements.filter((_, i) => i !== index);
    setJobData({ ...jobData, requirements: newRequirements });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job Data:', jobData);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#2A175E] mb-2">
          Post a New Job
        </h2>
        <p className="text-[#6E6E8D]">
          Fill in the details to post your job listing
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#2A175E] mb-2">
              Job Title
            </label>
            <input
              type="text"
              value={jobData.title}
              onChange={(e) =>
                setJobData({ ...jobData, title: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-[#D6D6E7] text-[#2A175E] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B]"
              placeholder="e.g. Senior Product Designer"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2A175E] mb-2">
              Company Name
            </label>
            <input
              type="text"
              value={jobData.company}
              onChange={(e) =>
                setJobData({ ...jobData, company: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-[#D6D6E7] text-[#2A175E] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B]"
              placeholder="e.g. TechVision Solutions"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2A175E] mb-2">
              Location
            </label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6E6E8D]" />
              <input
                type="text"
                value={jobData.location}
                onChange={(e) =>
                  setJobData({ ...jobData, location: e.target.value })
                }
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#D6D6E7] text-[#2A175E] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B]"
                placeholder="e.g. San Francisco, CA or Remote"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2A175E] mb-2">
              Job Type
            </label>
            <select
              value={jobData.type}
              onChange={(e) => setJobData({ ...jobData, type: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[#D6D6E7] text-[#2A175E] bg-white focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B]"
              required>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Freelance">Freelance</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2A175E] mb-2">
              Salary Range
            </label>
            <div className="relative">
              <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6E6E8D]" />
              <input
                type="text"
                value={jobData.salary}
                onChange={(e) =>
                  setJobData({ ...jobData, salary: e.target.value })
                }
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#D6D6E7] text-[#2A175E] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B]"
                placeholder="e.g. $80k - $100k"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2A175E] mb-2">
              Experience Required
            </label>
            <div className="relative">
              <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6E6E8D]" />
              <input
                type="text"
                value={jobData.experience}
                onChange={(e) =>
                  setJobData({ ...jobData, experience: e.target.value })
                }
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#D6D6E7] text-[#2A175E] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B]"
                placeholder="e.g. 3+ years"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#2A175E] mb-2">
            Job Description
          </label>
          <textarea
            value={jobData.description}
            onChange={(e) =>
              setJobData({ ...jobData, description: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-[#D6D6E7] text-[#2A175E] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] h-32"
            placeholder="Describe the role, responsibilities, and qualifications..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#2A175E] mb-2">
            Requirements
          </label>
          {jobData.requirements.map((requirement, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={requirement}
                onChange={(e) => handleRequirementChange(index, e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-[#D6D6E7] text-[#2A175E] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B]"
                placeholder="Add a requirement"
                required
              />
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeRequirement(index)}
                  className="px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addRequirement}
            className="text-[#3F1D9B] hover:text-[#2D0E81] font-medium flex items-center gap-2">
            <FaBriefcase className="w-4 h-4" />
            Add Requirement
          </button>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-6 py-3 border-2 border-[#3F1D9B] text-[#3F1D9B] rounded-xl hover:bg-[#3F1D9B] hover:text-white transition-colors font-medium">
            Save as Draft
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-[#3F1D9B] to-[#6747C7] text-white rounded-xl hover:opacity-90 transition-opacity font-medium">
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}
