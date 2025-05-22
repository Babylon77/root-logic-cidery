// This script helps fix image paths for GitHub Pages deployment
// It creates an explicit copy of all images in the root-logic-cidery directory

document.addEventListener('DOMContentLoaded', function() {
  // Check if we're running on GitHub Pages
  if (window.location.hostname === 'babylon77.github.io') {
    console.log('Running on GitHub Pages - fixing image paths');
    
    // Fix all images preemptively rather than waiting for load errors
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const originalSrc = img.getAttribute('src');
      if (originalSrc && !originalSrc.includes('/root-logic-cidery/') && !originalSrc.startsWith('http')) {
        // Add the base path to fix the image
        const newSrc = '/root-logic-cidery' + (originalSrc.startsWith('/') ? '' : '/') + originalSrc;
        console.log(`Fixing image path: ${originalSrc} → ${newSrc}`);
        img.src = newSrc;
      }
    });
    
    // Also fix background images in CSS (look for elements with background-image style)
    const elementsWithBackgroundImages = Array.from(document.querySelectorAll('*')).filter(el => {
      const style = window.getComputedStyle(el);
      return style.backgroundImage !== 'none' && style.backgroundImage.includes('url(');
    });
    
    elementsWithBackgroundImages.forEach(el => {
      const bgImage = window.getComputedStyle(el).backgroundImage;
      if (bgImage.includes('url(') && !bgImage.includes('/root-logic-cidery/') && !bgImage.includes('http')) {
        // Extract the URL from the background-image
        const urlMatch = bgImage.match(/url\(['"]?([^'"]+)['"]?\)/);
        if (urlMatch && urlMatch[1]) {
          const originalUrl = urlMatch[1];
          const newUrl = '/root-logic-cidery' + (originalUrl.startsWith('/') ? '' : '/') + originalUrl;
          console.log(`Fixing background image: ${originalUrl} → ${newUrl}`);
          el.style.backgroundImage = `url('${newUrl}')`;
        }
      }
    });
    
    // Handle images that load later or are added dynamically
    window.addEventListener('load', function() {
      // Re-run the fix for any images that might have been missed
      const allImages = document.querySelectorAll('img');
      allImages.forEach(img => {
        if (img.naturalWidth === 0 && !img.src.includes('/root-logic-cidery/') && !img.src.startsWith('http')) {
          const originalSrc = img.getAttribute('src');
          if (originalSrc) {
            // Add the base path to fix the image
            const newSrc = '/root-logic-cidery' + (originalSrc.startsWith('/') ? '' : '/') + originalSrc;
            console.log(`Fixing missed image path: ${originalSrc} → ${newSrc}`);
            img.src = newSrc;
          }
        }
      });
    });
  }
}); 