// This script helps fix image paths for GitHub Pages deployment
// It creates an explicit copy of all images in the root-logic-cidery directory

document.addEventListener('DOMContentLoaded', function() {
  // Check if we're running on GitHub Pages
  if (window.location.hostname === 'babylon77.github.io') {
    // Wait for images to load and check for errors
    window.addEventListener('load', function() {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // If image failed to load and isn't already using the corrected path
        if (img.naturalWidth === 0 && !img.src.includes('/root-logic-cidery/')) {
          const originalSrc = img.getAttribute('src');
          if (originalSrc) {
            // Add the base path to fix the image
            const newSrc = '/root-logic-cidery' + originalSrc;
            console.log(`Fixing image path: ${originalSrc} → ${newSrc}`);
            img.src = newSrc;
          }
        }
      });
    });
  }
}); 