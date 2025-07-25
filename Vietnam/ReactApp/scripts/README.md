# Scripts Directory

This directory contains utility scripts for managing the Vietnam Travel Itinerary app.

> 📚 **For detailed documentation**, see [docs/scripts.md](../docs/scripts.md)

## convert-images-to-local.js

A Node.js script to automate the conversion of external image URLs to local paths in the location data.

### Quick Usage

```bash
# Show location to folder mapping
node scripts/convert-images-to-local.js --summary

# Convert all URLs to local paths
node scripts/convert-images-to-local.js --convert

# Show help
node scripts/convert-images-to-local.js --help
```

### What it does

1. **Creates folder structure**: Automatically creates folders in `public/images/` for each location
2. **Converts URLs**: Replaces external URLs with local paths in `src/data/locations.js`
3. **Creates backup**: Makes a backup of the original file before making changes
4. **Provides mapping**: Shows the relationship between location names and folder names

### After Running the Script

1. **Add images manually**: Place your images in the created folders
2. **Name correctly**: Use sequential naming (1.jpg, 2.jpg, 3.jpg, etc.)
3. **Test the app**: Verify images load correctly in the application

### Safety Features

- Creates a backup file before making changes
- Only processes valid location entries
- Preserves alt text and other image properties
- Non-destructive (can be reverted using the backup)

## Documentation

For comprehensive documentation including detailed usage, troubleshooting, and technical details:

- **[Complete Scripts Documentation](../docs/scripts.md)** - Full guide with examples and troubleshooting
- **[Image System Guide](../docs/image-system.md)** - Technical implementation details
- **[Implementation Status](../docs/implementation-status.md)** - Current implementation status

## Future Scripts

Additional scripts that could be added:

- **image-optimizer.js**: Automatically optimize images for web
- **image-downloader.js**: Download external images to local folders
- **data-validator.js**: Validate location data structure
- **folder-cleaner.js**: Remove unused image folders
