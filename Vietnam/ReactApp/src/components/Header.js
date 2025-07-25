import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

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
          <button 
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={`Switch to ${language === 'en' ? 'Hindi' : 'English'}`}
          >
            {t('languageToggle')}
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
