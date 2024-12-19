import React from 'react';
import CompanyHeader from '../components/CompanyHeader';
import ProjectCard from '../components/ProjectCard';
import { Home } from 'lucide-react';

const recentProjects = [
  {
    title: "Dr. Seneviratne's two storey house",
    location: "Battaramulla",
    rating: 3.1,
    description: "A two-story house with an open living area downstairs and cozy bedrooms upstairs, including a master suite with a balcony. Perfect for family living.",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80",
    distance: "1.8 km"
  },
  {
    title: "Villa Seven",
    location: "Mount Lavinia",
    rating: 3.1,
    description: "Modern beachfront villa with panoramic ocean views, featuring contemporary architecture and sustainable design elements.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80",
    distance: "2.3 km"
  }
];

const Portfolio = () => {
  return (
    <div>
      <CompanyHeader 
        name="DP Constructions"
        location="Mount Lavinia"
        phone="0777123456"
        rating={3.1}
      />
      <div className="px-6">
        <div className="flex items-center gap-2 mb-6">
          <Home className="w-5 h-5" />
          <h2 className="text-xl font-bold">Recent Projects</h2>
        </div>
        <div className="space-y-4">
          {recentProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;