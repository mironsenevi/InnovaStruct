import React from 'react';
import { Link } from 'react-router-dom';
import ClientNavbar from '../../components/ClientNavbar';

const ClientTender = () => {
  return (
    <div className="flex min-h-screen">
      <ClientNavbar />
      <div className="flex-1 p-4 sm:p-8 transition-all duration-300 ml-0 sm:ml-64">
        <div className="max-w-7xl mx-auto">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Tender Page</h1>
            <Link to="/tender/create" className="text-blue-500 hover:underline flex items-center">
              <span className="bg-green-500 text-white rounded-full p-1 mr-2">+</span>
              Create Tender
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTender;