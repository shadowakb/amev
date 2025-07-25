import { useState, useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { locationData } from '../data/locations';
import { itineraryData } from '../data/itinerary';

const LocationHighlights = ({ location, onCurrentLocationChange }) => {
  const { dayNumber } = useParams();
  const { t, isHindi } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showAllHighlights, setShowAllHighlights] = useState(false);

  // Use refs to track state without causing re-renders
  const lastSelectedLocationRef = useRef(null);
  const isLocationSelectionRef = useRef(false);
  const currentLocationFromCarouselRef = useRef(null);

  // Get current day data
  const dayData = itineraryData.find(day => day.day === parseInt(dayNumber));

  // Get all images from all locations for this day
  const allDayImages = useMemo(() => {
    if (!dayData || !dayData.keyLocations) return [];

    const allImages = [];
    dayData.keyLocations.forEach(loc => {
      const locData = locationData[loc.name];
      if (locData && locData.images) {
        // Add location name to each image for context
        locData.images.forEach(img => {
          allImages.push({
            ...img,
            locationName: loc.name,
            locationType: loc.type
          });
        });
      }
    });
    return allImages;
  }, [dayData]);

  // Use all day images if available, otherwise fall back to current location images
  const images = useMemo(() => {
    return allDayImages.length > 0 ? allDayImages : (locationData[location?.name]?.images || []);
  }, [allDayImages, location?.name]);

  // console.log('Images array:', images.length, 'Current index:', currentImageIndex);

  // Get current image's location data for dynamic content
  const getCurrentLocationData = () => {
    if (allDayImages.length > 0 && images[currentImageIndex]) {
      const currentImage = images[currentImageIndex];
      if (currentImage.locationName) {
        return locationData[currentImage.locationName];
      }
    }
    // Fallback to selected location or default
    return locationData[location?.name] || location;
  };

  const currentLocationData = getCurrentLocationData();
  const highlights = isHindi ? currentLocationData?.highlights_hi : currentLocationData?.highlights_en;
  const description = isHindi ? currentLocationData?.description_hi : currentLocationData?.description;
  const locationName = isHindi ? currentLocationData?.name_hi : currentLocationData?.name_en;

  // Reset currentImageIndex when images array changes
  useEffect(() => {
    if (images.length > 0 && currentImageIndex >= images.length) {
      console.log('Resetting image index from', currentImageIndex, 'to 0');
      setCurrentImageIndex(0);
    }
  }, [images.length, currentImageIndex]);

  // Show only first 3 highlights initially
  const visibleHighlights = showAllHighlights ? highlights : highlights?.slice(0, 3);
  const hasMoreHighlights = highlights && highlights.length > 3;

  // Auto-play carousel
  useEffect(() => {
    if (images.length <= 1 || !isAutoPlaying) return;

    const interval = setInterval(() => {
      // Auto-play should not trigger parent updates
      isLocationSelectionRef.current = true;
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      // Reset flag after a short delay
      setTimeout(() => {
        isLocationSelectionRef.current = false;
      }, 100);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isAutoPlaying]);

  // Handle location selection from sidebar (ONLY updates carousel, no parent notification)
  useEffect(() => {
    if (allDayImages.length > 0 && location?.name && location.name !== lastSelectedLocationRef.current) {
      const locationImageIndex = allDayImages.findIndex(img => img.locationName === location.name);
      if (locationImageIndex !== -1) {
        // Mark this as a location selection to prevent circular updates
        isLocationSelectionRef.current = true;
        lastSelectedLocationRef.current = location.name;

        setCurrentImageIndex(locationImageIndex);
        setIsAutoPlaying(false);
        setTimeout(() => {
          setIsAutoPlaying(true);
          // Reset the flag after a delay to allow for manual navigation
          setTimeout(() => {
            isLocationSelectionRef.current = false;
          }, 1000);
        }, 8000);
      }
    }
  }, [location?.name, allDayImages]);

  // Handle carousel navigation (updates parent components when user manually navigates)
  useEffect(() => {
    // Only notify parent if this is NOT a location selection and we have images
    if (allDayImages.length > 0 && onCurrentLocationChange && !isLocationSelectionRef.current) {
      const currentImage = images[currentImageIndex];
      if (currentImage && currentImage.locationName) {
        // Only update if the location actually changed
        if (currentLocationFromCarouselRef.current !== currentImage.locationName) {
          currentLocationFromCarouselRef.current = currentImage.locationName;

          const dayLocation = dayData?.keyLocations?.find(loc => loc.name === currentImage.locationName);
          if (dayLocation) {
            onCurrentLocationChange(dayLocation);
          }
        }
      }
    }
  }, [currentImageIndex, allDayImages, onCurrentLocationChange, dayData, images]);

  if (!location) return null;

  const nextImage = () => {
    // Mark as user navigation (not location selection)
    isLocationSelectionRef.current = false;
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevImage = () => {
    // Mark as user navigation (not location selection)
    isLocationSelectionRef.current = false;
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToImage = (index) => {
    // Mark as user navigation (not location selection)
    isLocationSelectionRef.current = false;
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
      <h3 className="highlights-title">
        {allDayImages.length > 0
          ? `${t('dayLabel')} ${dayNumber} ${t('photosLabel') || 'Photos'}`
          : t('highlightsLabel')
        }
      </h3>

      {allDayImages.length > 0 && locationName && (
        <div className="current-location-indicator">
          <h4 className="current-location-name">
            📍 {locationName}
          </h4>
        </div>
      )}

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
                <div key={index} className={`carousel-slide ${index === currentImageIndex ? 'active' : ''}`}>
                  <img
                    src={isHindi ? image.src_hi : image.src_en}
                    alt={isHindi ? image.alt_hi : image.alt_en}
                    className="carousel-image"
                  />

                </div>
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
                  {images.length <= 8 && (
                    // Show dots for 8 or fewer images
                    images.map((_, index) => (
                      <button
                        key={index}
                        className={`carousel-indicator ${index === currentImageIndex ? 'carousel-indicator--active' : ''}`}
                        onClick={() => goToImage(index)}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))
                  )}
                </div>
              </>
            )}
          </div>

          {/* Image context and counter below carousel */}
          {images.length > 0 && (
            <div className="carousel-info">
              <div className="image-context">
                {(() => {
                  const currentImage = images[currentImageIndex];
                  if (!currentImage) return null;

                  const imageTitle = isHindi ? currentImage.alt_hi : currentImage.alt_en;
                  const locationName = currentImage.locationName;

                  return (
                    <div className="image-details">
                      <h4 className="image-title">{imageTitle}</h4>
                      {locationName && allDayImages.length > 0 && (
                        <p className="image-location">{locationName}</p>
                      )}
                    </div>
                  );
                })()}
              </div>

              {images.length > 1 && (
                <div className="carousel-counter-bottom">
                  {currentImageIndex + 1} / {images.length}
                </div>
              )}
            </div>
          )}
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
