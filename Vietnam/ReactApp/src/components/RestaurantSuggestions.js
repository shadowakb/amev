import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import Modal from './Modal';
import { getCuisineDataForCity, getSpecialtiesForCity, getRestaurantsForCity } from '../data/vietnameseCuisine';

const RestaurantSuggestions = ({ location, dayData }) => {
  const { t, isHindi } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('specialties');

  // Extract city name from location
  const getCityName = (locationString) => {
    if (!locationString || typeof locationString !== 'string') return null;

    const location = locationString.toLowerCase();
    if (location.includes('hanoi')) return 'Hanoi';
    if (location.includes('hoi an')) return 'Hoi An';
    if (location.includes('da nang')) return 'Da Nang';
    return null;
  };

  const locationToCheck = location || dayData?.location;
  const cityName = getCityName(locationToCheck);
  const cuisineData = getCuisineDataForCity(cityName);
  const specialties = getSpecialtiesForCity(cityName);
  const restaurants = getRestaurantsForCity(cityName);

  // Don't show button for travel days or non-food cities
  if (!cityName || !cuisineData) {
    return null;
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Filter specialties by category for better organization
  const vegetarianSpecialties = specialties.filter(s =>
    s.dietaryInfo_en.toLowerCase().includes('vegetarian') ||
    s.name_en.toLowerCase().includes('vegetarian') ||
    s.name_en.toLowerCase().includes('indian')
  );

  const vietnameseSpecialties = specialties.filter(s =>
    !s.name_en.toLowerCase().includes('vegetarian') &&
    !s.name_en.toLowerCase().includes('indian')
  );

  const renderSpecialties = () => (
    <div className="restaurant-specialties">
      <div className="specialties-section">
        <h4 className="section-title">
          🌱 {t('vegetarianFriendly')}
        </h4>
        <div className="specialties-grid">
          {vegetarianSpecialties.map((specialty, index) => (
            <div key={`veg-${index}`} className="specialty-card specialty-card--vegetarian">
              <div className="specialty-header">
                <h5 className="specialty-name">
                  {isHindi ? specialty.name_hi : specialty.name_en}
                </h5>
                <span className="specialty-price">{specialty.priceRange}</span>
              </div>
              <p className="specialty-description">
                {isHindi ? specialty.description_hi : specialty.description_en}
              </p>
              <div className="specialty-details">
                <div className="specialty-info">
                  <span className="info-label">{t('dietaryInfo')}:</span>
                  <span className="info-text">
                    {isHindi ? specialty.dietaryInfo_hi : specialty.dietaryInfo_en}
                  </span>
                </div>
                <div className="specialty-info">
                  <span className="info-label">{t('bestTime')}:</span>
                  <span className="info-text">
                    {isHindi ? specialty.bestTime_hi : specialty.bestTime_en}
                  </span>
                </div>
              </div>
              <div className={`specialty-category specialty-category--${specialty.category}`}>
                {specialty.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {vietnameseSpecialties.length > 0 && (
        <div className="specialties-section">
          <h4 className="section-title">
            🇻🇳 {isHindi ? `${cuisineData.cityName_hi} की विशेषताएं` : `${cuisineData.cityName} Vietnamese Specialties`}
          </h4>
          <div className="specialties-grid">
            {vietnameseSpecialties.map((specialty, index) => (
              <div key={`vn-${index}`} className="specialty-card">
                <div className="specialty-header">
                  <h5 className="specialty-name">
                    {isHindi ? specialty.name_hi : specialty.name_en}
                  </h5>
                  <span className="specialty-price">{specialty.priceRange}</span>
                </div>
                <p className="specialty-description">
                  {isHindi ? specialty.description_hi : specialty.description_en}
                </p>
                <div className="specialty-details">
                  <div className="specialty-info">
                    <span className="info-label">{t('dietaryInfo')}:</span>
                    <span className="info-text">
                      {isHindi ? specialty.dietaryInfo_hi : specialty.dietaryInfo_en}
                    </span>
                  </div>
                  <div className="specialty-info">
                    <span className="info-label">{t('bestTime')}:</span>
                    <span className="info-text">
                      {isHindi ? specialty.bestTime_hi : specialty.bestTime_en}
                    </span>
                  </div>
                </div>
                <div className={`specialty-category specialty-category--${specialty.category}`}>
                  {specialty.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderRestaurants = () => {
    // Separate Indian/vegetarian restaurants from Vietnamese ones
    const indianRestaurants = restaurants.filter(r =>
      r.name_en.toLowerCase().includes('indian') ||
      r.name_en.toLowerCase().includes('govinda') ||
      r.name_en.toLowerCase().includes('loving hut') ||
      r.name_en.toLowerCase().includes('tamarind') ||
      r.specialty_en.toLowerCase().includes('indian')
    );

    const vietnameseRestaurants = restaurants.filter(r =>
      !r.name_en.toLowerCase().includes('indian') &&
      !r.name_en.toLowerCase().includes('govinda') &&
      !r.name_en.toLowerCase().includes('loving hut') &&
      !r.name_en.toLowerCase().includes('tamarind') &&
      !r.specialty_en.toLowerCase().includes('indian')
    );

    return (
      <div className="restaurant-recommendations">
        {indianRestaurants.length > 0 && (
          <div className="restaurants-section">
            <h4 className="section-title">
              🇮🇳 {t('indianCuisine')}
            </h4>
            <div className="restaurants-list">
              {indianRestaurants.map((restaurant, index) => (
                <div key={`indian-${index}`} className="restaurant-card restaurant-card--indian">
                  <div className="restaurant-header">
                    <div className="restaurant-info">
                      <h5 className="restaurant-name">
                        {isHindi ? restaurant.name_hi : restaurant.name_en}
                      </h5>
                      <div className="restaurant-rating">
                        <span className="rating-stars">⭐</span>
                        <span className="rating-text">{restaurant.rating}</span>
                      </div>
                    </div>
                    <span className="restaurant-price">{restaurant.priceRange}</span>
                  </div>

                  <p className="restaurant-address">
                    📍 {isHindi ? restaurant.address_hi : restaurant.address_en}
                  </p>

                  <div className="restaurant-specialty">
                    <span className="specialty-label">{t('signatureDish')}:</span>
                    <span className="specialty-text">
                      {isHindi ? restaurant.specialty_hi : restaurant.specialty_en}
                    </span>
                  </div>

                  <p className="restaurant-description">
                    {isHindi ? restaurant.description_hi : restaurant.description_en}
                  </p>

                  <button
                    className="maps-button"
                    onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(restaurant.name_en + ' ' + restaurant.address_en)}`, '_blank')}
                  >
                    {t('viewOnGoogleMaps')}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {vietnameseRestaurants.length > 0 && (
          <div className="restaurants-section">
            <h4 className="section-title">
              🇻🇳 {isHindi ? 'वियतनामी रेस्तराँ' : 'Vietnamese Restaurants'}
            </h4>
            <div className="restaurants-list">
              {vietnameseRestaurants.map((restaurant, index) => (
                <div key={`vn-${index}`} className="restaurant-card">
                  <div className="restaurant-header">
                    <div className="restaurant-info">
                      <h5 className="restaurant-name">
                        {isHindi ? restaurant.name_hi : restaurant.name_en}
                      </h5>
                      <div className="restaurant-rating">
                        <span className="rating-stars">⭐</span>
                        <span className="rating-text">{restaurant.rating}</span>
                      </div>
                    </div>
                    <span className="restaurant-price">{restaurant.priceRange}</span>
                  </div>

                  <p className="restaurant-address">
                    📍 {isHindi ? restaurant.address_hi : restaurant.address_en}
                  </p>

                  <div className="restaurant-specialty">
                    <span className="specialty-label">{t('signatureDish')}:</span>
                    <span className="specialty-text">
                      {isHindi ? restaurant.specialty_hi : restaurant.specialty_en}
                    </span>
                  </div>

                  <p className="restaurant-description">
                    {isHindi ? restaurant.description_hi : restaurant.description_en}
                  </p>

                  <button
                    className="maps-button"
                    onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(restaurant.name_en + ' ' + restaurant.address_en)}`, '_blank')}
                  >
                    {t('viewOnGoogleMaps')}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <button
        className="restaurant-suggestions-button"
        onClick={openModal}
      >
        <span className="button-icon">🍜</span>
        <span className="button-text">{t('restaurantSuggestionsButton')}</span>
        <span className="vegetarian-badge">🌱</span>
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={t('modalTitle')}
      >
        <div className="restaurant-modal-content">
          <div className="modal-tabs">
            <button
              className={`tab-button ${activeTab === 'specialties' ? 'tab-button--active' : ''}`}
              onClick={() => setActiveTab('specialties')}
            >
              {t('localDishes')}
            </button>
            <button
              className={`tab-button ${activeTab === 'restaurants' ? 'tab-button--active' : ''}`}
              onClick={() => setActiveTab('restaurants')}
            >
              {t('restaurants')}
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'specialties' ? renderSpecialties() : renderRestaurants()}
          </div>

          {specialties.length === 0 && restaurants.length === 0 && (
            <div className="no-suggestions">
              <p>{t('noSuggestionsFound')}</p>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default RestaurantSuggestions;
