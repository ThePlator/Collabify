'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import Image from 'next/image';

interface TestimonialCardProps {
  avatar: string;
  name: string;
  organization: string;
  quote: string;
}

const testimonials: TestimonialCardProps[] = [
  {
    name: 'Arjun Mehta',
    quote:
      'Collabify helped us streamline our ideation process and reduced launch time by 40%.',
    organization: 'Tech Innovators Inc',
    avatar: '/testimonials/arjun-mehta.jpg',
  },
  {
    name: 'Priya Desai',
    quote:
      'Brainstorming in real-time with remote teams has never felt so smooth!',
    organization: 'Design Masters Co',
    avatar: '/testimonials/priya-desai.jpg',
  },
  {
    name: 'Rahul Kapoor',
    quote:
      'The task manager and collaboration tools helped us hit every sprint deadline.',
    organization: 'Agile Solutions Ltd',
    avatar: '/testimonials/rahul-kapoor.jpg',
  },
];

const TestimonialCard = ({
  avatar,
  name,
  organization,
  quote,
}: TestimonialCardProps) => (
  <div className="w-[420px] h-[220px] rounded-xl bg-white/70 backdrop-blur-md border border-white/20 shadow-lg p-6 mx-3 flex gap-4 hover:bg-white/80 transition-all duration-300">
    <div className="flex-shrink-0">
      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-pink-100/80 to-pink-200/80 backdrop-blur-sm">
        <Image
          src={avatar}
          alt={name}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-between overflow-hidden">
      <div>
        <h3 className="font-bold text-gray-900 text-lg mb-1 truncate">
          {name}
        </h3>
        <p className="text-sm text-gray-500 mb-3 truncate">{organization}</p>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 overflow-ellipsis">
          {quote}
        </p>
      </div>
    </div>
  </div>
);

export default function TestimonialsCarousel() {
  return (
    <section className="py-20 px-4 bg-[#F8F7FF] bg-[url('/patterns/dot-grid.svg')] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold font-serif text-[#3F1D9B]">
            Their success stories
          </h2>
          <p className="text-[#6E6E8D] text-lg">
            See how teams are achieving more with our collaborative platform
          </p>
        </div>

        <div className="relative -mx-4">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: ['-25%', '-50%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </motion.div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="flex -space-x-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative bg-[#3F1D9B]/10 flex items-center justify-center">
                <FaUser className="text-[#3F1D9B] w-4 h-4" />
              </div>
            ))}
          </div>
          <p className="text-sm text-[#6E6E8D]">
            Over 15,725+ people gave us review
          </p>
        </div>
      </div>
    </section>
  );
}
