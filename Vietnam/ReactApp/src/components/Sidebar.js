import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { itineraryData } from '../data/itinerary';

const Sidebar = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">{t('headerTitle')}</h2>
          <button 
            className="sidebar-close md:hidden"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <ul className="sidebar-nav">
          <li>
            <Link 
              to="/" 
              className={`sidebar-link ${isActive('/') ? 'sidebar-link--active' : ''}`}
              onClick={onClose}
            >
              <span className="sidebar-link-icon">📋</span>
              {t('overview')}
            </Link>
          </li>
          
          {itineraryData.map((day) => (
            <li key={day.day}>
              <Link 
                to={`/day/${day.day}`}
                className={`sidebar-link ${isActive(`/day/${day.day}`) ? 'sidebar-link--active' : ''}`}
                onClick={onClose}
              >
                <span className="sidebar-link-icon">{day.day}</span>
                <div className="sidebar-link-content">
                  <span className="sidebar-link-title">
                    {t('dayLabel')} {day.day}
                  </span>
                  <span className="sidebar-link-subtitle">
                    {day.location}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
