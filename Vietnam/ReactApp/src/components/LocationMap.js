import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const LocationMap = ({ location }) => {
  const { t } = useLanguage();

  if (!location) return null;

  // For demo purposes, using a placeholder map
  const placeholderMapSrc = `https://www.google.com/maps?q=${encodeURIComponent(location.query)}&output=embed`;

  return (
    <div className="location-map">
      <div className="location-map-header">
        <h3>{location.name}</h3>
        <a 
          href={`https://www.google.com/maps/search/${encodeURIComponent(location.query)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="map-external-link"
        >
          {t('viewOnGoogleMaps')} ↗
        </a>
      </div>
      
      <div className="map-container">
        <iframe
          src={placeholderMapSrc}
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${location.name}`}
        ></iframe>
      </div>
      
      <div className="location-info">
        <span className="location-type-badge">
          {t(`${location.type}Label`)}
        </span>
        <p className="location-description">
          {location.description}
        </p>
      </div>
    </div>
  );
};

export default LocationMap;
