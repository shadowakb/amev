import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { itineraryData } from '../data/itinerary';

const Overview = () => {
  const { t } = useLanguage();
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Background images array (1-7.jpg)
  const backgroundImages = [
    '/amev/images/backgrounds/1.jpg',
    '/amev/images/backgrounds/2.jpg',
    '/amev/images/backgrounds/3.jpg',
    '/amev/images/backgrounds/4.jpg',
    '/amev/images/backgrounds/5.jpg',
    '/amev/images/backgrounds/6.jpg',
    '/amev/images/backgrounds/7.jpg'
  ];

  // Rotate background images every 8 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentBackgroundIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length, isPaused]);

  const formatDate = (dateStr) => {
    // Simple date formatting for the overview cards
    return dateStr;
  };

  const getLocationEmoji = (location) => {
    if (location.includes('Flight') || location.includes('In Flight')) return '✈️';
    if (location.includes('Hanoi')) return '🏮';
    if (location.includes('Ha Long')) return '🏝️';
    if (location.includes('Ninh Binh')) return '⛰️';
    if (location.includes('Hoi An')) return '🏮';
    if (location.includes('Da Nang')) return '🏖️';
    if (location.includes('Ba Na Hills')) return '🌉';
    if (location.includes('Delhi')) return '🇮🇳';
    if (location.includes('Una')) return '🚂';
    return '📍';
  };

  const getDayDescription = (day) => {
    const descriptions = {
      1: t('journeyBegins'),
      2: t('welcomeVietnam'),
      3: t('discoveringCulture'),
      4: t('stunningHaLong'),
      5: t('breathtakingMoments'),
      6: t('charmingHoiAn'),
      7: t('magicalLanterns'),
      8: t('vibrantDaNang'),
      9: t('bustlingEnergy'),
      10: t('finalDay')
    };
    return descriptions[day.day] || t('wonderfulDay');
  };

  const pluralize = (count) => {
    return count === 1 ? t('thing') : t('things');
  };

  return (
    <div
      className="overview"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background slideshow */}
      <div className="overview-background">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`background-slide ${index === currentBackgroundIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
        <div className="background-overlay" />
      </div>

      <div className="overview-content">
        <div className="overview-header">
          <h1 className="overview-title">{t('ourJourney')} {t('overview')} 🇻🇳</h1>
          <p className="overview-description">
            {t('beautifulJourney')} 🌟✨
          </p>

          {/* Background slideshow indicators */}
          <div className="slideshow-indicators">
            {backgroundImages.map((_, index) => (
              <div
                key={index}
                className={`slideshow-dot ${index === currentBackgroundIndex ? 'active' : ''}`}
                onClick={() => setCurrentBackgroundIndex(index)}
              />
            ))}
          </div>
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
                    <span className="activity-count">{day.morning.length} {pluralize(day.morning.length)}</span>
                  </div>
                )}
                {day.afternoon && day.afternoon.length > 0 && (
                  <div className="activity-time afternoon">
                    <span className="time-label">🌅 {t('afternoon')}</span>
                    <span className="activity-count">{day.afternoon.length} {pluralize(day.afternoon.length)}</span>
                  </div>
                )}
                {day.evening && day.evening.length > 0 && (
                  <div className="activity-time evening">
                    <span className="time-label">🌙 {t('evening')}</span>
                    <span className="activity-count">{day.evening.length} {pluralize(day.evening.length)}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="day-card-footer">
              <span className="view-details">{t('viewDayPlans')}</span>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
