#!/usr/bin/env node

/**
 * Script to convert external image URLs to local paths in the locations data
 * This script helps automate the conversion process for all locations
 */

const fs = require('fs');
const path = require('path');

// Import the location data (we'll read it as text and process it)
const locationsFilePath = path.join(__dirname, '../src/data/locations.js');

/**
 * Converts a location name to a folder-safe slug
 * @param {string} locationName - The location name from the data
 * @returns {string} - The folder name slug
 */
function locationNameToSlug(locationName) {
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
}

/**
 * Generates the local image path for a given location and image index
 * @param {string} locationName - The location name from the data
 * @param {number} imageIndex - The index of the image (0-based)
 * @param {string} extension - The image file extension (default: 'jpg')
 * @returns {string} - The relative path to the local image
 */
function getLocalImagePath(locationName, imageIndex, extension = 'jpg') {
  const slug = locationNameToSlug(locationName);
  if (!slug) {
    return null;
  }

  // Convert 0-based index to 1-based filename
  const imageNumber = imageIndex + 1;

  // Include base path for GitHub Pages deployment
  const basePath = '/amev';
  return `${basePath}/images/${slug}/${imageNumber}.${extension}`;
}

/**
 * Creates the folder structure for a location
 * @param {string} locationName - The location name
 */
function createFolderStructure(locationName) {
  const slug = locationNameToSlug(locationName);
  const folderPath = path.join(__dirname, '../public/images', slug);
  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Created folder: ${folderPath}`);
  } else {
    console.log(`Folder already exists: ${folderPath}`);
  }
  
  return folderPath;
}

/**
 * Processes the locations.js file and converts URLs to local paths
 */
function convertLocationsFile() {
  try {
    // Read the locations file
    let content = fs.readFileSync(locationsFilePath, 'utf8');
    
    // Extract location names and their image counts
    const locationPattern = /export const locationData = {([^}]+)}/s;
    const match = content.match(locationPattern);
    
    if (!match) {
      console.error('Could not parse locations data');
      return;
    }
    
    // Find all location entries
    const locationEntries = content.match(/'[^']+': {[^}]+images: \[[^\]]+\][^}]*}/g);
    
    if (!locationEntries) {
      console.error('Could not find location entries');
      return;
    }
    
    console.log(`Found ${locationEntries.length} locations to process`);
    
    // Process each location
    locationEntries.forEach(entry => {
      // Extract location name
      const nameMatch = entry.match(/'([^']+)':/);
      if (!nameMatch) return;
      
      const locationName = nameMatch[1];
      console.log(`\nProcessing: ${locationName}`);
      
      // Create folder structure
      createFolderStructure(locationName);
      
      // Extract images array
      const imagesMatch = entry.match(/images: \[([^\]]+)\]/s);
      if (!imagesMatch) return;
      
      const imagesContent = imagesMatch[1];
      
      // Count images by counting src_en occurrences
      const imageCount = (imagesContent.match(/src_en:/g) || []).length;
      console.log(`  Found ${imageCount} images`);
      
      // Replace each image's src_en and src_hi with local paths
      let updatedEntry = entry;
      let imageIndex = 0;
      
      // Replace src_en URLs
      updatedEntry = updatedEntry.replace(/src_en: '[^']*'/g, (match) => {
        const localPath = getLocalImagePath(locationName, imageIndex);
        imageIndex++;
        return `src_en: '${localPath}'`;
      });
      
      // Reset index and replace src_hi URLs
      imageIndex = 0;
      updatedEntry = updatedEntry.replace(/src_hi: '[^']*'/g, (match) => {
        const localPath = getLocalImagePath(locationName, imageIndex);
        imageIndex++;
        return `src_hi: '${localPath}'`;
      });
      
      // Replace in main content
      content = content.replace(entry, updatedEntry);
    });
    
    // Create backup
    const backupPath = locationsFilePath + '.backup';
    fs.writeFileSync(backupPath, fs.readFileSync(locationsFilePath));
    console.log(`\nBackup created: ${backupPath}`);
    
    // Write updated content
    fs.writeFileSync(locationsFilePath, content);
    console.log(`Updated: ${locationsFilePath}`);
    
    console.log('\n✅ Conversion completed successfully!');
    console.log('\nNext steps:');
    console.log('1. Manually add images to the created folders');
    console.log('2. Name images as 1.jpg, 2.jpg, 3.jpg, etc.');
    console.log('3. Test the application to ensure images load correctly');
    
  } catch (error) {
    console.error('Error processing locations file:', error);
  }
}

/**
 * Generates a summary of all locations and their folder names
 */
function generateLocationSummary() {
  try {
    const content = fs.readFileSync(locationsFilePath, 'utf8');
    const locationNames = content.match(/'([^']+)':/g);
    
    if (!locationNames) {
      console.error('Could not extract location names');
      return;
    }
    
    console.log('\n📋 Location to Folder Mapping:');
    console.log('=====================================');
    
    locationNames.forEach(nameMatch => {
      const locationName = nameMatch.replace(/['':]/g, '');
      const slug = locationNameToSlug(locationName);
      console.log(`${locationName} → ${slug}`);
    });
    
  } catch (error) {
    console.error('Error generating summary:', error);
  }
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log('Vietnam Travel App - Image Conversion Script');
    console.log('');
    console.log('Usage:');
    console.log('  node convert-images-to-local.js [options]');
    console.log('');
    console.log('Options:');
    console.log('  --summary, -s    Show location to folder mapping');
    console.log('  --convert, -c    Convert URLs to local paths');
    console.log('  --help, -h       Show this help message');
    console.log('');
    return;
  }
  
  if (args.includes('--summary') || args.includes('-s')) {
    generateLocationSummary();
    return;
  }
  
  if (args.includes('--convert') || args.includes('-c')) {
    console.log('🔄 Starting image URL conversion...');
    convertLocationsFile();
    return;
  }
  
  // Default: show summary
  console.log('Vietnam Travel App - Image Conversion Script');
  console.log('Use --help for usage information');
  generateLocationSummary();
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  locationNameToSlug,
  getLocalImagePath,
  createFolderStructure,
  convertLocationsFile,
  generateLocationSummary
};
