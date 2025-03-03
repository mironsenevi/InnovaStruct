import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ClientNavbar from '../../components/ClientNavbar';

const ClientTender = () => {
  return (
    <div>
      <ClientNavbar />
      <div className="p-4 sm:p-8">
        <h1 className="text-2xl font-bold mb-4">Tender Page</h1>
        <Link to="/tender/create" className="text-blue-500 hover:underline">
          + Create Tender
        </Link>
      </div>
    </div>
  );
};

export default ClientTender;