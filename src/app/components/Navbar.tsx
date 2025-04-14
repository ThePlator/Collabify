'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  if (pathname !== '/') {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#D6D6E7]/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#3F1D9B]">Collabify</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/feed"
              className="text-gray-600 hover:text-[#3F1D9B] transition-colors duration-200">
              Feed
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-[#3F1D9B] transition-colors duration-200">
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-[#3F1D9B] transition-colors duration-200">
              About
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-[#3F1D9B] hover:text-[#2D0E81] transition-colors duration-200">
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-[#3F1D9B] text-white rounded-md font-semibold transition-all duration-200 hover:bg-[#2D0E81] hover:scale-105 shadow-sm">
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-[#3F1D9B] transition-colors duration-200">
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#D6D6E7]/30">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/feed"
              className="block px-3 py-2 text-gray-600 hover:text-[#3F1D9B] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}>
              Feed
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 text-gray-600 hover:text-[#3F1D9B] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-600 hover:text-[#3F1D9B] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 text-[#3F1D9B] hover:text-[#2D0E81] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}>
              Log in
            </Link>
            <Link
              href="/signup"
              className="block px-3 py-2 bg-[#3F1D9B] text-white rounded-md font-semibold transition-all duration-200 hover:bg-[#2D0E81]"
              onClick={() => setIsMenuOpen(false)}>
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
