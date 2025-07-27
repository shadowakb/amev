import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useBackgroundContext } from '../contexts/BackgroundContext';
import { BACKGROUND_CONFIG, getOpacityValue, generateOverlayGradient } from '../config/backgroundConfig';
import { itineraryData } from '../data/itinerary';

const Overview = () => {
  const { t } = useLanguage();
  const {
    shouldShowBackgrounds,
    currentBackgroundIndex,
    setBackgroundIndex,
    pauseSlideshow,
    resumeSlideshow,
    isDarkMode,
    isMobile,
    forceUpdate
  } = useBackgroundContext();

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

  // Rotate background images using centralized timing
  useEffect(() => {
    if (!shouldShowBackgrounds) return;

    const interval = setInterval(() => {
      setBackgroundIndex((prev) => (prev + 1) % backgroundImages.length);
    }, BACKGROUND_CONFIG.TIMING.OVERVIEW_SLIDESHOW_INTERVAL);

    return () => clearInterval(interval);
  }, [backgroundImages.length, shouldShowBackgrounds, setBackgroundIndex]);

  // Force re-render when background state changes
  useEffect(() => {
    console.log('Overview: Background state changed:', shouldShowBackgrounds);
  }, [shouldShowBackgrounds]);

  // Generate dynamic overlay styles for header using correct config
  const headerOverlayStyle = shouldShowBackgrounds ? {
    background: generateOverlayGradient(
      getOpacityValue(BACKGROUND_CONFIG.OPACITY.HEADER_LIGHT, isDarkMode, isMobile),
      isDarkMode
    )
  } : {};





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
      key={`overview-${shouldShowBackgrounds ? 'with-bg' : 'no-bg'}-${forceUpdate}`}
      className={`overview ${shouldShowBackgrounds ? 'with-backgrounds' : ''}`}
      onMouseEnter={shouldShowBackgrounds ? pauseSlideshow : undefined}
      onMouseLeave={shouldShowBackgrounds ? resumeSlideshow : undefined}
    >
      {/* Background slideshow - only render when backgrounds are enabled */}
      {shouldShowBackgrounds && (
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
      )}

      <div className="overview-content">
        <div
          className="overview-header"
          style={shouldShowBackgrounds ? {
            backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})`,
          } : {}}
        >
          {shouldShowBackgrounds && <div className="header-overlay" style={headerOverlayStyle}></div>}
          <div className="header-content">
            <h1 className="overview-title">{t('ourJourney')} {t('overview')} 🇻🇳</h1>
            <p className="overview-description">
              {t('beautifulJourney')} 🌟✨
            </p>

            {/* Background slideshow indicators - always present to maintain layout */}
            <div className={`slideshow-indicators ${!shouldShowBackgrounds ? 'hidden' : ''}`}>
              {backgroundImages.map((_, index) => (
                <div
                  key={index}
                  className={`slideshow-dot ${index === currentBackgroundIndex ? 'active' : ''}`}
                  onClick={() => shouldShowBackgrounds && setBackgroundIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      
      <div className="overview-grid">
        {itineraryData.map((day, index) => {
          // Calculate which background image this card should use (only if backgrounds enabled)
          const cardBackgroundIndex = (currentBackgroundIndex + index) % backgroundImages.length;
          const cardBackgroundImage = backgroundImages[cardBackgroundIndex];

          // Generate overlay style for day cards using config
          const cardOverlayStyle = shouldShowBackgrounds ? {
            background: generateOverlayGradient(
              getOpacityValue(BACKGROUND_CONFIG.OPACITY.DAY_CARDS_LIGHT, isDarkMode, isMobile),
              isDarkMode
            )
          } : {};

          // Generate hover overlay style using config
          const cardHoverOverlayStyle = shouldShowBackgrounds ? {
            background: generateOverlayGradient(
              getOpacityValue(BACKGROUND_CONFIG.OPACITY.DAY_CARDS_HOVER_LIGHT, isDarkMode, isMobile),
              isDarkMode
            )
          } : {};

          return (
            <Link
              key={day.day}
              to={`/day/${day.day}`}
              className="day-card"
              style={shouldShowBackgrounds ? {
                backgroundImage: `url(${cardBackgroundImage})`,
              } : {}}
            >
            {/* Add overlay for background readability */}
            {shouldShowBackgrounds && <div className="day-card-overlay" style={cardOverlayStyle}></div>}
            {/* Add hover overlay using config */}
            {shouldShowBackgrounds && <div className="day-card-hover-overlay" style={cardHoverOverlayStyle}></div>}
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
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Overview;
