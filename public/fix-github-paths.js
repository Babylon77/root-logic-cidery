/**
 * GitHub Pages Path Fixer
 * 
 * This script only runs on GitHub Pages deployment and fixes paths for all resources.
 * It's specifically designed to handle the subpath issue without affecting Netlify.
 */
(function() {
  // Only run on GitHub Pages
  if (window.location.hostname !== 'babylon77.github.io') {
    return;
  }
  
  console.log('GitHub Pages detected - fixing resource paths');
  
  const GITHUB_BASE = '/root-logic-cidery';
  
  // Function to fix all image paths
  function fixAllImages() {
    // Fix regular images
    document.querySelectorAll('img').forEach(img => {
      const src = img.getAttribute('src');
      if (src && !src.includes(GITHUB_BASE) && !src.startsWith('http') && !src.startsWith('data:')) {
        const newSrc = `${GITHUB_BASE}${src.startsWith('/') ? src : `/${src}`}`;
        console.log(`Fixed image: ${src} → ${newSrc}`);
        img.setAttribute('src', newSrc);
        // Also update the srcset if it exists
        const srcset = img.getAttribute('srcset');
        if (srcset) {
          const newSrcset = srcset.replace(/(^|,\s*)(\/)([^,\s]*)/g, `$1${GITHUB_BASE}$2$3`);
          img.setAttribute('srcset', newSrcset);
        }
      }
    });
    
    // Fix background images in CSS
    document.querySelectorAll('[style*="background"]').forEach(el => {
      const style = window.getComputedStyle(el);
      if (style.backgroundImage && 
          style.backgroundImage !== 'none' && 
          style.backgroundImage.includes('url(') &&
          !style.backgroundImage.includes(GITHUB_BASE)) {
        
        const match = style.backgroundImage.match(/url\(['"]?([^'"]+)['"]?\)/);
        if (match && match[1] && !match[1].startsWith('http')) {
          const originalUrl = match[1];
          const newUrl = `${GITHUB_BASE}${originalUrl.startsWith('/') ? originalUrl : `/${originalUrl}`}`;
          console.log(`Fixed background image: ${originalUrl} → ${newUrl}`);
          el.style.backgroundImage = `url('${newUrl}')`;
        }
      }
    });
    
    // Fix any CSS rules that might contain image URLs
    try {
      for (let stylesheet of document.styleSheets) {
        try {
          for (let rule of stylesheet.cssRules || stylesheet.rules || []) {
            if (rule.style && rule.style.backgroundImage) {
              const bgImage = rule.style.backgroundImage;
              if (bgImage.includes('url(') && !bgImage.includes(GITHUB_BASE)) {
                const match = bgImage.match(/url\(['"]?([^'"]+)['"]?\)/);
                if (match && match[1] && !match[1].startsWith('http')) {
                  const originalUrl = match[1];
                  const newUrl = `${GITHUB_BASE}${originalUrl.startsWith('/') ? originalUrl : `/${originalUrl}`}`;
                  rule.style.backgroundImage = `url('${newUrl}')`;
                  console.log(`Fixed CSS background image: ${originalUrl} → ${newUrl}`);
                }
              }
            }
          }
        } catch (e) {
          // Cross-origin stylesheets might cause security errors, skip them
        }
      }
    } catch (e) {
      console.warn('Could not access some stylesheets:', e);
    }
  }
  
  // Fix links to prevent navigation issues
  function fixAllLinks() {
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      // Only fix relative internal links, not external or already fixed links
      if (href && 
          href.charAt(0) === '/' && 
          !href.startsWith(GITHUB_BASE) && 
          !href.includes('://')) {
        const newHref = `${GITHUB_BASE}${href}`;
        console.log(`Fixed link: ${href} → ${newHref}`);
        link.setAttribute('href', newHref);
      }
    });
  }
  
  // Fix CSS and JS resource paths
  function fixResourcePaths() {
    // Fix stylesheet links
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.includes(GITHUB_BASE) && !href.startsWith('http')) {
        const newHref = `${GITHUB_BASE}${href.startsWith('/') ? href : `/${href}`}`;
        console.log(`Fixed stylesheet: ${href} → ${newHref}`);
        link.setAttribute('href', newHref);
      }
    });
    
    // Fix script sources
    document.querySelectorAll('script[src]').forEach(script => {
      const src = script.getAttribute('src');
      if (src && !src.includes(GITHUB_BASE) && !src.startsWith('http')) {
        const newSrc = `${GITHUB_BASE}${src.startsWith('/') ? src : `/${src}`}`;
        console.log(`Fixed script source: ${src} → ${newSrc}`);
        script.setAttribute('src', newSrc);
      }
    });
  }

  // Fix Next.js specific paths
  function fixNextJsPaths() {
    // Some Next.js paths are loaded dynamically, we need to intercept fetch calls
    const originalFetch = window.fetch;
    window.fetch = function(input, init) {
      if (typeof input === 'string' && input.startsWith('/_next/') && !input.includes(GITHUB_BASE)) {
        const newInput = `${GITHUB_BASE}${input}`;
        console.log(`Fixed fetch: ${input} → ${newInput}`);
        return originalFetch.call(this, newInput, init);
      }
      return originalFetch.call(this, input, init);
    };
  }

  // Run all fixers
  function runAllFixers() {
    fixAllImages();
    fixAllLinks();
    fixResourcePaths();
    fixNextJsPaths();
    console.log('GitHub Pages path fixing complete');
  }

  // Run immediately and repeatedly to catch all dynamic content
  runAllFixers();
  
  // Also run when DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAllFixers);
  }
  
  // Run again after everything is loaded
  window.addEventListener('load', function() {
    runAllFixers();
    // Run multiple times to catch lazy-loaded content
    setTimeout(runAllFixers, 500);
    setTimeout(runAllFixers, 1000);
    setTimeout(runAllFixers, 2000);
  });
  
  // Set up MutationObserver to handle dynamically added content
  const observer = new MutationObserver(mutations => {
    let shouldFix = false;
    
    mutations.forEach(mutation => {
      if (mutation.type === 'attributes' && 
          (mutation.attributeName === 'src' || mutation.attributeName === 'href')) {
        shouldFix = true;
      }
      
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) { // Element node
            // Check if it's an image or contains images
            if (node.tagName === 'IMG' || node.querySelector && node.querySelector('img')) {
              shouldFix = true;
            }
          }
        });
      }
    });
    
    if (shouldFix) {
      // Small delay to let the DOM settle
      setTimeout(runAllFixers, 50);
    }
  });
  
  // Start observing the document with the configured parameters
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['src', 'href', 'srcset'],
    childList: true,
    subtree: true
  });
  
  // Make the fixer available globally for manual fixes
  window.fixGitHubPaths = runAllFixers;
})(); 