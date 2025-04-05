'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  variant?: 'default' | 'enterprise';
  yearlyDiscount?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  isPopular,
  variant = 'default',
  yearlyDiscount,
}) => {
  const basePrice = yearlyDiscount ? price * 0.7 : price;
  const finalPrice = basePrice.toFixed(2);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`h-full rounded-xl p-8 relative ${
        variant === 'enterprise'
          ? 'bg-[#5B2EFF] text-white shadow-xl'
          : 'bg-white shadow-lg'
      }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#3F1D9B] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md">
          Most Popular
        </div>
      )}
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <h3 className="text-2xl font-serif font-bold mb-4">{title}</h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span
              className={`text-5xl font-bold ${
                variant === 'enterprise' ? 'text-white' : 'text-gray-900'
              }`}>
              ${finalPrice}
            </span>
            <span
              className={`text-base ${
                variant === 'enterprise' ? 'text-white/80' : 'text-gray-600'
              }`}>
              /user/month
            </span>
          </div>
          {yearlyDiscount && (
            <p className="text-sm text-[#26C485] font-medium">
              Save 30% yearly
            </p>
          )}
        </div>

        <button
          className={`w-full py-4 px-6 rounded-xl font-semibold mb-8 transition-all duration-300 ${
            variant === 'enterprise'
              ? 'bg-white text-[#5B2EFF] hover:bg-gray-100'
              : isPopular
              ? 'bg-[#3F1D9B] text-white hover:bg-[#4C1D95] shadow-lg shadow-[#3F1D9B]/20'
              : 'bg-[#EFEAFE] text-[#3F1D9B] hover:bg-[#F8F7FF]'
          }`}>
          {title === 'Starter' ? 'Get Started For Free' : 'Get Started'}
        </button>

        <div className="flex-grow">
          <div className="h-px w-full bg-gray-100 dark:bg-gray-800 mb-6"></div>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="rounded-full p-1 bg-[#26C485]/10">
                  <FaCheck className="flex-shrink-0 text-[#26C485] w-3 h-3" />
                </div>
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default function PricingPlans() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>(
    'monthly'
  );

  const plans = [
    {
      title: 'Starter',
      price: 12,
      features: [
        'Unlimited AI usage',
        'Premium support',
        'Customer care',
        'Collaboration tools',
      ],
    },
    {
      title: 'Pro',
      price: 17,
      features: [
        'Everything in Starter, plus:',
        'Advanced integrations',
        'Custom analytics',
        'Performance tracking',
        'Enhanced security',
      ],
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: 97,
      features: [
        'Everything in Pro, plus:',
        'Dedicated account manager',
        'Custom reporting',
        'Advanced usage metrics',
        'Priority support',
      ],
      variant: 'enterprise' as const,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-[#EFEAFE] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-semibold text-[#3F1D9B]">
            Simple, transparent pricing
          </h2>
          <p className="text-[#6E6E8D] text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your team's needs. All plans include a
            14-day free trial.
          </p>
        </div>

        <div className="flex items-center justify-center mb-16">
          <div className="bg-white rounded-full p-1.5 inline-flex shadow-lg">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-[#5B2EFF] text-white shadow'
                  : 'text-gray-600 hover:text-[#3F1D9B]'
              }`}>
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                billingPeriod === 'yearly'
                  ? 'bg-[#5B2EFF] text-white shadow'
                  : 'text-gray-600 hover:text-[#3F1D9B]'
              }`}>
              Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              yearlyDiscount={billingPeriod === 'yearly'}
            />
          ))}
        </div>

        <p className="text-center text-sm text-[#6E6E8D]">
          We donate 2% of your membership to pediatric wellbeing
        </p>
      </div>
    </section>
  );
}
