import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

export default function Constructors() {
  const [location, setLocation] = useState('Colombo');
  const constructors = [
    {
      id: 1,
      name: 'DP Construction',
      location: 'Jl. Sultan Iskandar Muda',
      distance: '1.8 km',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
    },
    {
      id: 2,
      name: 'KSJ Construction',
      location: 'Jl. Cilandak Tengah',
      distance: '3.0 km',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9'
    },
    {
      id: 3,
      name: 'MVK Construction',
      location: 'Jl. Cilandak Tengah',
      distance: '3.0 km',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d'
    },
    {
      id: 4,
      name: 'EEE Construction',
      location: 'Jl. Cilandak Tengah',
      distance: '3.0 km',
      image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc'
    }
  ];

  const bestConstructors = [
    {
      id: 1,
      name: 'KSJ Constructions',
      rate: 'Rp. 2,500,000,000 / Year',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
    },
    {
      id: 2,
      name: 'EEE Construction',
      rate: 'Rp. 2,000,000,000 / Year',
      image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-gray-600">Location</p>
          <select 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 text-xl font-semibold bg-transparent"
          >
            <option value="Colombo">Colombo</option>
            <option value="Kandy">Kandy</option>
          </select>
        </div>
        <div className="flex gap-4">
          <button className="p-2 rounded-full bg-white shadow-sm">
            <Search size={24} />
          </button>
          <button className="p-2 rounded-full bg-yellow-400">
            <Filter size={24} className="text-white" />
          </button>
        </div>
      </div>

      <div className="flex gap-4 mb-8">
        <button className="px-4 py-2 bg-yellow-400 text-white rounded-full">House</button>
        <button className="px-4 py-2 bg-gray-100 rounded-full">Large scale</button>
        <button className="px-4 py-2 bg-gray-100 rounded-full">Hotel</button>
        <button className="px-4 py-2 bg-gray-100 rounded-full">Villa</button>
        <button className="px-4 py-2 bg-gray-100 rounded-full">More</button>
      </div>

      <div className="mb-8">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Near from you</h2>
          <button className="text-gray-500">See more</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {constructors.map((constructor) => (
            <div key={constructor.id} className="relative rounded-xl overflow-hidden">
              <img 
                src={constructor.image} 
                alt={constructor.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded">
                {constructor.distance}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <h3 className="font-semibold">{constructor.name}</h3>
                <p className="text-sm">{constructor.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Best for you</h2>
          <button className="text-gray-500">See more</button>
        </div>
        <div className="space-y-4">
          {bestConstructors.map((constructor) => (
            <div key={constructor.id} className="flex items-center gap-4 bg-white p-4 rounded-lg">
              <img 
                src={constructor.image} 
                alt={constructor.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold">{constructor.name}</h3>
                <p className="text-sm text-blue-500">{constructor.rate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}