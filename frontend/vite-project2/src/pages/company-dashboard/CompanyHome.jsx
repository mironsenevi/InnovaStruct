import React from "react";
import CompanyNavbar from 'e:/InnovaStruct/frontend/vite-project2/src/components/companyNavbar';
import { Building2, FileText, Users, Settings, Plus } from "lucide-react";

const CompanyHome = () => {
  return (
    <div>
      <CompanyNavbar />
      <div className="space-y-6 p-6">
        {/* Welcome Banner */}
        <div className="bg-yellow-500 text-white p-6 rounded-lg">
          <h1 className="text-2xl font-bold">Welcome to Company Dashboard</h1>
        </div>

        {/* Featured Project */}
        <div className="bg-white rounded-lg overflow-hidden shadow">
          <img
            src="path/to/your/image.jpg"
            alt="Building Renovation"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Building Renovation</h2>
            <p className="text-gray-600">Historic building renovation project in Kandy</p>
            <div className="mt-2 text-sm text-gray-500">
              <span>Posted by: Heritage Constructors</span>
            </div>
            <div className="flex mt-2">
              <div className="flex space-x-1">
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Companies Card */}
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow card">
            <div className="flex items-center justify-between">
              <div>
                <Building2 size={32} />
                <h2 className="text-xl font-bold mt-2">Companies</h2>
                <p className="mt-2">Manage your company profiles and details</p>
                <button className="mt-4 text-sm underline flex items-center">Click to view details</button>
              </div>
            </div>
          </div>

          {/* Tenders Card */}
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow card">
            <div className="flex items-center justify-between">
              <div>
                <FileText size={32} />
                <h2 className="text-xl font-bold mt-2">Tenders</h2>
                <p className="mt-2">Access and manage tender documents</p>
                <button className="mt-4 text-sm underline flex items-center">Click to view details</button>
              </div>
              <div className="bg-white bg-opacity-20 p-2 rounded-full">
                <Plus size={24} className="text-white" />
              </div>
            </div>
          </div>

          {/* Contacts Card */}
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow card">
            <div className="flex items-center justify-between">
              <div>
                <Users size={32} />
                <h2 className="text-xl font-bold mt-2">Contacts</h2>
                <p className="mt-2">View and manage your business contacts</p>
              </div>
            </div>
          </div>

          {/* Settings Card */}
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow card">
            <div className="flex items-center justify-between">
              <div>
                <Settings size={32} />
                <h2 className="text-xl font-bold mt-2">Settings</h2>
                <p className="mt-2">Customize your account options</p>
              </div>
            </div>
          </div>
        </div>

        {/* Test Company Profile Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-md">
            Test Company Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompanyHome;