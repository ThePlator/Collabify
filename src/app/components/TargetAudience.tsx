'use client';

import {
  FaUserTie,
  FaGraduationCap,
  FaLaptopCode,
  FaBuilding,
} from 'react-icons/fa';

interface AudienceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const AudienceCard = ({
  icon: Icon,
  title,
  description,
}: AudienceCardProps) => (
  <div className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 border border-[#D6D6E7]">
    <div className="flex flex-col items-center text-center">
      <Icon className="w-12 h-12 text-[#3F1D9B] mb-4" />
      <h3 className="text-xl font-semibold text-[#2A175E] mb-2">{title}</h3>
      <p className="text-[#5A5A6F]">{description}</p>
    </div>
  </div>
);

export default function TargetAudience() {
  const audiences = [
    {
      icon: FaUserTie,
      title: 'Job Seekers',
      description:
        'Find your dream job with personalized recommendations and direct connections to employers.',
    },
    {
      icon: FaGraduationCap,
      title: 'Students',
      description:
        'Access quality courses and gain practical experience through real-world projects.',
    },
    {
      icon: FaLaptopCode,
      title: 'Freelancers',
      description:
        'Connect with clients, showcase your portfolio, and manage your freelance business efficiently.',
    },
    {
      icon: FaBuilding,
      title: 'Business Owners',
      description:
        'Find talented professionals, post jobs, and grow your business with our comprehensive tools.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#F4F0FF] to-[#FDFDFF]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#2A175E] mb-12">
          Who We Serve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <AudienceCard key={index} {...audience} />
          ))}
        </div>
      </div>
    </section>
  );
}
