import { useState } from 'react';
import { Search } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Office Building Extension',
      contractor: 'Commercial Builders',
      startDate: '1 Jan 2024',
      completion: '30 Nov 2024',
      budget: '$1,200,000',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Kitchen Renovation',
      contractor: 'Elite Interiors',
      startDate: '5 Apr 2024',
      completion: '12 Dec 2024',
      budget: '$35000',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Backyard Landscaping',
      contractor: 'Greenscape Solution',
      startDate: '10 Feb 2024',
      completion: '25 Apr 2024',
      budget: '$15000',
      status: 'Completed'
    },
    {
      id: 4,
      name: 'Roof Replacement',
      contractor: 'TopNotch Roofing',
      startDate: '20 May 2024',
      completion: '10 Jun 2024',
      budget: '$22000',
      status: 'Completed'
    },
    {
      id: 5,
      name: 'Basement Finishing',
      contractor: 'SubLevel Experts',
      startDate: '10 Dec 2024',
      completion: '-',
      budget: '$60000',
      status: 'Scheduled'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-emerald-100 text-emerald-600';
      case 'Completed': return 'bg-yellow-100 text-yellow-600';
      case 'Scheduled': return 'bg-blue-100 text-blue-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">All Projects</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200"
            />
          </div>
          <select className="px-4 py-2 rounded-lg border border-gray-200">
            <option>Short by: Newest</option>
            <option>Oldest</option>
            <option>Budget: High to Low</option>
            <option>Budget: Low to High</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Project Name</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Contractor Name</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Start Date</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Expected Completion</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Budget</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="px-6 py-4">{project.name}</td>
                <td className="px-6 py-4">{project.contractor}</td>
                <td className="px-6 py-4">{project.startDate}</td>
                <td className="px-6 py-4">{project.completion}</td>
                <td className="px-6 py-4">{project.budget}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Showing data 1 to 8 of 256K entries</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded border">&lt;</button>
              <button className="px-3 py-1 rounded bg-yellow-400 text-white">1</button>
              <button className="px-3 py-1 rounded border">2</button>
              <button className="px-3 py-1 rounded border">3</button>
              <button className="px-3 py-1 rounded border">4</button>
              <button className="px-3 py-1 rounded border">...</button>
              <button className="px-3 py-1 rounded border">40</button>
              <button className="px-3 py-1 rounded border">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}