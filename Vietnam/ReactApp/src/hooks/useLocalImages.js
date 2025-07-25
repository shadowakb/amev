import { useState, useEffect, useCallback } from 'react';
import { 
  getImageSource, 
  getFallbackImagePath, 
  findImageWithAnyExtension,
  preloadImages 
} from '../utils/imageUtils';

/**
 * Custom hook for managing local images with fallback handling
 * @param {Array<Object>} images - Array of image objects
 * @param {string} locationName - The location name for generating paths
 * @param {Object} options - Configuration options
 * @returns {Object} - Hook state and functions
 */
export const useLocalImages = (images, locationName, options = {}) => {
  const {
    useLocalFirst = true,
    preloadAll = false,
    enableFallback = true
  } = options;

  const [imageStates, setImageStates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Loads a single image and determines the best source
   */
  const loadImage = useCallback(async (imageData, index) => {
    try {
      let finalSrc;
      
      if (useLocalFirst) {
        // Try to find local image with any extension
        const localSrc = await findImageWithAnyExtension(locationName, index);
        if (localSrc) {
          finalSrc = localSrc;
        } else if (enableFallback) {
          // Try original external URL
          if (imageData.src_en && !imageData.src_en.includes('placehold.co')) {
            finalSrc = imageData.src_en;
          } else {
            // Generate fallback placeholder
            finalSrc = getFallbackImagePath(locationName, index);
          }
        } else {
          finalSrc = getFallbackImagePath(locationName, index);
        }
      } else {
        // Use the original getImageSource logic
        finalSrc = await getImageSource(locationName, index, imageData, useLocalFirst);
      }

      return {
        ...imageData,
        src_en: finalSrc,
        src_hi: finalSrc, // Same image for both languages
        originalSrc_en: imageData.src_en,
        originalSrc_hi: imageData.src_hi,
        isLocal: finalSrc.startsWith('/images/'),
        isLoaded: true,
        hasError: false,
        index
      };
    } catch (err) {
      console.warn(`Failed to load image ${index} for ${locationName}:`, err);
      return {
        ...imageData,
        src_en: getFallbackImagePath(locationName, index),
        src_hi: getFallbackImagePath(locationName, index),
        originalSrc_en: imageData.src_en,
        originalSrc_hi: imageData.src_hi,
        isLocal: false,
        isLoaded: true,
        hasError: true,
        index
      };
    }
  }, [locationName, useLocalFirst, enableFallback]);

  /**
   * Loads all images
   */
  const loadAllImages = useCallback(async () => {
    if (!images || !Array.isArray(images) || images.length === 0) {
      setImageStates({});
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const loadPromises = images.map((image, index) => loadImage(image, index));
      const loadedImages = await Promise.all(loadPromises);
      
      // Convert array to object with index as key
      const newImageStates = {};
      loadedImages.forEach((image, index) => {
        newImageStates[index] = image;
      });

      setImageStates(newImageStates);

      // Preload all images if requested
      if (preloadAll) {
        const imagePaths = loadedImages.map(img => img.src_en);
        preloadImages(imagePaths).catch(err => {
          console.warn('Failed to preload some images:', err);
        });
      }
    } catch (err) {
      console.error('Failed to load images:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [images, loadImage, preloadAll]);

  /**
   * Reloads a specific image
   */
  const reloadImage = useCallback(async (index) => {
    if (!images || !images[index]) return;

    try {
      const reloadedImage = await loadImage(images[index], index);
      setImageStates(prev => ({
        ...prev,
        [index]: reloadedImage
      }));
    } catch (err) {
      console.error(`Failed to reload image ${index}:`, err);
    }
  }, [images, loadImage]);

  /**
   * Gets the processed image data for a specific index
   */
  const getImage = useCallback((index) => {
    return imageStates[index] || null;
  }, [imageStates]);

  /**
   * Gets all processed images as an array
   */
  const getAllImages = useCallback(() => {
    if (!images) return [];
    return images.map((_, index) => imageStates[index]).filter(Boolean);
  }, [images, imageStates]);

  /**
   * Gets statistics about the loaded images
   */
  const getStats = useCallback(() => {
    const allImages = getAllImages();
    const total = allImages.length;
    const local = allImages.filter(img => img.isLocal).length;
    const errors = allImages.filter(img => img.hasError).length;
    const external = total - local - errors;

    return {
      total,
      local,
      external,
      errors,
      localPercentage: total > 0 ? Math.round((local / total) * 100) : 0
    };
  }, [getAllImages]);

  // Load images when dependencies change
  useEffect(() => {
    loadAllImages();
  }, [loadAllImages]);

  return {
    // State
    images: imageStates,
    loading,
    error,
    
    // Functions
    getImage,
    getAllImages,
    reloadImage,
    loadAllImages,
    getStats,
    
    // Computed values
    hasImages: Object.keys(imageStates).length > 0,
    imageCount: Object.keys(imageStates).length
  };
};

/**
 * Simplified hook for getting a single image source
 * @param {string} locationName - The location name
 * @param {number} imageIndex - The image index
 * @param {Object} originalImage - The original image data
 * @returns {Object} - Image source and loading state
 */
export const useImageSource = (locationName, imageIndex, originalImage) => {
  const [src, setSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLocal, setIsLocal] = useState(false);

  useEffect(() => {
    let mounted = true;

    const loadImageSource = async () => {
      setLoading(true);
      try {
        const imageSrc = await getImageSource(locationName, imageIndex, originalImage, true);
        if (mounted) {
          setSrc(imageSrc);
          setIsLocal(imageSrc.startsWith('/images/'));
        }
      } catch (err) {
        if (mounted) {
          setSrc(getFallbackImagePath(locationName, imageIndex));
          setIsLocal(false);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    if (locationName && imageIndex >= 0 && originalImage) {
      loadImageSource();
    } else {
      setLoading(false);
    }

    return () => {
      mounted = false;
    };
  }, [locationName, imageIndex, originalImage]);

  return { src, loading, isLocal };
};
