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
        <select
          className="px-4 py-2 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}>
          <option value="">All Types</option>
          <option value="course">Courses</option>
          <option value="product">Products</option>
        </select>
        <select
          className="px-4 py-2 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#D6D6E7]">
              <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                Title
              </th>
              <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                Type
              </th>
              <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                Creator
              </th>
              <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                Price
              </th>
              <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                Category
              </th>
              <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                Status
              </th>
              <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                Submitted
              </th>
              <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr
                key={product.id}
                className="border-b border-[#D6D6E7] hover:bg-[#F4F0FF]/50">
                <td className="py-4 px-4 text-[#2A175E] font-medium">
                  {product.title}
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      product.type === 'course'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                    {product.type.charAt(0).toUpperCase() +
                      product.type.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-4 text-[#2A175E]">{product.creator}</td>
                <td className="py-4 px-4 text-[#2A175E]">{product.price}</td>
                <td className="py-4 px-4 text-[#2A175E]">{product.category}</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      product.status === 'approved'
                        ? 'bg-green-100 text-green-700'
                        : product.status === 'rejected'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                    {product.status.charAt(0).toUpperCase() +
                      product.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-4">{product.submittedAt}</td>
                <td className="py-4 px-4">
                  <div className="flex gap-2">
                    <button
                      className="p-2 text-[#3F1D9B] hover:bg-[#F4F0FF] rounded-lg transition-colors"
                      title="View Details">
                      <FaEye className="w-4 h-4" />
                    </button>
                    {product.status === 'pending' && (
                      <>
                        <button
                          onClick={() =>
                            handleStatusChange(product.id, 'approved')
                          }
                          className="p-2 text-green-500 hover:bg-green-50 rounded-lg transition-colors"
                          title="Approve">
                          <FaCheck className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() =>
                            handleStatusChange(product.id, 'rejected')
                          }
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Reject">
                          <FaTimes className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
