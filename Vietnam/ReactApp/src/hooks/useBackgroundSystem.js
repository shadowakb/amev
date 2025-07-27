/**
 * Background System Hook
 * Manages background slideshow state and user preferences (ON/OFF)
 */

import { useState, useEffect, useCallback } from 'react';
import { BACKGROUND_CONFIG } from '../config/backgroundConfig';

export const useBackgroundSystem = () => {
  // Load initial preferences from localStorage
  const loadPreferences = () => {
    try {
      const backgroundEnabled = localStorage.getItem(BACKGROUND_CONFIG.STORAGE_KEYS.BACKGROUND_ENABLED);

      return {
        backgroundEnabled: backgroundEnabled !== null ? JSON.parse(backgroundEnabled) : BACKGROUND_CONFIG.DEFAULTS.BACKGROUND_ENABLED
      };
    } catch (error) {
      console.warn('Failed to load background preferences:', error);
      return {
        backgroundEnabled: BACKGROUND_CONFIG.DEFAULTS.BACKGROUND_ENABLED
      };
    }
  };

  const [preferences, setPreferences] = useState(loadPreferences);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0);

  // Force re-render when preferences change
  useEffect(() => {
    // This effect ensures components re-render when background preferences change
    console.log('Background preferences updated:', preferences);
    // Force a state update to trigger re-renders
    setCurrentBackgroundIndex(prev => prev);
  }, [preferences]);

  // Save preferences to localStorage
  const savePreferences = useCallback((newPreferences) => {
    try {
      localStorage.setItem(
        BACKGROUND_CONFIG.STORAGE_KEYS.BACKGROUND_ENABLED,
        JSON.stringify(newPreferences.backgroundEnabled)
      );
    } catch (error) {
      console.warn('Failed to save background preferences:', error);
    }
  }, []);

  // Toggle background system on/off
  const toggleBackgroundSystem = useCallback(() => {
    const newPreferences = {
      ...preferences,
      backgroundEnabled: !preferences.backgroundEnabled
    };
    setPreferences(newPreferences);
    savePreferences(newPreferences);

    // Force immediate re-render by updating force update counter
    setForceUpdate(prev => prev + 1);

    // Also force a small delay to ensure state propagation
    setTimeout(() => {
      setForceUpdate(prev => prev + 1);
    }, 10);
  }, [preferences, savePreferences]);

  // Set specific background index
  const setBackgroundIndex = useCallback((index) => {
    setCurrentBackgroundIndex(index);
  }, []);

  // Pause/resume slideshow
  const pauseSlideshow = useCallback(() => setIsPaused(true), []);
  const resumeSlideshow = useCallback(() => setIsPaused(false), []);

  // Check if backgrounds should be shown (simplified - just check if enabled)
  const shouldShowBackgrounds = preferences.backgroundEnabled;

  // Detect if user prefers dark mode
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Detect if user is on mobile
  const isMobile = window.innerWidth <= 768;

  return {
    // State
    preferences,
    currentBackgroundIndex,
    isPaused,
    shouldShowBackgrounds,
    isDarkMode,
    isMobile,
    forceUpdate, // Include forceUpdate to trigger re-renders

    // Actions
    toggleBackgroundSystem,
    setBackgroundIndex,
    pauseSlideshow,
    resumeSlideshow,

    // Computed values
    backgroundEnabled: preferences.backgroundEnabled
  };
};
