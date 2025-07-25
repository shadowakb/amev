import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { itineraryData } from '../data/itinerary';

const Overview = () => {
  const { t } = useLanguage();

  const formatDate = (dateStr) => {
    // Simple date formatting for the overview cards
    return dateStr;
  };

  return (
    <div className="overview">
      <div className="overview-header">
        <h1 className="overview-title">Vietnam Itinerary {t('overview')}</h1>
        <p className="overview-description">
          Explore our 10-day journey through Vietnam, from the bustling streets of Hanoi 
          to the ancient charm of Hoi An and the natural wonders of Ha Long Bay.
        </p>
      </div>
      
      <div className="overview-grid">
        {itineraryData.map((day) => (
          <Link 
            key={day.day}
            to={`/day/${day.day}`}
            className="day-card"
          >
            <div className="day-card-header">
              <span className="day-number">{t('dayLabel')} {day.day}</span>
              <span className="day-date">{formatDate(day.date)}</span>
            </div>
            
            <div className="day-card-content">
              <h3 className="day-location">{day.location}</h3>
              <p className="day-accommodation">
                {day.accommodation && (
                  <>
                    <span className="accommodation-label">{t('overnight')}:</span>
                    <span className="accommodation-name">{day.accommodation}</span>
                  </>
                )}
              </p>
            </div>
            
            <div className="day-card-preview">
              <div className="activity-preview">
                {day.morning && day.morning.length > 0 && (
                  <div className="activity-time">
                    <span className="time-label">{t('morning')}</span>
                    <span className="activity-count">{day.morning.length} activities</span>
                  </div>
                )}
                {day.afternoon && day.afternoon.length > 0 && (
                  <div className="activity-time">
                    <span className="time-label">{t('afternoon')}</span>
                    <span className="activity-count">{day.afternoon.length} activities</span>
                  </div>
                )}
                {day.evening && day.evening.length > 0 && (
                  <div className="activity-time">
                    <span className="time-label">{t('evening')}</span>
                    <span className="activity-count">{day.evening.length} activities</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="day-card-footer">
              <span className="view-details">View Details →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Overview;
