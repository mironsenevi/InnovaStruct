import React, { useState, useEffect } from "react";
import ClientNavbar from "../../components/ClientNavbar";

function BidList({ tenderId }) {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    if (tenderId) {
      fetch(`/api/bids/${tenderId}`)
        .then((res) => res.json())
        .then((data) => setBids(data));
    }
  }, [tenderId]);

  return (
    <div className="flex">
      <ClientNavbar />
      <div className="flex-1 ml-0 sm:ml-64 p-4 sm:p-8 transition-all duration-300 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Bids for this Tender</h2>
            {bids.length === 0 ? (
              <p>No bids yet</p>
            ) : (
              <ul className="space-y-2">
                {bids.map((bid) => (
                  <li key={bid.id} className="p-4 border rounded">
                    <p><strong>Amount:</strong> ${bid.bidAmount}</p>
                    <p><strong>Details:</strong> {bid.bidDetails}</p>
                    <p><strong>Submitted At:</strong> {new Date(bid.submittedAt).toLocaleString()}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BidList;