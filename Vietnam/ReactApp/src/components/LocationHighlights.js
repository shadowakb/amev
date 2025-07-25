import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { locationData } from '../data/locations';

const LocationHighlights = ({ location }) => {
  const { t, isHindi } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showAllHighlights, setShowAllHighlights] = useState(false);

  const locationDetails = locationData[location?.name] || location;
  const highlights = isHindi ? locationDetails?.highlights_hi : locationDetails?.highlights_en;
  const images = locationDetails?.images || [];
  const description = isHindi ? locationDetails?.description_hi : locationDetails?.description;

  // Show only first 3 highlights initially
  const visibleHighlights = showAllHighlights ? highlights : highlights?.slice(0, 3);
  const hasMoreHighlights = highlights && highlights.length > 3;

  // Auto-play carousel
  useEffect(() => {
    if (images.length <= 1 || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isAutoPlaying]);

  if (!location) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <div className="location-highlights">
      <h3 className="highlights-title">{t('highlightsLabel')}</h3>
      
      {description && (
        <p className="location-description">{description}</p>
      )}

      {images.length > 0 && (
        <div className="image-carousel">
          <div 
            className="carousel-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {isAutoPlaying && (
              <div className="carousel-autoplay-indicator">
                <div className="autoplay-progress" />
              </div>
            )}
            
            <div className="carousel-images-wrapper">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={isHindi ? image.src_hi : image.src_en}
                  alt={isHindi ? image.alt_hi : image.alt_en}
                  className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
                />
              ))}
            </div>

            {images.length > 1 && (
              <>
                <button 
                  className="carousel-button carousel-button--prev"
                  onClick={prevImage}
                  aria-label="Previous photo"
                  title="Previous photo"
                >
                  ‹
                </button>
                <button 
                  className="carousel-button carousel-button--next"
                  onClick={nextImage}
                  aria-label="Next photo"
                  title="Next photo"
                >
                  ›
                </button>

                <div className="carousel-indicators">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-indicator ${index === currentImageIndex ? 'carousel-indicator--active' : ''}`}
                      onClick={() => goToImage(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="swipe-hint">Swipe for more photos</div>
              </>
            )}
          </div>
        </div>
      )}

      {visibleHighlights && visibleHighlights.length > 0 && (
        <div className="highlights-content">
          <ul className="highlights-list">
            {visibleHighlights.map((highlight, index) => (
              <li 
                key={index} 
                className="highlight-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {highlight}
              </li>
            ))}
          </ul>
          
          {hasMoreHighlights && (
            <button 
              className="show-more-button"
              onClick={() => setShowAllHighlights(!showAllHighlights)}
            >
              {showAllHighlights 
                ? `▲ ${t('showLess') || 'Show less'}` 
                : `▼ ${t('showMore') || `Show ${highlights.length - 3} more tips`}`
              }
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationHighlights;
