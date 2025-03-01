import { useState } from "react";
import { Plus, Calendar, Building } from "lucide-react";

const tenders = [
  {
    title: "Building Renovation",
    description: "Historic building renovation project in Kandy",
    company: "Heritage Constructors",
    deadline: "2025-03-15",
    status: "Open",
  },
  {
    title: "Office Complex Construction",
    description: "New office complex construction in Colombo",
    company: "Modern Builders",
    deadline: "2025-04-10",
    status: "Open",
  },
  {
    title: "Residential Housing Project",
    description: "Residential housing development in Galle",
    company: "Urban Developers",
    deadline: "2025-03-30",
    status: "Open",
  },
  {
    title: "Highway Expansion",
    description: "Expansion of the main highway between cities",
    company: "Roadway Constructions",
    deadline: "2025-05-20",
    status: "Open",
  },
  {
    title: "Shopping Mall Construction",
    description: "Construction of a new shopping mall in Colombo",
    company: "City Developers",
    deadline: "2025-06-15",
    status: "Open",
  },
  {
    title: "Airport Terminal Upgrade",
    description: "Modernization of the airport terminal in Negombo",
    company: "Skyline Engineers",
    deadline: "2025-07-01",
    status: "Open",
  },
];

export default function CompanyHome() {
  const [search, setSearch] = useState("");

  const filteredTenders = tenders.filter((tender) =>
    tender.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tenders</h1>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center gap-2">
          <Plus size={16} /> Add Tender
        </button>
      </div>
      <input
        type="text"
        placeholder="Search tenders..."
        className="w-full p-2 border rounded mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:grid-rows-3">
        {filteredTenders.map((tender, index) => (
          <div key={index} className="p-4 border rounded flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold">{tender.title}</h2>
              <p className="text-sm text-gray-600">{tender.description}</p>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <Building size={16} className="mr-2" /> {tender.company}
              </div>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Calendar size={16} className="mr-2" /> Deadline: {tender.deadline}
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">{tender.status}</span>
              <button className="bg-yellow-500 text-white px-3 py-1 rounded">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
