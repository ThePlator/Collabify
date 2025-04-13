'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const roles = [
    { id: 'job_seeker', label: 'Job Seeker' },
    { id: 'freelancer', label: 'Freelancer' },
    { id: 'business_owner', label: 'Business Owner' },
    { id: 'student', label: 'Student' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup logic here
  };

  const handleGoogleSignup = () => {
    // Implement Google OAuth logic here
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

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#F4F0FF] to-[#FDFDFF] overflow-y-auto py-20 relative">
      {/* Abstract cloud shapes background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#3F1D9B]/10 rounded-full blur-3xl transform -rotate-12 animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#7A5AF8]/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl relative z-10 mx-auto my-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#3F1D9B] mb-2">
            Create an account
          </h2>
          <p className="text-[#6E6E8D]">
            Join Collabify and start collaborating
          </p>
        </div>

        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white border border-[#D6D6E7] rounded-md font-semibold text-lg transition-all duration-200 hover:bg-gray-50 hover:scale-[1.02] mb-6">
          <FcGoogle className="w-6 h-6" />
          Sign up with Google
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#D6D6E7]"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white/80 text-[#6E6E8D]">
              Or continue with
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] transition-all duration-200 text-gray-900 placeholder-gray-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] transition-all duration-200 text-gray-900 placeholder-gray-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 mb-1">
              Select your role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] transition-all duration-200 bg-white text-gray-900"
              required>
              <option value="" disabled className="text-gray-500">
                Choose your role
              </option>
              {roles.map((role) => (
                <option key={role.id} value={role.id} className="text-gray-900">
                  {role.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] transition-all duration-200 text-gray-900 placeholder-gray-500"
              placeholder="Create a password"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] transition-all duration-200 text-gray-900 placeholder-gray-500"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-[#3F1D9B] text-white rounded-md font-semibold text-lg transition-all duration-200 hover:bg-[#2D0E81] hover:scale-[1.02] shadow-lg">
            Create Account
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#D6D6E7]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white/80 text-[#6E6E8D]">
                Or continue with
              </span>
            </div>
          </div>

          <button
            type="button"
            className="w-full px-8 py-4 bg-white text-gray-700 rounded-md font-semibold text-lg transition-all duration-200 hover:bg-gray-50 hover:scale-[1.02] shadow-sm border border-[#D6D6E7] flex items-center justify-center gap-2">
            <Image src="/google.svg" alt="Google" width={20} height={20} />
            Sign up with Google
          </button>

          <p className="text-center text-[#6E6E8D]">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-[#3F1D9B] hover:text-[#2D0E81] transition-colors duration-200 font-medium">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
