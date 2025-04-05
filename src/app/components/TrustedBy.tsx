'use client';

import React from 'react';
import { SiGoogle, SiAmazon, SiMeta, SiApple } from 'react-icons/si';

const logos = [
  //   { Icon: SiMicrosoft, name: 'Microsoft' },
  { Icon: SiGoogle, name: 'Google' },
  { Icon: SiAmazon, name: 'Amazon' },
  { Icon: SiMeta, name: 'Meta' },
  //   { Icon: SiIbmCircle, name: 'IBM' },
  { Icon: SiApple, name: 'Apple' },
];

const TrustedBy: React.FC = () => {
  return (
    <section className="w-full bg-[#F4F0FF] border-t border-[#D6D6E7]/30 shadow-[0_4px_24px_-12px_rgba(63,29,155,0.06)]">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-2">
            <p className="text-[#6E6E8D] font-medium">
              Trusted by 100+ fast-moving teams
            </p>
            <div className="inline-flex items-center gap-2 bg-[#3F1D9B]/5 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-[#3F1D9B] rounded-full animate-pulse" />
              <span className="text-sm text-[#3F1D9B] font-medium">
                Over 10,000 users onboarded in 2025
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden w-full">
            <div className="flex items-center justify-center gap-12 animate-marquee">
              {logos.concat(logos).map((logo, index) => {
                const { Icon, name } = logo;
                return (
                  <div
                    key={index}
                    className="h-10 w-32 relative opacity-80 transition-all duration-200 hover:opacity-100 hover:scale-105 flex items-center justify-center">
                    <Icon
                      className="w-12 h-12 text-[#3F1D9B]"
                      aria-label={name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
