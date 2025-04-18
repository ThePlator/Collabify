'use client';

import { useState } from 'react';
import {
  FaSearch,
  FaDownload,
  FaChartLine,
  FaDollarSign,
} from 'react-icons/fa';

interface Transaction {
  id: string;
  type: 'course_purchase' | 'product_sale' | 'subscription' | 'refund';
  amount: number;
  status: 'completed' | 'pending' | 'failed' | 'refunded';
  customer: string;
  merchant: string;
  date: string;
}

const sampleTransactions: Transaction[] = [
  {
    id: 'T1',
    type: 'course_purchase',
    amount: 99.99,
    status: 'completed',
    customer: 'john.doe@example.com',
    merchant: 'Tech Academy',
    date: '2024-01-15 14:30:00',
  },
  {
    id: 'T2',
    type: 'product_sale',
    amount: 49.99,
    status: 'completed',
    customer: 'jane.smith@example.com',
    merchant: 'DesignPro Studio',
    date: '2024-01-15 12:15:00',
  },
  {
    id: 'T3',
    type: 'subscription',
    amount: 29.99,
    status: 'pending',
    customer: 'mike.wilson@example.com',
    merchant: 'Collabify Platform',
    date: '2024-01-15 10:45:00',
  },
  {
    id: 'T4',
    type: 'refund',
    amount: -99.99,
    status: 'refunded',
    customer: 'sarah.brown@example.com',
    merchant: 'Tech Academy',
    date: '2024-01-14 16:20:00',
  },
];

export default function TransactionDashboard() {
  const [transactions, setTransactions] =
    useState<Transaction[]>(sampleTransactions);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType ? transaction.type === selectedType : true;
    const matchesStatus = selectedStatus
      ? transaction.status === selectedStatus
      : true;
    return matchesSearch && matchesType && matchesStatus;
  });

  const totalRevenue = transactions
    .filter((t) => t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalRefunds = Math.abs(
    transactions
      .filter((t) => t.status === 'refunded')
      .reduce((sum, t) => sum + t.amount, 0)
  );

  const pendingAmount = transactions
    .filter((t) => t.status === 'pending')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <FaDollarSign className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">
              +12.5% vs last month
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#2A175E]">
            ${totalRevenue.toFixed(2)}
          </h3>
          <p className="text-[#6E6E8D]">Total Revenue</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-100 rounded-lg">
              <FaDownload className="w-6 h-6 text-red-600" />
            </div>
            <span className="text-sm text-red-600 font-medium">
              +2.3% vs last month
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#2A175E]">
            ${totalRefunds.toFixed(2)}
          </h3>
          <p className="text-[#6E6E8D]">Total Refunds</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <FaChartLine className="w-6 h-6 text-yellow-600" />
            </div>
            <span className="text-sm text-yellow-600 font-medium">Pending</span>
          </div>
          <h3 className="text-2xl font-bold text-[#2A175E]">
            ${pendingAmount.toFixed(2)}
          </h3>
          <p className="text-[#6E6E8D]">Pending Transactions</p>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#2A175E] mb-2">
            Recent Transactions
          </h2>
          <p className="text-[#6E6E8D]">Monitor and track all transactions</p>
        </div>

        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6E6E8D]" />
            <input
              type="text"
              placeholder="Search transactions..."
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
            <option value="course_purchase">Course Purchase</option>
            <option value="product_sale">Product Sale</option>
            <option value="subscription">Subscription</option>
            <option value="refund">Refund</option>
          </select>
          <select
            className="px-4 py-2 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}>
            <option value="">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
            <option value="refunded">Refunded</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#D6D6E7]">
                <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                  ID
                </th>
                <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                  Type
                </th>
                <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                  Amount
                </th>
                <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                  Status
                </th>
                <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                  Customer
                </th>
                <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                  Merchant
                </th>
                <th className="text-left py-4 px-4 text-[#2A175E] font-semibold">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-[#D6D6E7] hover:bg-[#F4F0FF]/50">
                  <td className="py-4 px-4 text-[#2A175E] font-medium">
                    {transaction.id}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        transaction.type === 'course_purchase'
                          ? 'bg-blue-100 text-blue-700'
                          : transaction.type === 'product_sale'
                          ? 'bg-purple-100 text-purple-700'
                          : transaction.type === 'subscription'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                      {transaction.type
                        .split('_')
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(' ')}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={
                        transaction.amount < 0
                          ? 'text-red-600'
                          : 'text-green-600'
                      }>
                      ${Math.abs(transaction.amount).toFixed(2)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        transaction.status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : transaction.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : transaction.status === 'failed'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                      {transaction.status.charAt(0).toUpperCase() +
                        transaction.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-[#2A175E]">
                    {transaction.customer}
                  </td>
                  <td className="py-4 px-4 text-[#2A175E]">
                    {transaction.merchant}
                  </td>
                  <td className="py-4 px-4 text-[#2A175E]">
                    {transaction.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
