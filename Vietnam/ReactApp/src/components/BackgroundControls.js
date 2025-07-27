/**
 * Background Controls Component
 * Provides UI controls for background system and UI mode toggles
 */

import React from 'react';
import { HiPhoto, HiEyeSlash } from 'react-icons/hi2';
import { useLanguage } from '../hooks/useLanguage';
import { useBackgroundContext } from '../contexts/BackgroundContext';

const BackgroundControls = ({ className = '' }) => {
  const { t } = useLanguage();
  const {
    backgroundEnabled,
    toggleBackgroundSystem
  } = useBackgroundContext();

  return (
    <div className={`background-controls ${className}`}>
      {/* Background Toggle */}
      <button
        className={`toggle-button photo-toggle ${backgroundEnabled ? 'active' : ''}`}
        onClick={toggleBackgroundSystem}
        title={backgroundEnabled ? t('disablePhotos') || 'Turn off Photos' : t('enablePhotos') || 'Turn on Photos'}
        aria-label={backgroundEnabled ? 'Turn off photo backgrounds' : 'Turn on photo backgrounds'}
      >
        {backgroundEnabled ? <HiPhoto className="toggle-icon" /> : <HiEyeSlash className="toggle-icon" />}
        <div className="toggle-track">
          <div className="toggle-thumb"></div>
        </div>
        <span className="toggle-label">
          {t('photos') || 'Photos'}
        </span>
      </button>
    </div>
  );
};

export default BackgroundControls;
