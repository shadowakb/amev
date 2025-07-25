import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p className="footer-copyright">{t('footerCopyright')}</p>
          <p className="footer-created">{t('footerCreatedBy')}</p>
        </div>
        
        <div className="footer-links">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a 
            href="https://reactjs.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            React
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
