'use client';

import React from 'react';
import { FaPlay, FaStar } from 'react-icons/fa';
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  quote: string;
  rating: number;
  videoThumbnail: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  quote,
  rating,
  videoThumbnail,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      {/* Video Thumbnail */}
      <div className="relative mb-6 rounded-xl overflow-hidden group cursor-pointer">
        <div className="aspect-video w-full relative">
          <Image
            src={videoThumbnail}
            alt={`${name}'s testimonial video`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={640}
            height={360}
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <FaPlay className="text-[#4C1D95] ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-[#3F1D9B]">{name}</h3>
        <p className="text-[#6E6E8D] leading-relaxed">{quote}</p>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar
              key={index}
              className={`w-5 h-5 ${
                index < rating ? 'text-[#FBBF24]' : 'text-gray-200'
              }`}
            />
          ))}
          <span className="ml-2 text-sm font-medium text-[#6E6E8D]">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: 'Arjun Mehta',
    quote:
      'Collabify helped us streamline our ideation process and reduced launch time by 40%.',
    rating: 5.0,
    videoThumbnail: '/testimonials/arjun-mehta.jpg',
  },
  {
    name: 'Priya Desai',
    quote:
      'Brainstorming in real-time with remote teams has never felt so smooth!',
    rating: 4.9,
    videoThumbnail: '/testimonials/priya-desai.jpg',
  },
  {
    name: 'Rahul Kapoor',
    quote:
      'The task manager and collaboration tools helped us hit every sprint deadline.',
    rating: 4.8,
    videoThumbnail: '/testimonials/rahul-kapoor.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-[#FAFAFC] bg-[url('/patterns/dot-pattern.svg')]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-[#3F1D9B]">
            Success stories from our users
          </h2>
          <p className="text-[#6E6E8D] text-lg max-w-2xl mx-auto">
            See how teams use Collabify to brainstorm better, organize faster,
            and ship smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
