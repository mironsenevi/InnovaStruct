import React from 'react';
import { MapPin, Star } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  location: string;
  rating: number;
  description: string;
  imageUrl: string;
  distance?: string;
}

const ProjectCard = ({ title, location, rating, description, imageUrl, distance }: ProjectCardProps) => {
  return (
    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
      <div className="p-6 flex gap-6">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold">{title}</h3>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-xl font-bold">{rating}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="relative w-72 h-48">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
          {distance && (
            <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {distance}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;