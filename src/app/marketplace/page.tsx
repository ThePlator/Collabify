'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  FaSearch,
  FaShoppingCart,
  FaStar,
  FaHeart,
  FaShareAlt,
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import CourseCreation from '../components/marketplace/CourseCreation';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  seller: {
    name: string;
    avatar: string;
    rating: number;
  };
  image: string;
  category: string;
}

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Professional Design Template Bundle',
    description: 'A collection of premium UI templates and design resources.',
    price: 49.99,
    rating: 4.8,
    reviews: 128,
    seller: {
      name: 'DesignMaster Pro',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop',
      rating: 4.9,
    },
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    category: 'Templates',
  },
  {
    id: '2',
    name: 'Project Management Course',
    description:
      'Comprehensive course on modern project management methodologies.',
    price: 79.99,
    rating: 4.7,
    reviews: 256,
    seller: {
      name: 'PM Academy',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop',
      rating: 4.8,
    },
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    category: 'Courses',
  },
  {
    id: '3',
    name: 'Premium Icon Pack',
    description: '1000+ customizable vector icons for modern applications.',
    price: 29.99,
    rating: 4.9,
    reviews: 89,
    seller: {
      name: 'IconCraft',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
      rating: 4.7,
    },
    image:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',
    category: 'Resources',
  },
];

export default function Marketplace() {
  const [activeNav, setActiveNav] = useState('marketplace');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreatingCourse, setIsCreatingCourse] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);

  return (
    <div className="min-h-screen bg-[#F4F0FF] flex">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#2A175E] mb-2">
                Marketplace
              </h1>
              <p className="text-[#6E6E8D]">
                Discover and purchase amazing resources for your projects
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsCreatingCourse(!isCreatingCourse)}
                className="px-4 py-2 bg-gradient-to-r from-[#3F1D9B] to-[#6747C7] text-white rounded-xl hover:opacity-90 transition-all">
                {isCreatingCourse ? 'View Marketplace' : 'Create Course'}
              </button>
              <button className="relative p-2 text-[#3F1D9B] hover:bg-[#3F1D9B]/10 rounded-full transition-colors">
                <FaShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#3F1D9B] text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>

          {isCreatingCourse ? (
            <CourseCreation />
          ) : (
            <>
              <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Search Bar */}
                  <div className="flex-1 relative">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6E6E8D]" />
                    <input
                      type="text"
                      placeholder="Search products, templates, or resources"
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] text-gray-800 placeholder-gray-500"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  {/* Category Filter */}
                  <select
                    className="px-4 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] bg-white text-gray-800"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="all">All Categories</option>
                    <option value="templates">Templates</option>
                    <option value="courses">Courses</option>
                    <option value="resources">Resources</option>
                  </select>

                  {/* Price Range Filter */}
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-24 px-3 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] text-gray-800"
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([Number(e.target.value), priceRange[1]])
                      }
                    />
                    <span className="text-[#6E6E8D]">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-24 px-3 py-3 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20 focus:border-[#3F1D9B] text-gray-800"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Number(e.target.value)])
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    {/* Product Image */}
                    <div className="relative group">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <button className="p-2 bg-white rounded-full hover:bg-[#3F1D9B] hover:text-white transition-colors">
                          <FaHeart className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-white rounded-full hover:bg-[#3F1D9B] hover:text-white transition-colors">
                          <FaShareAlt className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-lg font-semibold text-[#2A175E] line-clamp-2">
                          {product.name}
                        </h3>
                        <span className="text-lg font-bold text-[#3F1D9B] whitespace-nowrap">
                          ${product.price}
                        </span>
                      </div>

                      <p className="text-sm text-[#6E6E8D] mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Image
                            src={product.seller.avatar}
                            alt={product.seller.name}
                            width={32}
                            height={32}
                            className="rounded-full object-cover"
                          />
                          <div>
                            <p className="text-sm font-medium text-[#2A175E]">
                              {product.seller.name}
                            </p>
                            <div className="flex items-center gap-1">
                              <FaStar className="w-3 h-3 text-yellow-400" />
                              <span className="text-xs text-[#6E6E8D]">
                                {product.seller.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaStar className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm font-medium text-[#2A175E]">
                            {product.rating}
                          </span>
                          <span className="text-xs text-[#6E6E8D]">
                            ({product.reviews})
                          </span>
                        </div>
                      </div>

                      <button className="w-full py-2 bg-[#3F1D9B] text-white rounded-lg hover:bg-[#331580] transition-colors text-sm font-medium">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
