import React, { useState } from 'react';
import { Upload, MapPin, Users, Shield, Building, Clock } from 'lucide-react';
import CompanyNavbar from '../../components/CompanyNavbar'; 

const CompanyBiddingForm = () => {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    projectTitle: '',
    bidAmount: '',
    completionYears: '',
    completionMonths: '',
    description: '',
    location: ''
  });

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
    console.log('Files:', files);
  };

  return (
    <div className="flex">
      <CompanyNavbar />
      <div className="flex-1 p-4 sm:p-8 transition-all duration-300 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <Building className="h-8 w-8 text-yellow-500" />
              Submit a Bid Request
            </h1>
            <p className="text-gray-600 mt-2">Submit your bid for the client's project</p>
          </div>

          {/* Main Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
            {/* Project Details Section */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Project Title</label>
                <input
                  type="text"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Bid Amount</label>
                <input
                  type="text"
                  name="bidAmount"
                  value={formData.bidAmount}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                  placeholder="e.g., $50,000"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Completion Time</label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <select
                      name="completionYears"
                      value={formData.completionYears}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                      required
                    >
                      <option value="">Years</option>
                      {[...Array(11).keys()].map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      name="completionMonths"
                      value={formData.completionMonths}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                      required
                    >
                      <option value="">Months</option>
                      {[...Array(12).keys()].map(month => (
                        <option key={month} value={month}>{month}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Project Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="block w-full pl-10 rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                    required
                  />
                </div>
              </div>

              {/* file Upload Section */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Supporting Documents</label>
                <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-yellow-600 hover:text-yellow-500">
                        <span>Upload files</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          multiple
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB each</p>
                  </div>
                </div>
              </div>
            </div>

            {/* info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <Clock className="h-8 w-8 text-yellow-500 mb-2" />
                <h3 className="font-semibold">Timely Completion</h3>
                <p className="text-sm text-gray-600">Ensure timely completion of the project</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <Users className="h-8 w-8 text-yellow-500 mb-2" />
                <h3 className="font-semibold">Experienced Team</h3>
                <p className="text-sm text-gray-600">Work with a team of experienced professionals</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <Shield className="h-8 w-8 text-yellow-500 mb-2" />
                <h3 className="font-semibold">Secure Process</h3>
                <p className="text-sm text-gray-600">Protected and secure bidding process</p>
              </div>
            </div>

            {/* submit button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Submit Bid
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyBiddingForm;