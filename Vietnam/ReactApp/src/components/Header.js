import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import HomeButton from './HomeButton';
import BackgroundControls from './BackgroundControls';

const Header = ({ onMenuClick }) => {
  const { t, toggleLanguage, language } = useLanguage();

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button 
            className="menu-button md:hidden"
            onClick={onMenuClick}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          
          <div className="header-title">
            <h1>{t('headerTitle')}</h1>
            <p className="header-subtitle">{t('headerSubtitle')}</p>
          </div>
        </div>
        
        <div className="header-right">
          <HomeButton className="header-home-button" />
          <BackgroundControls className="header-background-controls" />
          <button
            className={`toggle-button language-toggle ${language === 'hi' ? 'active' : ''}`}
            onClick={toggleLanguage}
            aria-label={`Switch to ${language === 'en' ? 'Hindi' : 'English'}`}
            title={`Switch to ${language === 'en' ? 'Hindi' : 'English'}`}
          >
            <div className="language-toggle-container">
              <span className={`language-option ${language === 'en' ? 'active' : ''}`}>EN</span>
              <span className={`language-option ${language === 'hi' ? 'active' : ''}`}>हिं</span>
            </div>
          </button>
        </div>
      </div>
      
      <div className="header-description">
        <p>{t('headerDescription')}</p>
      </div>
    </header>
  );
};

export default Header;
