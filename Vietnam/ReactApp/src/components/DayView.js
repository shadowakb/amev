import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { itineraryData } from '../data/itinerary';
import Timeline from './Timeline';
import LocationMap from './LocationMap';
import LocationHighlights from './LocationHighlights';
import RestaurantSuggestions from './RestaurantSuggestions';

const DayView = () => {
  const { dayNumber } = useParams();
  const { t } = useLanguage();
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  const dayData = itineraryData.find(day => day.day === parseInt(dayNumber));
  
  useEffect(() => {
    // Set initial location for map with smart prioritization
    if (dayData && dayData.keyLocations && dayData.keyLocations.length > 0) {
      let prioritizedLocation = null;
      
      // For days in Hanoi (2, 3), prioritize Hanoi locations
      if ([2, 3].includes(dayData.day)) {
        prioritizedLocation = dayData.keyLocations.find(loc => 
          loc.name.includes('Hanoi') || loc.name.includes('Old Quarter') || loc.name.includes('Water Puppet')
        );
      }
      
      // For Day 4 (Ninh Binh tour), prioritize Ninh Binh locations
      if (dayData.day === 4) {
        prioritizedLocation = dayData.keyLocations.find(loc => 
          loc.name.includes('Ninh Binh') || loc.name.includes('Hoa Lu') || loc.name.includes('Trang An') || loc.name.includes('Mua Cave')
        );
      }
      
      // For hotel check-in days (1, 2, 5, 7, 9), prioritize hotels if no other priority set
      if (!prioritizedLocation && [1, 2, 5, 7, 9].includes(dayData.day)) {
        prioritizedLocation = dayData.keyLocations.find(loc => loc.type === 'hotel');
      }
      
      // For touring days (6, 8), prioritize landmarks/attractions
      if (!prioritizedLocation && [6, 8].includes(dayData.day)) {
        prioritizedLocation = dayData.keyLocations.find(loc => loc.type === 'landmark');
      }
      
      // Fallback to first location
      setSelectedLocation(prioritizedLocation || dayData.keyLocations[0]);
    }
  }, [dayData]);

  if (!dayData) {
    return (
      <div className="day-view">
        <div className="day-not-found">
          <h1>Day not found</h1>
          <Link to="/" className="back-link">← Back to Overview</Link>
        </div>
      </div>
    );
  }

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleCurrentLocationChange = (location) => {
    // Update selected location when carousel image changes
    setSelectedLocation(location);
  };

  const nextDay = itineraryData.find(day => day.day === dayData.day + 1);
  const prevDay = itineraryData.find(day => day.day === dayData.day - 1);

  return (
    <div className="day-view">
      <div className="day-header">
        <div className="day-navigation">
          <Link to="/" className="back-link">
            ← {t('overview')}
          </Link>
          
          <div className="day-nav-buttons">
            {prevDay && (
              <Link to={`/day/${prevDay.day}`} className="nav-button nav-button--prev">
                ← {t('dayLabel')} {prevDay.day}
              </Link>
            )}
            {nextDay && (
              <Link to={`/day/${nextDay.day}`} className="nav-button nav-button--next">
                {t('dayLabel')} {nextDay.day} →
              </Link>
            )}
          </div>
        </div>
        
        <div className="day-title">
          <h1>{t('dayLabel')} {dayData.day}: {dayData.location}</h1>
          <p className="day-date">{dayData.date}</p>
        </div>
      </div>

      <div className="day-content">
        <div className="day-main">
          <Timeline 
            dayData={dayData}
            onLocationSelect={handleLocationSelect}
            selectedLocation={selectedLocation}
          />
          
          {dayData.notes && (
            <div className="day-notes">
              <h3>{t('notesLabel')}</h3>
              <pre className="notes-content">{dayData.notes}</pre>
            </div>
          )}
          
          {dayData.accommodation && (
            <div className="day-accommodation">
              <h3>{t('accommodationLabel')}</h3>
              <p>{dayData.accommodation}</p>
            </div>
          )}
        </div>
        
        <div className="day-sidebar">
          {selectedLocation && (
            <>
              <LocationMap location={selectedLocation} />
              <LocationHighlights
                location={selectedLocation}
                onCurrentLocationChange={handleCurrentLocationChange}
              />
            </>
          )}

          <RestaurantSuggestions
            location={dayData?.location}
            dayData={dayData}
          />

          {dayData.keyLocations && dayData.keyLocations.length > 0 && (
            <div className="key-locations">
              <h3>{t('keyLocationsLabel')}</h3>
              <div className="location-list">
                {dayData.keyLocations.map((location, index) => (
                  <button
                    key={index}
                    className={`location-item ${selectedLocation === location ? 'location-item--active' : ''}`}
                    onClick={() => handleLocationSelect(location)}
                  >
                    <span className="location-type">{t(`${location.type}Label`)}</span>
                    <span className="location-name">{location.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DayView;
