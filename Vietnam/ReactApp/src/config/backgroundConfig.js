/**
 * Centralized Background System Configuration
 * All background-related settings, timing, and opacity values
 */

export const BACKGROUND_CONFIG = {
  // Opacity Settings
  OPACITY: {
    // Header section overlay opacity
    HEADER_LIGHT: 0.82,
    HEADER_DARK: 0.85,
    
    // Day cards overlay opacity
    DAY_CARDS_LIGHT: 0.88,
    DAY_CARDS_DARK: 0.85,
    
    // Day cards hover overlay opacity
    DAY_CARDS_HOVER_LIGHT: 0.80,
    DAY_CARDS_HOVER_DARK: 0.78,
    
    // Main page background overlay opacity
    MAIN_BACKGROUND_LIGHT: 0.70,
    MAIN_BACKGROUND_DARK: 0.75,
    
    // Day view background overlay opacity
    DAY_VIEW_LIGHT: 0.75,
    DAY_VIEW_DARK: 0.80,
    
    // Mobile adjustments (higher opacity for better readability)
    MOBILE_ADJUSTMENT: 0.05
  },

  // Timing Settings
  TIMING: {
    // Overview page slideshow interval (milliseconds)
    OVERVIEW_SLIDESHOW_INTERVAL: 3000,
    
    // Day view slideshow interval (milliseconds)
    DAY_VIEW_SLIDESHOW_INTERVAL: 5000,
    
    // Background image transition duration (milliseconds)
    BACKGROUND_TRANSITION_DURATION: 2000,
    
    // Overlay transition duration (milliseconds)
    OVERLAY_TRANSITION_DURATION: 2500,
    
    // Header content floating animation duration (milliseconds)
    HEADER_ANIMATION_DURATION: 6000
  },

  // Animation Settings
  ANIMATIONS: {
    // Enable/disable floating header animation
    ENABLE_HEADER_FLOAT: true,
    
    // Enable/disable smooth background transitions
    ENABLE_SMOOTH_TRANSITIONS: true,
    
    // Enable/disable pause on hover
    ENABLE_PAUSE_ON_HOVER: true
  },

  // Local Storage Keys
  STORAGE_KEYS: {
    BACKGROUND_ENABLED: 'vietnam_app_background_enabled',
    USER_PREFERENCES: 'vietnam_app_user_preferences'
  },

  // Default Settings
  DEFAULTS: {
    BACKGROUND_ENABLED: true
  }
};

/**
 * Helper function to get opacity value based on theme and device
 */
export const getOpacityValue = (baseOpacity, isDarkMode = false, isMobile = false) => {
  let opacity = baseOpacity;
  
  // Adjust for dark mode
  if (isDarkMode) {
    opacity += 0.03; // Slightly higher opacity for dark mode
  }
  
  // Adjust for mobile
  if (isMobile) {
    opacity += BACKGROUND_CONFIG.OPACITY.MOBILE_ADJUSTMENT;
  }
  
  // Ensure opacity stays within valid range
  return Math.min(Math.max(opacity, 0), 1);
};

/**
 * Helper function to generate CSS gradient overlay
 */
export const generateOverlayGradient = (opacity, isDarkMode = false) => {
  const baseColor = isDarkMode ? '18, 18, 18' : '255, 255, 255';
  
  return `linear-gradient(
    135deg,
    rgba(${baseColor}, ${opacity}) 0%,
    rgba(${baseColor}, ${opacity - 0.05}) 50%,
    rgba(${baseColor}, ${opacity - 0.02}) 100%
  )`;
};

/**
 * Helper function to get timing value
 */
export const getTimingValue = (timingKey) => {
  return BACKGROUND_CONFIG.TIMING[timingKey] || 3000;
};
