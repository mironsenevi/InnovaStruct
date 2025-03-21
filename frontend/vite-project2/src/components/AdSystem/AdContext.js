// filepath: c:\Users\Omindu Abeywardane\Documents\SDGP\InnovaStruct\frontend\vite-project2\src\components\AdSystem\AdContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AdContext = createContext();

export const AdProvider = ({ children }) => {
  const [ads, setAds] = useState([
    { id: 1, image: '/assets/ad1.jpg', link: 'https://example.com/ad1', altText: 'Ad for product 1' },
    { id: 2, image: '/assets/ad2.jpg', link: 'https://example.com/ad2', altText: 'Check out product 2' },
    { id: 3, image: '/assets/ad3.jpg', link: 'https://example.com/ad3', altText: 'Learn more about product 3' },
  ]);

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