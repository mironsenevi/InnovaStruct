import React, { useState, useEffect, useRef } from "react";
import "./AdBanner.css"; // Ensure you create a CSS file for styling

const ads = [
  { id: 1, image: "/assets/ad1.jpg", link: "https://example.com/ad1", altText: "Ad for product 1" },
  { id: 2, image: "/assets/ad2.jpg", link: "https://example.com/ad2", altText: "Check out product 2" },
  { id: 3, image: "/assets/ad3.jpg", link: "https://example.com/ad3", altText: "Learn more about product 3" }
];

const AdBanner = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, []);

  // Function to handle focus and blur events for accessibility
  const handleAdFocus = () => {
    clearInterval(timerRef.current);
  };

  const handleAdBlur = () => {
    timerRef.current = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 3000);
  };

  return (
    <div className="ad-banner">
      {ads.map((ad, index) => (
        <a
          key={ad.id}
          href={ad.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`ad-slide ${index === currentAd ? "active" : ""}`}
          aria-label={ad.altText} // Use aria-label for better screen reader support
          onFocus={handleAdFocus}
          onBlur={handleAdBlur}
        >
          <img src={ad.image} alt={ad.altText} />
        </a>
      ))}
    </div>
  );
};

export default AdBanner;