/**
 * Background Context for ensuring proper re-renders
 * This context provides background state and forces re-renders when toggled
 */

import React, { createContext, useContext } from 'react';
import { useBackgroundSystem } from '../hooks/useBackgroundSystem';

const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const backgroundSystem = useBackgroundSystem();
  
  return (
    <BackgroundContext.Provider value={backgroundSystem}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackgroundContext = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackgroundContext must be used within a BackgroundProvider');
  }
  return context;
};
