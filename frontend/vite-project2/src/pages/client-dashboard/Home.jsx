import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Users, FileText, Settings, Plus } from 'lucide-react';
import AdsSlideshow from '../../components/AdsSlideshow';

const Home = () => {
  const mainCards = [
    {
      title: 'Companies',
      icon: <Building size={48} />,
      description: 'Manage your company profiles and details',
      link: '/client/companies',
      color: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      title: 'Tenders',
      icon: <FileText size={48} />,
      description: 'Access and manage tender documents',
      link: '/client/tender',
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      action: {
        icon: <Plus size={24} />,
        label: 'Create Tender',
        link: '/client/tender/create'
      }
    }
  ];

  const secondaryCards = [
    {
      title: 'Contacts',
      icon: <Users size={40} />,
      description: 'View and manage your business contacts',
      link: '/client/contacts', 
      color: 'bg-green-500'
    },
    {
      title: 'Settings',
      icon: <Settings size={40} />,
      description: 'Customize your account settings',
      link: '/client/settings',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="ml-0 sm:ml-64 p-4 sm:p-8 transition-all duration-300">
      <div className="responsive-container">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">Welcome to Dashboard</h1>
        
        <AdsSlideshow />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {mainCards.map((card, index) => (
            <div key={index} className="relative group">
              <Link 
                to={card.link}
                className={`${card.color} transform hover:scale-105 transition-all duration-200 p-6 sm:p-8 rounded-xl shadow-lg text-white h-full block`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white/10 rounded-full mr-4">
                      {card.icon}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold">{card.title}</h2>
                  </div>
                  <p className="text-lg opacity-90 mb-4">{card.description}</p>
                  
                  <div className="mt-auto text-sm opacity-75">
                    Click to view details →
                  </div>
                </div>
              </Link>
              
              {card.action && (
                <Link
                  to={card.action.link}
                  className="absolute top-4 right-4 bg-white text-purple-600 hover:bg-purple-50 p-2 rounded-full shadow-lg transform transition-all duration-200 hover:scale-110 group-hover:rotate-180"
                  title={card.action.label}
                >
                  {card.action.icon}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {secondaryCards.map((card, index) => (
            <Link 
              key={index} 
              to={card.link}
              className={`${card.color} transform hover:scale-105 transition-all duration-200 p-4 sm:p-6 rounded-xl shadow-lg text-white`}
            >
              <div className="flex flex-col items-center text-center space-y-2 sm:space-y-4">
                <div className="p-2 sm:p-3 bg-white/10 rounded-full">
                  {card.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold">{card.title}</h2>
                <p className="text-xs sm:text-sm opacity-90">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;