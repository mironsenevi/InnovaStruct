// filepath: c:\Users\Omindu Abeywardane\Documents\SDGP\InnovaStruct\frontend\vite-project2\src\components\AdSystem\AdContext.js
import React, { createContext, useState, useEffect } from 'react';
import mockAds from './AdMockData'; // Import the mock data

export const AdContext = createContext();

export const AdProvider = ({ children }) => {
  const [ads, setAds] = useState(mockAds);
  
  // Function to add a new ad
  const addAd = (newAd) => {
    setAds([...ads, { ...newAd, id: Date.now() }]);
  };

  // Function to delete an ad
  const deleteAd = (adId) => {
    setAds(ads.filter((ad) => ad.id !== adId));
  };

  // Function to update an ad
  const updateAd = (updatedAd) => {
    setAds(ads.map((ad) => (ad.id === updatedAd.id ? updatedAd : ad)));
  };

  const value = {
    ads,
    addAd,
    deleteAd,
    updateAd,
  };

  return (
    <AdContext.Provider value={value}>
      {children}
    </AdContext.Provider>
  );
};