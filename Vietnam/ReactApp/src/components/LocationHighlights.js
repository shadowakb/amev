import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { locationData } from '../data/locations';

const LocationHighlights = ({ location }) => {
  const { t, isHindi } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!location) return null;

  const locationDetails = locationData[location.name] || location;
  const highlights = isHindi ? locationDetails.highlights_hi : locationDetails.highlights_en;
  const images = locationDetails.images || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="location-highlights">
      <h3>{t('highlightsLabel')}</h3>
      
      {images.length > 0 && (
        <div className="image-carousel">
          <div className="carousel-container">
            <img
              src={isHindi ? images[currentImageIndex].src_hi : images[currentImageIndex].src_en}
              alt={isHindi ? images[currentImageIndex].alt_hi : images[currentImageIndex].alt_en}
              className="carousel-image"
            />
            
            {images.length > 1 && (
              <>
                <button 
                  className="carousel-button carousel-button--prev"
                  onClick={prevImage}
                  aria-label={t('prevImage')}
                >
                  ‹
                </button>
                <button 
                  className="carousel-button carousel-button--next"
                  onClick={nextImage}
                  aria-label={t('nextImage')}
                >
                  ›
                </button>
              </>
            )}
          </div>
          
          {images.length > 1 && (
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
      
      {highlights && highlights.length > 0 && (
        <div className="highlights-list">
          <ul>
            {highlights.map((highlight, index) => (
              <li key={index} className="highlight-item">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationHighlights;
