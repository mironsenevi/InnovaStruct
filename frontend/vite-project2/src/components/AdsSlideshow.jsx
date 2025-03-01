import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const AdsSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const ads = [
    {
      id: 1,
      imageUrl: 'https://mistertlk.s3.ap-southeast-1.amazonaws.com/property/rentals/675_1_1643892453.jpg',
      title: 'Construction Project Opportunity',
      description: 'New commercial building project in Colombo.',
      company: 'ABC Construction',
      buttonText: 'Learn More'
    },
    {
      id: 2,
      imageUrl: 'https://static.infra.global/wp-content/uploads/2023/03/09144600/F-2-134-768x432.jpg',
      title: 'Infrastructure Development',
      description: 'Major infrastructure development project seeking partners.',
      company: 'XYZ Developers',
      buttonText: 'View Details'
    },
    {
      id: 3,
      imageUrl: 'https://infra.global/wp-content/uploads/2023/03/F-2-133-768x432.jpg',
      title: 'Road Construction Tender',
      description: 'New highway development project open for bidding.',
      company: 'Highway Builders Ltd',
      buttonText: 'Apply Now'
    },
    {
      id: 4,
      imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/614845680.jpg?k=bd3be5a5f8ba84986f39bba92250413bdb1858bc367962a1335b49bb539eaf3f&o=&hp=1',
      title: 'Building Renovation',
      description: 'Historic building renovation project in Kandy.',
      company: 'Heritage Constructors',
      buttonText: 'See Project'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % ads.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? ads.length - 1 : prev - 1));
  };

  useEffect(() => {
    let timer;
    if (isAutoPlaying && !isHovering) {
      timer = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovering]);

  return (
    <div 
      className="relative w-full bg-white rounded-xl shadow-xl overflow-hidden mb-4 sm:mb-8"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative h-[250px] sm:h-[300px] lg:h-[350px]">
        {/* Progress bar at top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 z-10">
          <div 
            className="h-full bg-yellow-500 transition-all duration-500"
            style={{ width: `${(currentSlide + 1) * (100 / ads.length)}%` }}
          />
        </div>
        
        <div 
          className="absolute w-full h-full transition-transform duration-500 ease-in-out flex"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {ads.map((ad) => (
            <div key={ad.id} className="min-w-full h-full flex flex-col sm:flex-row bg-gradient-to-br from-gray-50 to-gray-100">
              {/* Image with overlay gradient */}
              <div className="w-full sm:w-1/2 h-[150px] sm:h-full relative overflow-hidden">
                <img 
                  src={ad.imageUrl} 
                  alt={ad.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Content */}
              <div className="w-full sm:w-1/2 p-4 sm:p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full mb-2">
                      Featured Project
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">{ad.title}</h3>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-600">{ad.description}</p>
                  
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <span className="font-semibold text-yellow-600">Posted by: </span>
                    <span className="ml-1">{ad.company}</span>
                  </div>
                  
                  <button className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg transition-all duration-200 text-sm font-medium group">
                    {ad.buttonText}
                    <ExternalLink size={16} className="transform transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation buttons that fade in on hover */}
        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button 
            className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
            onClick={prevSlide}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
            onClick={nextSlide}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Slide indicators at bottom */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {ads.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-yellow-500 w-8' : 'bg-gray-300 w-4 opacity-60 hover:opacity-100'
              }`}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 5000);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdsSlideshow;