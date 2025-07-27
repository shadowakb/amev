/**
 * Home Button Component
 * Provides navigation back to the overview page
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

const HomeButton = ({ className = '' }) => {
  const { t } = useLanguage();
  const location = useLocation();
  
  // Don't show home button if already on home page
  const isHomePage = location.pathname === '/amev' || location.pathname === '/amev/';

  if (isHomePage) {
    return null;
  }

  return (
    <Link 
      to="/" 
      className={`home-button ${className}`}
      title={t('backToOverview') || 'Back to Overview'}
      aria-label="Navigate back to overview page"
    >
      <span className="home-icon">🏠</span>
      <span className="home-label">{t('home') || 'Home'}</span>
    </Link>
  );
};

export default HomeButton;
