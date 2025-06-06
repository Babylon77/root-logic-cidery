import Head from 'next/head'
import { useEffect, useState } from 'react'

// Extend Window interface to include our custom properties
declare global {
  interface Window {
    fixAllImages?: () => void;
    GITHUB_PAGES_BASE_PATH?: string;
  }
}

interface SiteHeadProps {
  title?: string;
  description?: string;
}

export default function SiteHead({ 
  title = 'Colonial Cidery and Orchard', 
  description = 'Premium heritage apple ciders made with Harrison and Virginia Hewes Crab apples. Organic, naturally fermented with no additives. 500ml and 750ml bottles priced $15-22.'
}: SiteHeadProps) {
  const [basePath, setBasePath] = useState('');
  
  useEffect(() => {
    // Determine if we're on GitHub Pages
    const isGitHubPages = window.location.hostname === 'babylon77.github.io';
    if (isGitHubPages) {
      setBasePath('/root-logic-cidery');
      
      // Add global function to fix images (can be called from anywhere)
      window.fixAllImages = function() {
        console.log('Manual image path fixing initiated');
        
        // Fix all image elements
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          const src = img.getAttribute('src');
          if (src && !src.includes('/root-logic-cidery/') && !src.startsWith('http')) {
            const newSrc = `/root-logic-cidery${src.startsWith('/') ? src : `/${src}`}`;
            console.log(`Manual fix: ${src} → ${newSrc}`);
            img.setAttribute('src', newSrc);
          }
        });
        
        // Fix background images
        document.querySelectorAll('[style*="background"]').forEach(el => {
          const style = window.getComputedStyle(el);
          if (style.backgroundImage && style.backgroundImage !== 'none' && 
              style.backgroundImage.includes('url(') && 
              !style.backgroundImage.includes('/root-logic-cidery/')) {
            
            const match = style.backgroundImage.match(/url\(['"]?([^'"]+)['"]?\)/);
            if (match && match[1] && !match[1].startsWith('http')) {
              const originalUrl = match[1];
              const newUrl = `/root-logic-cidery${originalUrl.startsWith('/') ? originalUrl : `/${originalUrl}`}`;
              (el as HTMLElement).style.backgroundImage = `url('${newUrl}')`;
            }
          }
        });
      };
    }
  }, []);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={`${basePath}/favicon.ico`} />
      
      {/* Add base tag for GitHub Pages */}
      {basePath && <base href={basePath} />}
      
      {/* Extra meta tags for GitHub Pages */}
      {basePath && (
        <>
          <meta name="github-pages-base-path" content={basePath} />
          <script dangerouslySetInnerHTML={{ 
            __html: `
              // Global variable for GitHub Pages base path
              window.GITHUB_PAGES_BASE_PATH = '${basePath}';
              
              // Run image fix on load and after 1 second
              window.addEventListener('load', function() {
                if (typeof window.fixAllImages === 'function') {
                  window.fixAllImages();
                  // Run again after a delay to catch lazy-loaded images
                  setTimeout(window.fixAllImages, 1000);
                }
              });
            `
          }} />
        </>
      )}
    </Head>
  );
} 