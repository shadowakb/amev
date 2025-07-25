#!/bin/bash

# Vietnam Travel Itinerary - Deployment Script
# This script builds and deploys the React app to GitHub Pages

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    
    # Deploy to GitHub Pages
    echo "🌐 Deploying to GitHub Pages..."
    npm run deploy
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment completed successfully!"
        echo "📱 Your app should be available at: https://shadowakb.github.io/vietnam-travel-itinerary"
        echo ""
        echo "📝 Don't forget to:"
        echo "   1. Update the 'homepage' field in package.json with your actual GitHub Pages URL"
        echo "   2. Enable GitHub Pages in your repository settings"
        echo "   3. Set the source to 'gh-pages' branch"
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
