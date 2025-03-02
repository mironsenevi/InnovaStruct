import React, { useState } from "react";
import ClientNavbar from "../../components/ClientNavbar";
import { Upload, MapPin, FileText, Calendar, Users, Clock, Building } from 'lucide-react';

export default function CreateTender() {
  const [tender, setTender] = useState({
    title: "",
    description: "",
    plan: "",
    boq: "",
    budget: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setTender({ ...tender, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setTender({ ...tender, [e.target.name]: selectedFiles });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/tenders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tender),
    });
    if (response.ok) alert("Tender Created Successfully!");
  };

  return (
    <div className="flex">
      <ClientNavbar />
      <div className="flex-1 ml-0 sm:ml-64 p-4 sm:p-8 transition-all duration-300 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <Building className="h-8 w-8 text-yellow-500" />
              Create Tender
            </h1>
            <p className="text-gray-600 mt-2">Create a new tender for your project</p>
          </div>

          {/* Main Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
            {/* Project Details Section */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={tender.title}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={tender.description}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Plan URL</label>
                  <input
                    type="text"
                    name="plan"
                    value={tender.plan}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">BOQ URL</label>
                  <input
                    type="text"
                    name="boq"
                    value={tender.boq}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Budget</label>
                  <input
                    type="number"
                    name="budget"
                    value={tender.budget}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Deadline</label>
                  <input
                    type="date"
                    name="deadline"
                    value={tender.deadline}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                    required
                  />
                </div>
              </div>

              {/* File Upload Section */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Documents</label>
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

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <Clock className="h-8 w-8 text-yellow-500 mb-2" />
                <h3 className="font-semibold">Quick Response</h3>
                <p className="text-sm text-gray-600">Receive bids within 48 hours</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <Users className="h-8 w-8 text-yellow-500 mb-2" />
                <h3 className="font-semibold">Verified Contractors</h3>
                <p className="text-sm text-gray-600">Access to trusted professionals</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <FileText className="h-8 w-8 text-yellow-500 mb-2" />
                <h3 className="font-semibold">Secure Process</h3>
                <p className="text-sm text-gray-600">Protected bidding system</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Submit Tender
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}