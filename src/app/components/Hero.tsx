'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#F4F0FF] to-[#FDFDFF] overflow-hidden relative">
      {/* Abstract cloud shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#3F1D9B]/10 rounded-full blur-3xl transform -rotate-12 animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#7A5AF8]/10 rounded-full blur-3xl animate-float-delayed" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="text-white space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight text-[#3F1D9B] font-serif">
              Collaborate.<br />
              Build.<br />
              Grow.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-xl">
              Collabify is your all-in-one workspace to brainstorm, manage tasks, and launch faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#3F1D9B] text-white rounded-md font-semibold text-lg transition-all duration-200 hover:bg-[#2D0E81] hover:scale-105 shadow-lg">
                Get Started for Free
              </button>
              <button className="px-8 py-4 border border-[#D6D6E7] text-[#3F1D9B] rounded-md font-semibold text-lg transition-all duration-200 hover:bg-[#7A5AF8]/10 hover:scale-105">
                Contact Sales
              </button>
            </div>
          </div>
          
          {/* Right column - Dashboard mockup */}
          <div className="relative w-full h-[600px] hidden lg:block transform -rotate-6">
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-2xl">
              <Image
                src="/dashboard-mockup.png"
                alt="Collabify Dashboard"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 backdrop-blur-sm"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(63, 29, 155, 0.15))' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
