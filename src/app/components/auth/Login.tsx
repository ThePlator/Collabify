'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#F4F0FF] to-[#FDFDFF] overflow-hidden relative">
      {/* Abstract cloud shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#3F1D9B]/10 rounded-full blur-3xl transform -rotate-12 animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#7A5AF8]/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#3F1D9B] mb-2">
            Welcome back
          </h2>
          <p className="text-[#6E6E8D]">Sign in to continue to Collabify</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-[#3F1D9B] focus:ring-[#3F1D9B]"
              />
              <label htmlFor="remember" className="ml-2 text-[#6E6E8D]">
                Remember me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-[#3F1D9B] hover:text-[#2D0E81] transition-colors duration-200">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-[#3F1D9B] text-white rounded-md font-semibold text-lg transition-all duration-200 hover:bg-[#2D0E81] hover:scale-[1.02] shadow-lg">
            Sign in
          </button>

          <p className="text-center text-[#6E6E8D]">
            Don&apos;t have an account?{' '}
            <Link
              href="/signup"
              className="text-[#3F1D9B] hover:text-[#2D0E81] transition-colors duration-200 font-medium">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
