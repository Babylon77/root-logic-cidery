// This script helps fix image paths for GitHub Pages deployment
// It preemptively fixes all image paths by intercepting image loading

(function() {
  // Run immediately when script loads
  console.log('Image path fixer initializing');
  
  // GitHub Pages specific configuration
  const isGitHubPages = window.location.hostname === 'babylon77.github.io';
  const basePath = '/root-logic-cidery';
  
  if (isGitHubPages) {
    console.log('Running on GitHub Pages - applying image fixes');
    
    // 1. Intercept all image loading using a MutationObserver
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'src' && 
            mutation.target.tagName === 'IMG') {
          fixImageSrc(mutation.target);
        }
        
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach(function(node) {
            // Check if the added node is an element
            if (node.nodeType === 1) {
              // Fix all images within the added node
              const images = node.querySelectorAll ? node.querySelectorAll('img') : [];
              Array.from(images).forEach(fixImageSrc);
              
              // If the node itself is an image, fix it
              if (node.tagName === 'IMG') {
                fixImageSrc(node);
              }
            }
          });
        }
      });
    });
    
    // Start observing the entire document
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['src'],
      childList: true,
      subtree: true
    });
    
    // 2. Fix all current images on page
    function fixAllImages() {
      const images = document.querySelectorAll('img');
      images.forEach(fixImageSrc);
      
      // Fix CSS background images
      fixCssBackgroundImages();
    }
    
    // 3. Function to fix individual image src
    function fixImageSrc(img) {
      try {
        const src = img.getAttribute('src');
        if (!src) return;
        
        // Skip if already fixed or is absolute URL
        if (src.includes(basePath) || src.startsWith('http') || src.startsWith('data:')) {
          return;
        }
        
        // Fix the path
        const newSrc = basePath + (src.startsWith('/') ? src : '/' + src);
        console.log(`Fixing image path: ${src} → ${newSrc}`);
        img.setAttribute('src', newSrc);
      } catch (e) {
        console.warn('Error fixing image:', e);
      }
    }
    
    // 4. Fix CSS background images
    function fixCssBackgroundImages() {
      // Create a style element for our fixed URLs
      const styleElement = document.createElement('style');
      document.head.appendChild(styleElement);
      
      // Get all elements with computed style
      const allElements = document.querySelectorAll('*');
      let cssRules = [];
      
      allElements.forEach((el, index) => {
        const style = window.getComputedStyle(el);
        const bgImage = style.backgroundImage;
        
        if (bgImage && bgImage !== 'none' && bgImage.includes('url(') && 
            !bgImage.includes(basePath) && !bgImage.includes('http')) {
          
          // Extract the URL
          const urlMatch = bgImage.match(/url\(['"]?([^'"]+)['"]?\)/);
          if (urlMatch && urlMatch[1]) {
            const originalUrl = urlMatch[1];
            // Fix the path
            const newUrl = basePath + (originalUrl.startsWith('/') ? originalUrl : '/' + originalUrl);
            
            // Add a unique class to the element
            const className = `gh-fixed-bg-${index}`;
            el.classList.add(className);
            
            // Create a CSS rule for this element
            cssRules.push(`.${className} { background-image: url("${newUrl}") !important; }`);
            console.log(`Fixing background image: ${originalUrl} → ${newUrl}`);
          }
        }
      });
      
      // Apply all rules at once
      if (cssRules.length > 0) {
        styleElement.textContent = cssRules.join('\n');
      }
    }
    
    // 5. Run on DOMContentLoaded and again on load to catch everything
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fixAllImages);
    } else {
      fixAllImages();
    }
    
    window.addEventListener('load', fixAllImages);
    
    // 6. Expose a global function to fix images on demand
    window.fixGithubPagesImages = fixAllImages;
  }
})(); 