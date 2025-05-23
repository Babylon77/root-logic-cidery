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
          el.style.backgroundImage = `url('${newUrl}')`;
        }
      }
    });
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

  // Run immediately
  runAllFixers();
  
  // Also run when DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAllFixers);
  }
  
  // Run again after everything is loaded
  window.addEventListener('load', function() {
    runAllFixers();
    // Run once more after a delay to catch lazy-loaded content
    setTimeout(runAllFixers, 1000);
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
        shouldFix = true;
      }
    });
    
    if (shouldFix) {
      runAllFixers();
    }
  });
  
  // Start observing the document with the configured parameters
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['src', 'href'],
    childList: true,
    subtree: true
  });
  
  // Make the fixer available globally for manual fixes
  window.fixGitHubPaths = runAllFixers;
})(); 