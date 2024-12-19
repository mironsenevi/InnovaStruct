import React from 'react';
import SearchBar from '../components/SearchBar';

const projectsData = [
  {
    name: "Dr. Seneviratne's two storey house",
    customer: "Pathmalal Senevirathna",
    phone: "(225) 555-0118",
    email: "sen3@microsoft.com",
    area: "Battaramulla",
    status: "Active"
  },
  {
    name: "Villa Seven",
    customer: "Omindu Abey",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    area: "Mount Lavinia",
    status: "Active"
  },
];

const Projects = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Projects</h1>
        <div className="w-72">
          <SearchBar />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Project Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Area
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projectsData.map((project) => (
              <tr key={project.email}>
                <td className="px-6 py-4 whitespace-nowrap">{project.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{project.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap">{project.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{project.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{project.area}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    project.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;