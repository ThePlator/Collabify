'use client';

export default function ConnectionsPage() {
  const connections = [
    { id: 1, name: 'Connection 1', status: 'Active', type: 'Direct' },
    { id: 2, name: 'Connection 2', status: 'Inactive', type: 'Proxy' },
    { id: 3, name: 'Connection 3', status: 'Active', type: 'Direct' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F9FF] to-[#F1F2FF]">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#3F1D9B] to-[#6747C7] tracking-tight">
          Connections
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {connections.map((connection) => (
            <div
              key={connection.id}
              className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-gray-100/50 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#3F1D9B] to-[#6747C7]">
                  {connection.name}
                </h2>
                <span
                  className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                    connection.status === 'Active'
                      ? 'bg-green-100/80 text-green-700 ring-1 ring-green-700/10'
                      : 'bg-gray-100/80 text-gray-600 ring-1 ring-gray-500/10'
                  }`}>
                  {connection.status}
                </span>
              </div>
              <div className="flex items-center text-gray-600 mb-6">
                <span className="text-sm font-medium">{connection.type}</span>
              </div>
              <div className="flex space-x-4">
                <button className="flex-1 px-6 py-2.5 bg-gradient-to-r from-[#3F1D9B] to-[#6747C7] text-white rounded-xl hover:opacity-90 transition-all duration-200 text-sm font-medium shadow-lg shadow-indigo-500/20">
                  Manage
                </button>
                <button className="flex-1 px-6 py-2.5 border-2 border-[#3F1D9B] text-[#3F1D9B] rounded-xl hover:bg-[#3F1D9B] hover:text-white transition-all duration-200 text-sm font-medium">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
