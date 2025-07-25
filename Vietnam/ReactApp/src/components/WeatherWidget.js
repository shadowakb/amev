import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { getCurrentWeather, getWeatherIconUrl, getLocalizedWeatherDescription } from '../services/weatherService';
import { getWeatherDataForCity } from '../data/weatherData';

const WeatherWidget = ({ location, dayData }) => {
  const { isHindi } = useLanguage();
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  // Extract city name from location
  const getCityName = (locationString) => {
    if (!locationString || typeof locationString !== 'string') return null;

    const location = locationString.toLowerCase();
    if (location.includes('hanoi')) return 'Hanoi';
    if (location.includes('hoi an')) return 'Hoi An';
    if (location.includes('da nang')) return 'Da Nang';
    return null;
  };

  const cityName = getCityName(location || dayData?.location);
  const staticWeatherData = getWeatherDataForCity(cityName);

  // Fetch real weather data
  useEffect(() => {
    if (!cityName) return;

    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const weatherResult = await getCurrentWeather(cityName);
        if (weatherResult.success) {
          setCurrentWeather(weatherResult.data);
        }
      } catch (err) {
        console.error('Weather fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [cityName]);

  // Don't show widget for travel days or non-weather cities
  if (!cityName || (!staticWeatherData && !currentWeather)) {
    return null;
  }

  // Use real weather data if available, otherwise fall back to static data
  const temp = currentWeather ?
    `${currentWeather.temperature.current}°C` :
    `${staticWeatherData?.temperature.high_celsius}°C`;

  const humidity = currentWeather ?
    currentWeather.humidity :
    staticWeatherData?.humidity || 80;

  const condition = currentWeather ?
    getLocalizedWeatherDescription(currentWeather, isHindi ? 'hi' : 'en') :
    (isHindi ? staticWeatherData?.season_hi : staticWeatherData?.season);

  const feelsLike = currentWeather ?
    currentWeather.temperature.feels_like :
    staticWeatherData?.temperature.feels_like_celsius;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const renderCompactView = () => (
    <div className="weather-widget-compact" onClick={toggleExpanded}>
      <div className="weather-header">
        <div className="weather-title">
          {currentWeather?.icon ? (
            <img
              src={getWeatherIconUrl(currentWeather.icon)}
              alt="weather"
              className="weather-icon-img"
              width="32"
              height="32"
            />
          ) : (
            <span className="weather-icon">🌤️</span>
          )}
          <div className="weather-city-info">
            <span className="weather-city">
              {isHindi ?
                (staticWeatherData?.cityName_hi || cityName) :
                (staticWeatherData?.cityName || cityName)
              }
            </span>
            <span className="weather-month">
              {isHindi ? 'अगस्त 2025' : 'August 2025'}
            </span>
          </div>
          {loading && <span className="loading-indicator">⟳</span>}
        </div>
        <div className="weather-temp-main">
          {temp}
        </div>
      </div>

      <div className="weather-summary">
        <div className="weather-condition">
          {condition}
        </div>
        <div className="weather-stats">
          <span className="humidity">💧 {humidity}%</span>
          <span className="feels-like">🌡️ {isHindi ? 'महसूस' : 'Feels'} {feelsLike}°C</span>
          {currentWeather?.weather_main.includes('Rain') && (
            <span className="rain-indicator">🌧️ {isHindi ? 'बारिश' : 'Rain'}</span>
          )}
        </div>
      </div>

      <div className="expand-indicator">
        <span>▼ {isHindi ? 'विस्तार से देखें' : 'View Details'}</span>
      </div>
    </div>
  );

  const renderExpandedView = () => (
    <div className="weather-widget-expanded">
      <div className="weather-header-expanded">
        <div className="weather-title-expanded">
          <h3>
            🌤️ {isHindi ? `${cityName} मौसम` : `${cityName} Weather`}
          </h3>
          <span className="weather-season">
            {condition}
          </span>
        </div>
        <button className="collapse-button" onClick={toggleExpanded}>
          ▲ {isHindi ? 'छुपाएं' : 'Collapse'}
        </button>
      </div>

      <div className="weather-main-stats">
        <div className="temperature-section">
          <div className="temp-display">
            <span className="temp-value">
              {temp}
            </span>
            {currentWeather?.icon && (
              <img
                src={getWeatherIconUrl(currentWeather.icon)}
                alt="weather"
                className="weather-icon-large"
                width="48"
                height="48"
              />
            )}
          </div>
          <div className="feels-like">
            {isHindi ? 'महसूस होता है' : 'Feels like'}: {feelsLike}°C
          </div>
        </div>

        <div className="weather-grid">
          <div className="weather-stat">
            <span className="stat-icon">💧</span>
            <span className="stat-label">{isHindi ? 'आर्द्रता' : 'Humidity'}</span>
            <span className="stat-value">{humidity}%</span>
          </div>
          <div className="weather-stat">
            <span className="stat-icon">🌡️</span>
            <span className="stat-label">{isHindi ? 'तापमान' : 'Temperature'}</span>
            <span className="stat-value">{temp}</span>
          </div>
          <div className="weather-stat">
            <span className="stat-icon">☀️</span>
            <span className="stat-label">{isHindi ? 'UV इंडेक्स' : 'UV Index'}</span>
            <span className="stat-value">{staticWeatherData?.uv_index || 8}/10</span>
          </div>
          <div className="weather-stat">
            <span className="stat-icon">💨</span>
            <span className="stat-label">{isHindi ? 'हवा' : 'Wind'}</span>
            <span className="stat-value">{currentWeather?.wind_speed || staticWeatherData?.wind_speed_kmh || 15} km/h</span>
          </div>
        </div>
      </div>

      <div className="weather-recommendations">
        <div className="recommendations-section">
          <h4>👕 {isHindi ? 'कपड़ों की सिफारिश' : 'Clothing Recommendations'}</h4>
          <div className="clothing-grid">
            <div className="clothing-section">
              <h5>✅ {isHindi ? 'पहनें' : 'Wear'}</h5>
              <ul>
                {(isHindi ? staticWeatherData?.clothing.essential_hi : staticWeatherData?.clothing.essential_en)?.map((item, index) => (
                  <li key={index}>{item}</li>
                )) || [
                  isHindi ? 'हल्के सूती कपड़े' : 'Light cotton clothes',
                  isHindi ? 'छाता/रेनकोट' : 'Umbrella/raincoat',
                  isHindi ? 'आरामदायक जूते' : 'Comfortable shoes'
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="clothing-section">
              <h5>❌ {isHindi ? 'न पहनें' : 'Avoid'}</h5>
              <ul>
                {(isHindi ? staticWeatherData?.clothing.avoid_hi : staticWeatherData?.clothing.avoid_en)?.map((item, index) => (
                  <li key={index}>{item}</li>
                )) || [
                  isHindi ? 'भारी कपड़े' : 'Heavy fabrics',
                  isHindi ? 'गहरे रंग' : 'Dark colors',
                  isHindi ? 'तंग कपड़े' : 'Tight clothing'
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="recommendations-section">
          <h4>🕐 {isHindi ? 'गतिविधि सुझाव' : 'Activity Recommendations'}</h4>
          <div className="activity-recommendations">
            <div className="activity-section">
              <h5>⏰ {isHindi ? 'सबसे अच्छा समय' : 'Best Times'}</h5>
              <ul>
                {(isHindi ? staticWeatherData?.activities.best_times_hi : staticWeatherData?.activities.best_times_en)?.map((time, index) => (
                  <li key={index}>{time}</li>
                )) || [
                  isHindi ? 'सुबह जल्दी (6-9 AM)' : 'Early morning (6-9 AM)',
                  isHindi ? 'देर शाम (5-7 PM)' : 'Late evening (5-7 PM)',
                  isHindi ? 'दोपहर में इनडोर गतिविधियां' : 'Indoor activities during midday'
                ].map((time, index) => (
                  <li key={index}>{time}</li>
                ))}
              </ul>
            </div>
            <div className="activity-section">
              <h5>💡 {isHindi ? 'बाहरी गतिविधि सुझाव' : 'Outdoor Tips'}</h5>
              <ul>
                {(isHindi ? staticWeatherData?.activities.outdoor_tips_hi : staticWeatherData?.activities.outdoor_tips_en)?.map((tip, index) => (
                  <li key={index}>{tip}</li>
                )) || [
                  isHindi ? 'हाइड्रेटेड रहें' : 'Stay hydrated',
                  isHindi ? 'SPF 30+ सनस्क्रीन का उपयोग करें' : 'Use SPF 30+ sunscreen',
                  isHindi ? 'छाया की तलाश करें' : 'Seek shade frequently'
                ].map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="weather-widget">
      {isExpanded ? renderExpandedView() : renderCompactView()}
    </div>
  );
};

export default WeatherWidget;