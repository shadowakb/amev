# Vietnam Travel Itinerary - Local Image System

## Overview

This guide explains the new local image handling system that replaces external placeholder URLs with a local file-based structure. The system provides better performance, reliability, and control over image assets.

## Folder Structure

Images are organized in the following structure:

```
public/
└── images/
    ├── hoan-kiem-lake-hanoi/
    │   ├── 1.jpg
    │   ├── 2.jpg
    │   ├── 3.jpg
    │   └── ...
    ├── thang-long-water-puppet-theatre-hanoi/
    │   ├── 1.jpg
    │   ├── 2.jpg
    │   └── ...
    ├── hoi-an-ancient-town/
    │   ├── 1.jpg
    │   ├── 2.jpg
    │   └── ...
    └── [other-location-folders]/
        ├── 1.jpg
        ├── 2.jpg
        └── ...
```

## Naming Conventions

### Folder Names
Location folder names are generated from location names using the following rules:
- Convert to lowercase
- Remove commas and special characters
- Replace spaces with hyphens
- Remove multiple consecutive hyphens

**Examples:**
- `'Hoan Kiem Lake, Hanoi'` → `hoan-kiem-lake-hanoi`
- `'Thang Long Water Puppet Theatre, Hanoi'` → `thang-long-water-puppet-theatre-hanoi`
- `'Hoi An Ancient Town'` → `hoi-an-ancient-town`

### Image File Names
Images within each folder should be numbered sequentially:
- `1.jpg` (first image)
- `2.jpg` (second image)
- `3.jpg` (third image)
- etc.

### Supported File Extensions
The system supports multiple image formats:
- `.jpg` (recommended)
- `.jpeg`
- `.png`
- `.webp`

## Adding New Images

### Step 1: Identify the Location Folder
1. Find the location name in `src/data/locations.js`
2. Convert the name to a folder slug using the naming convention above
3. Navigate to `public/images/[folder-name]/`

### Step 2: Add Images
1. Place your images in the appropriate folder
2. Name them sequentially: `1.jpg`, `2.jpg`, `3.jpg`, etc.
3. Ensure images are web-optimized (recommended: max 1200px width, 80% quality)

### Step 3: Verify the Setup
The system will automatically:
- Try to load local images first
- Fall back to external URLs if local images don't exist
- Generate placeholder images as a last resort

## Image Optimization Recommendations

### File Size
- Keep images under 500KB for better performance
- Use JPEG for photos, PNG for graphics with transparency
- Consider WebP format for modern browsers

### Dimensions
- Recommended width: 800-1200px
- Aspect ratio: 16:10 or 4:3 works well for the carousel
- Height: 500-750px

### Quality
- JPEG quality: 80-85%
- Optimize images using tools like:
  - TinyPNG/TinyJPG
  - ImageOptim (Mac)
  - Squoosh (web-based)

## Technical Implementation

### Key Components

1. **Image Utilities** (`src/utils/imageUtils.js`)
   - `locationNameToSlug()` - Converts location names to folder names
   - `getLocalImagePath()` - Generates relative paths to local images
   - `getFallbackImagePath()` - Creates placeholder images
   - `findImageWithAnyExtension()` - Tries multiple file extensions

2. **React Hook** (`src/hooks/useLocalImages.js`)
   - `useLocalImages()` - Manages multiple images with loading states
   - `useImageSource()` - Simplified hook for single images

3. **Image Component** (`src/components/LocationHighlights.js`)
   - `ImageWithFallback` - Handles loading, error states, and fallbacks

### Fallback Behavior

The system uses a three-tier fallback approach:

1. **Local Images** (preferred)
   - Tries to load from `/images/[location-slug]/[number].[ext]`
   - Supports multiple file extensions

2. **External URLs** (fallback)
   - Uses original external URLs if local images aren't found
   - Skips placeholder URLs (placehold.co)

3. **Generated Placeholders** (last resort)
   - Creates colored placeholder images with location names
   - Ensures the UI never breaks due to missing images

## Updating Location Data

When adding new locations or updating existing ones:

1. **Update the data file** (`src/data/locations.js`)
   ```javascript
   images: [
     { 
       src_en: '/images/location-folder-name/1.jpg', 
       alt_en: 'English description', 
       src_hi: '/images/location-folder-name/1.jpg', 
       alt_hi: 'Hindi description' 
     },
     // ... more images
   ]
   ```

2. **Create the folder structure**
   ```
   public/images/location-folder-name/
   ├── 1.jpg
   ├── 2.jpg
   └── 3.jpg
   ```

3. **Test the implementation**
   - Check that images load correctly
   - Verify fallback behavior works
   - Test both English and Hindi interfaces

## Troubleshooting

### Images Not Loading
1. Check folder name matches the slug conversion
2. Verify file names are numbered correctly (1.jpg, 2.jpg, etc.)
3. Ensure files are in the `public/images/` directory
4. Check browser console for error messages

### Performance Issues
1. Optimize image file sizes
2. Consider lazy loading for large galleries
3. Use appropriate image formats (WebP for modern browsers)

### Fallback Not Working
1. Check that original URLs in data are valid
2. Verify the fallback placeholder generation
3. Look for JavaScript errors in browser console

## Future Enhancements

### Planned Features
- Automatic image optimization during build
- Lazy loading for better performance
- Progressive image loading (blur-up effect)
- Image preloading for smoother navigation

### Maintenance
- Regularly audit image sizes and optimize
- Update external URLs if they become unavailable
- Consider implementing a content management system for easier image updates

## File Locations Reference

- **Image utilities**: `src/utils/imageUtils.js`
- **React hooks**: `src/hooks/useLocalImages.js`
- **Main component**: `src/components/LocationHighlights.js`
- **Location data**: `src/data/locations.js`
- **Image assets**: `public/images/`
- **Styles**: `src/styles/App.css` (image loading styles)

## Support

For questions or issues with the image system:
1. Check this documentation first
2. Review the browser console for error messages
3. Verify file paths and naming conventions
4. Test the fallback behavior
