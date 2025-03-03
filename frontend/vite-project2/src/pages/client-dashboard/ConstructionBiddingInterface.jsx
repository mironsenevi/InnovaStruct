import React, { useState, useEffect } from 'react';
import { Upload, MapPin, Building, Clock, FileText, Calendar, Users } from 'lucide-react';
import ClientNavbar from '../../components/ClientNavbar';

const ConstructionBiddingInterface = () => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    budget: '',
    deadline: ''
  });

  useEffect(() => {
    const handleSidebarStateChange = (event) => {
      setIsSidebarMinimized(event.detail);
    };

    window.addEventListener('sidebarStateChange', handleSidebarStateChange);
    return () => {
      window.removeEventListener('sidebarStateChange', handleSidebarStateChange);
    };
  }, []);

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
    console.log('Form Data:', formData);
    console.log('Files:', files);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <ClientNavbar />
      <div 
        className={`flex-1 transition-all duration-300 ${
          isSidebarMinimized ? 'ml-20' : 'ml-80'
        }`}
      >
        <div className="max-w-7xl mx-auto p-6">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <Building className="h-8 w-8 text-yellow-500" />
              New Construction Project Bid
            </h1>
            <p className="text-gray-600 mt-2">Create a new bid request for your construction project</p>
          </div>

          {/* Main Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-8">
            {/* Project Details Section */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Project Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 transition-colors duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Project Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 transition-colors duration-200"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="block w-full pl-10 rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 transition-colors duration-200"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Budget Range</label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 transition-colors duration-200"
                    placeholder="e.g., $50,000 - $100,000"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Project Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 transition-colors duration-200"
                  required
                />
              </div>
            </div>

            {/* File Upload Section */}
            <div className="border-t pt-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Documents</label>
              <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-yellow-500 transition-colors duration-200">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-yellow-600 hover:text-yellow-500 transition-colors duration-200">
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
                  {files.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700">{files.length} file(s) selected</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t pt-8">
              <div className="bg-yellow-50 p-4 rounded-lg hover:bg-yellow-100 transition-colors duration-200">
                <Clock className="h-8 w-8 text-yellow-500 mb-2" />
                <h3 className="font-semibold">Quick Response</h3>
                <p className="text-sm text-gray-600">Receive bids within 48 hours</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg hover:bg-yellow-100 transition-colors duration-200">
                <Users className="h-8 w-8 text-yellow-500 mb-2" />
                <h3 className="font-semibold">Verified Contractors</h3>
                <p className="text-sm text-gray-600">Access to trusted professionals</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg hover:bg-yellow-100 transition-colors duration-200">
                <FileText className="h-8 w-8 text-yellow-500 mb-2" />
                <h3 className="font-semibold">Secure Process</h3>
                <p className="text-sm text-gray-600">Protected bidding system</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="border-t pt-8">
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02]"
              >
                Submit Bid Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConstructionBiddingInterface;