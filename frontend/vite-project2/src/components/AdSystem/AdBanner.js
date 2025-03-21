import React, { useState, useEffect } from "react";
import "./AdBanner.css"; // Ensure you create a CSS file for styling

const ads = [
  { id: 1, image: "/assets/ad1.jpg", link: "https://example.com/ad1" },
  { id: 2, image: "/assets/ad2.jpg", link: "https://example.com/ad2" },
  { id: 3, image: "/assets/ad3.jpg", link: "https://example.com/ad3" }
];

const AdBanner = () => {
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ad-banner">
      {ads.map((ad, index) => (
        <a
          key={ad.id}
          href={ad.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`ad-slide ${index === currentAd ? "active" : ""}`}
        >
          <img src={ad.image} alt={`Ad ${ad.id}`} />
        </a>
      ))}
    </div>
  );
};

export default AdBanner;
