import React from 'react';
import { MapPin, Phone, Star } from 'lucide-react';
import SearchBar from './SearchBar';

interface CompanyHeaderProps {
  name: string;
  location: string;
  phone: string;
  rating: number;
}

const CompanyHeader = ({ name, location, phone, rating }: CompanyHeaderProps) => {
  return (
    <div className="p-6 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="bg-black p-4 rounded-full">
          <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{name}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              {phone}
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-bold">{rating}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-72">
        <SearchBar />
      </div>
    </div>
  );
};

export default CompanyHeader;