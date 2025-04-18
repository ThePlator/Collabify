'use client';

import { useState } from 'react';
import { FaSearch, FaCheck, FaTimes, FaEye } from 'react-icons/fa';

interface Product {
  id: string;
  title: string;
  type: 'course' | 'product';
  creator: string;
  price: string;
  category: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}

const sampleProducts: Product[] = [
  {
    id: '1',
    title: 'Advanced Web Development Course',
    type: 'course',
    creator: 'Tech Academy',
    price: '$99.99',
    category: 'Development',
    status: 'pending',
    submittedAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'UI Design Templates Bundle',
    type: 'product',
    creator: 'DesignPro Studio',
    price: '$49.99',
    category: 'Design',
    status: 'approved',
    submittedAt: '2024-01-14',
  },
  {
    id: '3',
    title: 'Digital Marketing Masterclass',
    type: 'course',
    creator: 'Marketing Experts',
    price: '$149.99',
    category: 'Marketing',
    status: 'rejected',
    submittedAt: '2024-01-13',
  },
];

export default function ProductApprovals() {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.creator.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType ? product.type === selectedType : true;
    const matchesStatus = selectedStatus
      ? product.status === selectedStatus
      : true;
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleStatusChange = (
    productId: string,
    newStatus: 'approved' | 'rejected'
  ) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, status: newStatus } : product
      )
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#2A175E] mb-2">
          Product & Course Approvals
        </h2>
        <p className="text-[#6E6E8D]">
          Review and moderate product and course listings
        </p>
      </div>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6E6E8D]" />
          <input
            type="text"
            placeholder="Search products or courses..."
            className="w-full pl-12 pr-4 py-2 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <select
            className="w-full sm:w-48 px-4 py-2 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}>
            <option value="">All Types</option>
            <option value="course">Course</option>
            <option value="product">Product</option>
          </select>
          <select
            className="w-full sm:w-48 px-4 py-2 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}>
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg border border-[#D6D6E7] p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#2A175E] mb-1">
                    {product.title}
                  </h3>
                  <p className="text-[#6E6E8D] text-sm">{product.creator}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    product.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : product.status === 'approved'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                  {product.status.charAt(0).toUpperCase() +
                    product.status.slice(1)}
                </span>
              </div>

              <div className="space-y-2 text-sm text-[#6E6E8D]">
                <p>
                  Type:{' '}
                  {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
                </p>
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>
                <p>
                  Date: {new Date(product.submittedAt).toLocaleDateString()}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <button
                  onClick={() => handleStatusChange(product.id, 'approved')}
                  disabled={product.status !== 'pending'}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
                  <FaCheck className="w-4 h-4" />
                  <span>Approve</span>
                </button>
                <button
                  onClick={() => handleStatusChange(product.id, 'rejected')}
                  disabled={product.status !== 'pending'}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
                  <FaTimes className="w-4 h-4" />
                  <span>Reject</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[#D6D6E7] text-[#6E6E8D] hover:bg-[#F4F0FF] transition-colors duration-200">
                  <FaEye className="w-4 h-4" />
                  <span>View</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
