# Scripts Documentation

This document describes the utility scripts available for managing the Vietnam Travel Itinerary app.

## convert-images-to-local.js

A Node.js script to automate the conversion of external image URLs to local paths in the location data.

### Location

```
scripts/convert-images-to-local.js
```

### Usage

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

### Example Output

```
Processing: Hoan Kiem Lake, Hanoi
  Found 8 images
Created folder: /path/to/public/images/hoan-kiem-lake-hanoi

Processing: Thang Long Water Puppet Theatre, Hanoi
  Found 6 images
Created folder: /path/to/public/images/thang-long-water-puppet-theatre-hanoi
```

### Command Options

#### `--summary` or `-s`
Shows the mapping between location names and their corresponding folder names without making any changes.

```bash
node scripts/convert-images-to-local.js --summary
```

Output:
```
📋 Location to Folder Mapping:
=====================================
Hoan Kiem Lake, Hanoi → hoan-kiem-lake-hanoi
Thang Long Water Puppet Theatre, Hanoi → thang-long-water-puppet-theatre-hanoi
Hoi An Ancient Town → hoi-an-ancient-town
```

#### `--convert` or `-c`
Performs the actual conversion of URLs to local paths and creates the folder structure.

```bash
node scripts/convert-images-to-local.js --convert
```

This command will:
- Create all necessary folders in `public/images/`
- Update `src/data/locations.js` with local paths
- Create a backup file (`locations.js.backup`)

#### `--help` or `-h`
Shows usage information and available options.

### After Running the Script

1. **Add images manually**: Place your images in the created folders
2. **Name correctly**: Use sequential naming (1.jpg, 2.jpg, 3.jpg, etc.)
3. **Test the app**: Verify images load correctly in the application

### Safety Features

- **Creates backup**: Original file is backed up before changes
- **Non-destructive**: Can be reverted using the backup
- **Validation**: Only processes valid location entries
- **Preserves data**: Maintains alt text and other image properties

### Technical Details

#### Folder Name Generation
The script converts location names to folder-safe slugs using these rules:
- Convert to lowercase
- Remove commas and special characters
- Replace spaces with hyphens
- Remove multiple consecutive hyphens

#### Path Generation
Local paths are generated as:
```
/images/[location-slug]/[image-number].jpg
```

Where:
- `location-slug` is the converted location name
- `image-number` starts from 1 (not 0)

### Error Handling

The script includes error handling for:
- File read/write operations
- Invalid location data format
- Missing directories
- Permission issues

### Exported Functions

The script exports several utility functions that can be used programmatically:

```javascript
const {
  locationNameToSlug,
  getLocalImagePath,
  createFolderStructure,
  convertLocationsFile,
  generateLocationSummary
} = require('./scripts/convert-images-to-local.js');
```

## Future Scripts

Additional scripts that could be added to enhance the development workflow:

### image-optimizer.js
- Automatically optimize images for web
- Compress images to target file sizes
- Convert to optimal formats (WebP, etc.)

### image-downloader.js
- Download external images to local folders
- Batch download from URLs in location data
- Automatic naming and organization

### data-validator.js
- Validate location data structure
- Check for missing required fields
- Verify image path consistency

### folder-cleaner.js
- Remove unused image folders
- Clean up orphaned files
- Maintain folder structure integrity

## Best Practices

### Before Running Scripts
1. **Backup your data**: Always ensure you have backups
2. **Test in development**: Run scripts in a development environment first
3. **Review changes**: Check the generated folder structure and paths

### After Running Scripts
1. **Verify output**: Check that folders were created correctly
2. **Test the app**: Ensure the application still works
3. **Add images**: Populate folders with appropriate images

### Maintenance
1. **Regular updates**: Re-run scripts when adding new locations
2. **Monitor performance**: Check image loading performance
3. **Update documentation**: Keep docs in sync with script changes

## Troubleshooting

### Common Issues

#### Permission Errors
```bash
# Fix permission issues
chmod +x scripts/convert-images-to-local.js
```

#### Node.js Not Found
Ensure Node.js is installed and available in your PATH.

#### File Not Found Errors
Verify you're running the script from the correct directory (ReactApp root).

#### Backup File Conflicts
If a backup already exists, the script will not overwrite it. Remove or rename the existing backup file.

### Getting Help

1. Run the script with `--help` for usage information
2. Check the console output for specific error messages
3. Verify file paths and permissions
4. Review the generated backup file if needed
