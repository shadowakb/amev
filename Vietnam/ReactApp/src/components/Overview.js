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

  const getLocationEmoji = (location) => {
    if (location.includes('Flight') || location.includes('In Flight')) return '✈️';
    if (location.includes('Hanoi')) return '🏮';
    if (location.includes('Ha Long')) return '🏝️';
    if (location.includes('Hoi An')) return '🏮';
    if (location.includes('Ho Chi Minh') || location.includes('Saigon')) return '🏙️';
    if (location.includes('Mekong')) return '🚤';
    if (location.includes('Delhi')) return '🇮🇳';
    return '📍';
  };

  const getDayDescription = (day) => {
    const descriptions = {
      1: "Our journey begins - so excited for this adventure! ✈️",
      2: "Welcome to Vietnam! Exploring beautiful Hanoi 🏮",
      3: "Discovering Hanoi's culture and delicious cuisine 🍜",
      4: "The stunning Ha Long Bay awaits us! 📸",
      5: "More breathtaking moments at Ha Long Bay ⛵",
      6: "Flying south to the charming town of Hoi An 🏮",
      7: "Magical lanterns and riverside charm in Hoi An 🎋",
      8: "From Hoi An to vibrant Ho Chi Minh City 🏙️",
      9: "Exploring the bustling energy of Saigon 🛵",
      10: "Our final day - cherishing every moment 😢✈️"
    };
    return descriptions[day.day] || "Another wonderful day awaits us! 🌟";
  };

  return (
    <div className="overview">
      <div className="overview-header">
        <h1 className="overview-title">Our Vietnam Adventure {t('overview')} 🇻🇳</h1>
        <p className="overview-description">
          Join us on this beautiful 10-day journey through Vietnam, from Hanoi's historic streets 
          to Ha Long Bay's magnificent views, the enchanting lanterns of Hoi An, 
          and the vibrant energy of Ho Chi Minh City. 
          This will be truly unforgettable! 🌟✨
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
              <h3 className="day-location">
                {getLocationEmoji(day.location)} {day.location}
              </h3>
              <p className="day-description">
                {getDayDescription(day)}
              </p>
              <div className="day-accommodation">
                {day.accommodation && (
                  <>
                    <span className="accommodation-label">{t('overnight')}:</span>
                    <span className="accommodation-name">{day.accommodation}</span>
                  </>
                )}
              </div>
            </div>
            
            <div className="day-card-preview">
              <div className="activity-preview">
                {day.morning && day.morning.length > 0 && (
                  <div className="activity-time morning">
                    <span className="time-label">☀️ {t('morning')}</span>
                    <span className="activity-count">{day.morning.length} things</span>
                  </div>
                )}
                {day.afternoon && day.afternoon.length > 0 && (
                  <div className="activity-time afternoon">
                    <span className="time-label">🏖️ {t('afternoon')}</span>
                    <span className="activity-count">{day.afternoon.length} things</span>
                  </div>
                )}
                {day.evening && day.evening.length > 0 && (
                  <div className="activity-time evening">
                    <span className="time-label">🌅 {t('evening')}</span>
                    <span className="activity-count">{day.evening.length} things</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="day-card-footer">
              <span className="view-details">View our day's plans →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Overview;
