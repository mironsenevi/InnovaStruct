import React, { useState, useEffect } from "react";
import CompanyNavbar from "../../components/CompanyNavbar";

export default function TenderList({ onSelectTender }) {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    fetch("/api/tenders")
      .then((res) => res.json())
      .then((data) => setTenders(data));
  }, []);

  return (
    <div className="flex">
      <CompanyNavbar />
      <div className="flex-1 ml-0 sm:ml-64 p-4 sm:p-8 transition-all duration-300 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Live Tenders</h2>
            {tenders.length === 0 ? (
              <p className="text-gray-500">No tenders available</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full border rounded-lg">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
                      <th className="px-4 py-2">Tender ID</th>
                      <th className="px-4 py-2">Client</th>
                      <th className="px-4 py-2">Status</th>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tenders.map((tender) => (
                      <tr key={tender.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">{tender.id}</td>
                        <td className="px-4 py-2 flex items-center space-x-2">
                          <img
                            src={tender.clientAvatar || "/default-avatar.png"}
                            alt={tender.client}
                            className="w-6 h-6 rounded-full"
                          />
                          <span>{tender.client}</span>
                        </td>
                        <td className="px-4 py-2">
                          <span className="bg-green-200 text-green-700 px-2 py-1 text-xs rounded">
                            {tender.status}
                          </span>
                        </td>
                        <td className="px-4 py-2">{tender.date}</td>
                        <td className="px-4 py-2">
                          <button
                            className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                            onClick={() => onSelectTender(tender.id)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}