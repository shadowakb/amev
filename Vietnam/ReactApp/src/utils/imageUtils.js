/**
 * Image utility functions for handling local images in the Vietnam Travel Itinerary app
 * Provides functions for generating image paths, handling fallbacks, and managing image loading
 */

/**
 * Converts a location name to a folder-safe slug
 * @param {string} locationName - The location name from the data
 * @returns {string} - The folder name slug
 */
export const locationNameToSlug = (locationName) => {
  if (!locationName || typeof locationName !== 'string') {
    return '';
  }
  
  return locationName
    .toLowerCase()
    .replace(/[,]/g, '') // Remove commas
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

/**
 * Generates the local image path for a given location and image index
 * @param {string} locationName - The location name from the data
 * @param {number} imageIndex - The index of the image (0-based)
 * @param {string} extension - The image file extension (default: 'jpg')
 * @returns {string} - The relative path to the local image
 */
export const getLocalImagePath = (locationName, imageIndex, extension = 'jpg') => {
  const slug = locationNameToSlug(locationName);
  if (!slug) {
    return null;
  }

  // Convert 0-based index to 1-based filename
  const imageNumber = imageIndex + 1;

  // Get the base path from package.json homepage or use default
  const basePath = process.env.PUBLIC_URL || '';
  return `${basePath}/images/${slug}/${imageNumber}.${extension}`;
};

/**
 * Generates fallback image path for missing images
 * @param {string} locationName - The location name for context
 * @param {number} imageIndex - The image index
 * @returns {string} - A placeholder image path
 */
export const getFallbackImagePath = (locationName, imageIndex) => {
  // Create a simple placeholder with location info
  const slug = locationNameToSlug(locationName);
  const colors = [
    '4A90E2', 'E74C3C', 'F39C12', '27AE60', '8E44AD', 
    '1ABC9C', 'E67E22', '9B59B6', '34495E', '2ECC71'
  ];
  const color = colors[imageIndex % colors.length];
  const text = encodeURIComponent(slug.replace(/-/g, ' '));
  
  return `https://placehold.co/400x250/${color}/FFFFFF?text=${text}`;
};

/**
 * Checks if an image exists at the given path
 * @param {string} imagePath - The path to check
 * @returns {Promise<boolean>} - Promise that resolves to true if image exists
 */
export const checkImageExists = (imagePath) => {
  return new Promise((resolve) => {
    if (!imagePath) {
      resolve(false);
      return;
    }
    
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = imagePath;
  });
};

/**
 * Gets the appropriate image source with fallback handling
 * @param {string} locationName - The location name
 * @param {number} imageIndex - The image index
 * @param {Object} originalImage - The original image object with src_en/src_hi
 * @param {boolean} useLocalFirst - Whether to try local images first (default: true)
 * @returns {Promise<string>} - Promise that resolves to the best available image source
 */
export const getImageSource = async (locationName, imageIndex, originalImage, useLocalFirst = true) => {
  if (!locationName || imageIndex < 0 || !originalImage) {
    return getFallbackImagePath(locationName, imageIndex);
  }
  
  if (useLocalFirst) {
    // Try local image first
    const localPath = getLocalImagePath(locationName, imageIndex);
    if (localPath) {
      const exists = await checkImageExists(localPath);
      if (exists) {
        return localPath;
      }
    }
    
    // Fallback to original external URL if available
    if (originalImage.src_en && !originalImage.src_en.includes('placehold.co')) {
      return originalImage.src_en;
    }
    
    // Last resort: generated placeholder
    return getFallbackImagePath(locationName, imageIndex);
  } else {
    // Try original external URL first
    if (originalImage.src_en && !originalImage.src_en.includes('placehold.co')) {
      return originalImage.src_en;
    }
    
    // Try local image as fallback
    const localPath = getLocalImagePath(locationName, imageIndex);
    if (localPath) {
      const exists = await checkImageExists(localPath);
      if (exists) {
        return localPath;
      }
    }
    
    // Last resort: generated placeholder
    return getFallbackImagePath(locationName, imageIndex);
  }
};

/**
 * Preloads images for better user experience
 * @param {Array<string>} imagePaths - Array of image paths to preload
 * @returns {Promise<Array<boolean>>} - Promise that resolves to array of success/failure results
 */
export const preloadImages = (imagePaths) => {
  return Promise.all(
    imagePaths.map(path => checkImageExists(path))
  );
};

/**
 * Converts image data from external URLs to local paths
 * @param {Array<Object>} images - Array of image objects with src_en, src_hi, alt_en, alt_hi
 * @param {string} locationName - The location name for generating paths
 * @returns {Array<Object>} - Array of updated image objects with local paths
 */
export const convertImagesToLocalPaths = (images, locationName) => {
  if (!Array.isArray(images) || !locationName) {
    return [];
  }
  
  return images.map((image, index) => ({
    ...image,
    src_en: getLocalImagePath(locationName, index),
    src_hi: getLocalImagePath(locationName, index), // Same image for both languages
    originalSrc_en: image.src_en, // Keep original for fallback
    originalSrc_hi: image.src_hi,
    localIndex: index
  }));
};

/**
 * Gets all possible image extensions to try
 * @returns {Array<string>} - Array of common image extensions
 */
export const getImageExtensions = () => {
  return ['jpg', 'jpeg', 'png', 'webp'];
};

/**
 * Tries to find an image with any common extension
 * @param {string} locationName - The location name
 * @param {number} imageIndex - The image index
 * @returns {Promise<string|null>} - Promise that resolves to the found image path or null
 */
export const findImageWithAnyExtension = async (locationName, imageIndex) => {
  const extensions = getImageExtensions();
  
  for (const ext of extensions) {
    const path = getLocalImagePath(locationName, imageIndex, ext);
    if (path) {
      const exists = await checkImageExists(path);
      if (exists) {
        return path;
      }
    }
  }
  
  return null;
};
