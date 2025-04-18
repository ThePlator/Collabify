'use client';

import { useState } from 'react';
import {
  FaBook,
  FaDollarSign,
  FaClock,
  FaUpload,
  FaPlus,
  FaTrash,
} from 'react-icons/fa';

interface Module {
  title: string;
  description: string;
  duration: string;
}

export default function CourseCreation() {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    level: 'Beginner',
    duration: '',
    thumbnail: null as File | null,
    modules: [{ title: '', description: '', duration: '' }] as Module[],
  });

  const handleModuleChange = (
    index: number,
    field: keyof Module,
    value: string
  ) => {
    const newModules = [...courseData.modules];
    newModules[index] = { ...newModules[index], [field]: value };
    setCourseData({ ...courseData, modules: newModules });
  };

  const addModule = () => {
    setCourseData({
      ...courseData,
      modules: [
        ...courseData.modules,
        { title: '', description: '', duration: '' },
      ],
    });
  };

  const removeModule = (index: number) => {
    const newModules = courseData.modules.filter((_, i) => i !== index);
    setCourseData({ ...courseData, modules: newModules });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Course Data:', courseData);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#2A175E] mb-2">
          Create a New Course
        </h2>
        <p className="text-[#6E6E8D]">
          Share your knowledge with the community
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-[#2A175E] mb-2">
              Course Title
            </label>
            <input
              type="text"
              value={courseData.title}
              onChange={(e) =>
                setCourseData({ ...courseData, title: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] text-gray-800 placeholder-gray-500"
              placeholder="e.g. Complete Web Development Bootcamp"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2A175E] mb-2">
              Category
            </label>
            <select
              value={courseData.category}
              onChange={(e) =>
                setCourseData({ ...courseData, category: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] bg-white text-gray-800"
              required>
              <option value="">Select a category</option>
              <option value="development">Development</option>
              <option value="design">Design</option>
              <option value="business">Business</option>
              <option value="marketing">Marketing</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2A175E] mb-2">
              Level
            </label>
            <select
              value={courseData.level}
              onChange={(e) =>
                setCourseData({ ...courseData, level: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] bg-white"
              required>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2A175E] mb-2">
              Price
            </label>
            <div className="relative">
              <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6E6E8D]" />
              <input
                type="text"
                value={courseData.price}
                onChange={(e) =>
                  setCourseData({ ...courseData, price: e.target.value })
                }
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] text-gray-800 placeholder-gray-500"
                placeholder="e.g. 49.99"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2A175E] mb-2">
              Total Duration
            </label>
            <div className="relative">
              <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6E6E8D]" />
              <input
                type="text"
                value={courseData.duration}
                onChange={(e) =>
                  setCourseData({ ...courseData, duration: e.target.value })
                }
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B]"
                placeholder="e.g. 12 hours"
                required
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-[#2A175E] mb-2">
              Course Description
            </label>
            <textarea
              value={courseData.description}
              onChange={(e) =>
                setCourseData({ ...courseData, description: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] h-32 text-gray-800 placeholder-gray-500"
              placeholder="Describe what students will learn from your course..."
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-[#2A175E] mb-2">
              Course Thumbnail
            </label>
            <div className="border-2 border-dashed border-[#D6D6E7] rounded-lg p-6 text-center">
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setCourseData({
                    ...courseData,
                    thumbnail: e.target.files?.[0] || null,
                  })
                }
                className="hidden"
                id="thumbnail"
              />
              <label
                htmlFor="thumbnail"
                className="flex flex-col items-center justify-center cursor-pointer">
                <FaUpload className="w-8 h-8 text-[#6E6E8D] mb-2" />
                <p className="text-[#6E6E8D]">
                  {courseData.thumbnail
                    ? courseData.thumbnail.name
                    : 'Upload course thumbnail'}
                </p>
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <label className="block text-sm font-medium text-[#2A175E]">
              Course Modules
            </label>
            <button
              type="button"
              onClick={addModule}
              className="text-[#3F1D9B] hover:text-[#2D0E81] font-medium flex items-center gap-2">
              <FaPlus className="w-4 h-4" />
              Add Module
            </button>
          </div>

          {courseData.modules.map((module, index) => (
            <div key={index} className="bg-[#F4F0FF] rounded-lg p-4 mb-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-[#2A175E] font-medium">
                  Module {index + 1}
                </h3>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeModule(index)}
                    className="text-red-500 hover:text-red-600">
                    <FaTrash className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  value={module.title}
                  onChange={(e) =>
                    handleModuleChange(index, 'title', e.target.value)
                  }
                  className="w-full px-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] text-gray-800 placeholder-gray-500"
                  placeholder="Module Title"
                  required
                />
                <textarea
                  value={module.description}
                  onChange={(e) =>
                    handleModuleChange(index, 'description', e.target.value)
                  }
                  className="w-full px-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] h-24 text-gray-800 placeholder-gray-500"
                  placeholder="Module Description"
                  required
                />
                <div className="relative">
                  <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6E6E8D]" />
                  <input
                    type="text"
                    value={module.duration}
                    onChange={(e) =>
                      handleModuleChange(index, 'duration', e.target.value)
                    }
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B]"
                    placeholder="Module Duration"
                    required
                  />
                </div>
              </div>
            </div>
          ))}
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
            Create Course
          </button>
        </div>
      </form>
    </div>
  );
}