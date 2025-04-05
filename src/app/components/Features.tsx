'use client';

import { BiData } from 'react-icons/bi';
import { BsGraphUp, BsArrowUpRight, BsArrowDownRight } from 'react-icons/bs';
import { HiOutlineChartBar } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';

interface FeatureCardProps {
  icon?: React.ElementType;
  title: string;
  description?: string;
  variant?: 'default' | 'chart' | 'competitors' | 'research';
  chartData?: { month: string; visitors: number }[];
  competitors?: { name: string; growth: number }[];
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  variant = 'default',
  chartData,
  competitors,
}: FeatureCardProps) => {
  if (variant === 'research') {
    return (
      <div className="p-6 bg-[#EFEAFE] rounded-xl shadow-sm hover:shadow-md transition-all duration-200 h-[250px] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[330px] bg-white p-6 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
          <p className="text-sm text-gray-600 mb-6">{description}</p>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-[#5B2EFF]/10 border-2 border-white"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">3 collaborators</span>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>2 files</span>
            <span>4 comments</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'chart') {
    return (
      <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 h-[250px]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[#5B2EFF]">{title}</h3>
          <HiOutlineChartBar className="w-5 h-5 text-[#5B2EFF]" />
        </div>
        <div className="h-32 w-full bg-[#EFEAFE] rounded-lg relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
            {chartData?.map((data, i) => (
              <div
                key={i}
                className="w-1/6 bg-[#5B2EFF] mx-0.5 rounded-t transition-all duration-300 hover:opacity-80"
                style={{ height: `${(data.visitors / 1000) * 100}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'competitors') {
    return (
      <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 h-[250px]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[#5B2EFF]">{title}</h3>
          <FiUsers className="w-5 h-5 text-[#5B2EFF]" />
        </div>
        <div className="space-y-3">
          {competitors?.map((competitor, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{competitor.name}</span>
              <div className="flex items-center gap-2">
                {competitor.growth >= 0 ? (
                  <BsArrowUpRight className="w-4 h-4 text-[#26C485]" />
                ) : (
                  <BsArrowDownRight className="w-4 h-4 text-red-500" />
                )}
                <span
                  className={`text-sm font-medium ${
                    competitor.growth >= 0 ? 'text-[#26C485]' : 'text-red-500'
                  }`}>
                  {Math.abs(competitor.growth)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 h-[250px]">
      {Icon && (
        <div className="bg-[#EFEAFE] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-[#5B2EFF]" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </div>
  );
};

export default function Features() {
  const chartData = [
    { month: 'Jan', visitors: 600 },
    { month: 'Feb', visitors: 800 },
    { month: 'Mar', visitors: 750 },
    { month: 'Apr', visitors: 900 },
    { month: 'May', visitors: 850 },
    { month: 'Jun', visitors: 950 },
  ];

  const competitors = [
    { name: 'Competitor A', growth: 12.5 },
    { name: 'Competitor B', growth: -8.3 },
    { name: 'Competitor C', growth: 15.7 },
  ];

  const features = [
    {
      icon: BiData,
      title: 'Data-driven Insights',
      description:
        'Make informed decisions with comprehensive analytics and reporting.',
    },
    {
      icon: BsGraphUp,
      title: 'Visual Analytics',
      description:
        'Transform complex data into clear, actionable visualizations.',
    },
    {
      title: 'Research Analytics',
      description:
        'Collaborate on research findings with team members in real-time.',
      variant: 'research' as const,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-[#EFEAFE] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-semibold text-[#3F1D9B]">
            Powerful analytics at your fingertips
          </h2>
          <p className="text-[#6E6E8D] text-lg max-w-xl mx-auto">
            Make data-driven decisions with our comprehensive suite of analytics
            tools
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            title="Monthly Visitors"
            variant="chart"
            chartData={chartData}
          />
          <FeatureCard
            title="Competitor Insights"
            variant="competitors"
            competitors={competitors}
          />
        </div>
      </div>
    </section>
  );
}
