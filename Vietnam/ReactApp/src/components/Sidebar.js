import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { itineraryData } from '../data/itinerary';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">{t('overview')}</h2>
          <button 
            className="sidebar-close" 
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ×
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link 
                to="/" 
                className={`sidebar-link ${isActive('/') ? 'sidebar-link--active' : ''}`}
                onClick={onClose}
              >
                <div className="sidebar-link-icon">📋</div>
                <div className="sidebar-link-content">
                  <div className="sidebar-link-title">{t('overview')}</div>
                  <div className="sidebar-link-subtitle">All days</div>
                </div>
              </Link>
            </li>
            
            {itineraryData.map((day) => (
              <li key={day.day}>
                <Link 
                  to={`/day/${day.day}`}
                  className={`sidebar-link ${isActive(`/day/${day.day}`) ? 'sidebar-link--active' : ''}`}
                  onClick={onClose}
                >
                  <div className="sidebar-link-icon">{day.day}</div>
                  <div className="sidebar-link-content">
                    <div className="sidebar-link-title">{t('dayLabel')} {day.day}</div>
                    <div className="sidebar-link-subtitle">{day.location}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
    </>
  );
};

export default Sidebar;
