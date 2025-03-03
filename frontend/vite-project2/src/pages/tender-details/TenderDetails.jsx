import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockTenders } from '../../data/mockData';

export default function TenderDetails() {
  const { tenderId } = useParams();
  const [tender, setTender] = useState(null);

  useEffect(() => {
    const tenderData = mockTenders.find(t => t.id === parseInt(tenderId, 10));
    setTender(tenderData);
  }, [tenderId]);

  if (!tender) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">{tender.title}</h2>
      <p>{tender.description}</p>
      <p><strong>Budget:</strong> ${tender.budget}</p>
      <p><strong>Deadline:</strong> {new Date(tender.deadline).toDateString()}</p>

      {/* Display Uploaded Files */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Plan File</h3>
        <a href={tender.planUrl} target="_blank" className="text-blue-600 underline">View Plan</a>

        <h3 className="text-lg font-semibold mt-2">BOQ File</h3>
        <a href={tender.boqUrl} target="_blank" className="text-blue-600 underline">View BOQ</a>
      </div>
    </div>
  );
}